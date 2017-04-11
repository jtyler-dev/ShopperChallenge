import React from 'react';
import { Button, Col, Grid, Row} from 'react-bootstrap';


class ApplicationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            zip_code: "",
            referral_code: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.target.classList.add('active');

        this.setState({
            [e.target.name] : e.target.value
        });

        this.showInputError(e.target.name);
    }

    handleSubmit(event) {
        event.preventDefault();

        // do soemthing with the state HERE

        if(!this.showFormErrors()) {
            // invalid form
        } else {
            // send data, close modal
            // if(this.props.closeModal) {
            //     //close the modal we are in
            //     this.props.closeModal();
            // }
            this.props.saveValues(this.state);
            this.props.nextStep();
        }


    }

    showFormErrors() {
        // select all inputs
        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

        // check all inputs on the form
        inputs.forEach(input => {
            input.classList.add('active');

            const isInputValid = this.showInputError(input.name);

            if (!isInputValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    showInputError(refName) {
        const validity = this.refs[refName].validity;
        const placeholder = this.refs[refName].getAttribute("placeholder");
        const error = document.getElementById(`${refName}Error`);
        const isPassword = refName.indexOf('password') !== -1;


        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${placeholder} is a required field`;
            } else if (validity.typeMismatch) {
                error.textContent = `${placeholder} should be a valid email address`;
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${placeholder} should be longer than 4 chars`;
            }
            return false;
        }

        error.textContent = "";
        return true;
    }


    render() {
        return(
            <div className="applicationFormContainer">
                <div className="applicationForm" onSubmit={this.handleSubmit} noValidate>
                    <div className="formfields">
                        <div className="nameField">
                            <div className="nameContainer fLeft">
                                <input  type="text"
                                        name="first_name"
                                        ref="first_name"
                                        placeholder="First Name"
                                        value={this.state.first_name}
                                        onChange={ this.handleChange }
                                        required/>
                                <div className="error" id="first_nameError" />
                            </div>
                            <div className="nameContainer fRight">
                                <input  type="text"
                                        name="last_name"
                                        ref="last_name"
                                        className="lastName"
                                        placeholder="Last Name"
                                        value={this.state.last_name}
                                        onChange={ this.handleChange }
                                        required/>
                                <div className="error" id="last_nameError" />
                            </div>
                        </div>
                        <div>
                            <input  type="email"
                                    name="email"
                                    placeholder="Email"
                                    ref="email"
                                    value={this.state.email}
                                    onChange={ this.handleChange }
                                    required/>
                            <div className="error" id="emailError" />
                        </div>
                        <div>
                            <input  type="tel"
                                    name="phone_number"
                                    ref="phone_number"
                                    placeholder="Cell Phone Number"
                                    value={this.state.phone_number}
                                    onChange={ this.handleChange }
                                    required/>
                            <div className="error" id="phone_numberError" />
                        </div>
                        <div>
                            <input  type="text"
                                    name="zip_code"
                                    ref="zip_code"
                                    placeholder="Zip Code"
                                    value={this.state.zip_code}
                                    onChange={this.handleChange}
                                    required/>
                            <div className="error" id="zip_codeError" />
                        </div>
                        <div>
                            <input  type="text"
                                    name="referral_code"
                                    ref="referral_code"
                                    value={this.state.referral_code}
                                    onChange={this.handleChange}
                                    placeholder="Referral Code (optional)"/>
                            <div className="error" id="referral_codeError" />
                        </div>
                    </div>
                    <div className="disclaimerText">
                        We will use this information to communicate with you about your application.
                    </div>
                  <Button bsStyle="success" bsSize="large" block type="submit" onClick={this.handleSubmit}>Continue ></Button>
                </div>
            </div>
        );
    }
};

module.exports = ApplicationForm;