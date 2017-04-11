import React from 'react';
import Agreement from './Agreement';
import ApplicationForm from './ApplicationForm';
import ThankYou from './ThankYou';

class Regflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            step: 1
        }

        this.showStep = this.showStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.saveValues = this.saveValues.bind(this);
    }

    nextStep() {
        this.setState({
          step : this.state.step + 1
        })
     }

     previousStep() {
        this.setState({
          step : this.state.step - 1
        })
     }

     saveValues(values){

     }

     handleSubmit() {

     }

    showStep() {
        switch (this.state.step) {
            case 1:
                return <ApplicationForm
                            saveValues={this.saveValues}
                            nextStep={this.nextStep}
                        />
            case 2:
                return <Agreement
                        saveValues={this.saveValues}
                        nextStep={this.nextStep}
                        />
            case 3:
                return <ThankYou closeModal={this.props.closeModal}/>
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
