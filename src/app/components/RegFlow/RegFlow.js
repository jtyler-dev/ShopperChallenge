import React from 'react';
import { connect } from 'react-redux';
import Agreement from './Agreement';
import ApplicationForm from './ApplicationForm';
import ThankYou from './ThankYou';
import DeviceSelect from './DeviceSelect';
import Error from './Error';
import * as UserActions from '../../actions/userActions';


import axios from 'axios';

class Regflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            errMsg: ''
        }

        this.data = {
                first_name: null,
                last_name: null,
                email: null,
                phone_number: null,
                zip_code: null,
                referral_code: null,
                agreement: null,
                phone_type: null
        };

        this.showStep = this.showStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.saveValues = this.saveValues.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.errorScreen = this.errorScreen.bind(this);
    }

    nextStep() {
        this.setState({
          step : this.state.step + 1
        });
     }

     previousStep() {
        this.setState({
          step : this.state.step - 1
        });
     }

     errorScreen(errMsg) {
         this.setState({step : 5, errMsg: errMsg});
     }

     saveValues(values){
         this.data = Object.assign({},this.data,values);
     }

     handleSubmit(cb) {
         // if data is all here do a rest call and save the data
        
         var that = this;

         axios.post('http://localhost:8080/api/user', this.data)
          .then(function (response) {
              if(response.data.isError) {
                  that.errorScreen(response.data.message);
              } else {
                  that.props.setUserData(that.data);
                  cb();
              }
          })
          .catch(function (error) {
            console.log(error);
            that.errorScreen(error.toString());
          });
     }

    showStep() {
        switch (this.state.step) {
            case 1:
                return <ApplicationForm
                            saveValues={this.saveValues}
                            nextStep={this.nextStep}
                        />
            case 2:
                return <DeviceSelect
                            saveValues={this.saveValues}
                            nextStep={this.nextStep}
                        />
            case 3:
                return <Agreement
                        saveValues={this.saveValues}
                        handleSubmit={this.handleSubmit}
                        nextStep={this.nextStep}
                        error={this.errorScreen}
                        />
            case 4:
                return <ThankYou closeModal={this.props.closeModal}/>
            case 5:
                return <Error msg={this.state.errMsg} closeModal={this.props.closeModal}/>
        };
    }

    render() {
        return (
            <div>
                {this.showStep()}
            </div>
        );
    }
};

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    userData: state.userData
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.setUserData
    setUserData: data => dispatch(UserActions.setUserData(data))
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Regflow);
