import React from 'react';
import Agreement from './Agreement';
import ApplicationForm from './ApplicationForm';
import ThankYou from './ThankYou';
import DeviceSelect from './DeviceSelect';
import axios from 'axios';

class Regflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
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

     errorScreen() {
         this.setState({
           step : 5
         });
     }

     saveValues(values){
         this.data = Object.assign({},this.data,values);
     }

     handleSubmit(cb) {
         // if data is all here do a rest call and save the data
         console.log("-----submit state-------");
         console.log('component state', JSON.stringify(this.data));

         axios.post('http://localhost:8080/api/user', this.data)
          .then(function (response) {
              //todo: check for errors
              cb();
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            this.errorScreen();
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
                        />
            case 4:
                return <ThankYou closeModal={this.props.closeModal}/>
            case 5:
                return <Error closeModal={this.props.closeModal}/>
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


module.exports = Regflow;
