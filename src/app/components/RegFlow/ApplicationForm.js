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

        if(!this.showFormErrors()) {
            // invalid form
        } else {
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
        const isZip = refName.indexOf('zip_code') !== -1;
        const isPhone = refName.indexOf('phone_number') !== -1;


        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${placeholder} is a required field`;
            } else if (validity.typeMismatch) {
                error.textContent = `${placeholder} should be a valid email address`;
            } else if (isZip && validity.patternMismatch) {
                error.textContent = `${placeholder} can only be alphanumic characters`;
            }else if (isPhone && validity.patternMismatch) {
                error.textContent = `${placeholder} should follow the pattern of xxx-xxx-xxxx`;
            }
            return false;
        }

        error.textContent = "";
        return true;
    }


    render() {
        return(
            <div className="applicationFormContainer">
                <div className="applicationForm" noValidate>
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
                                    placeholder="Cell Phone Number (xxx-xxx-xxxx)"
                                    value={this.state.phone_number}
                                    onChange={ this.handleChange }
                                    pattern="^\d{3}-\d{3}-\d{4}$"
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
                                     pattern="[a-zA-Z0-9]+"
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
