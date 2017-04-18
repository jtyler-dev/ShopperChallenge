import React from 'react';
import { connect } from 'react-redux';
import {Glyphicon, Col, Grid, Row, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import * as UserActions from '../../actions/userActions';

class UserEdit extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDropDownChange = this.handleDropDownChange.bind(this);

        this.state = this.getInitialState();
    }
    getInitialState() {
        var ret = {
            first_name: "",
            last_name: "",
            phone_number: "",
            zip_code: "",
            referral_code: "",
            phone_type: "android"
        };

        if(this.props.userData.email) {
            ret = {
                first_name: this.props.userData.first_name,
                last_name: this.props.userData.last_name,
                phone_number: this.props.userData.phone_number,
                zip_code: this.props.userData.zip_code,
                referral_code: this.props.userData.referral_code,
                phone_type: this.props.userData.phone_type,
                email: this.props.userData.email
            };
        }

        return ret;
    }

    handleSubmit(e) {
        this.props.setUserData(this.state);
    }

    handleChange(e) {
        e.target.classList.add('active');

        this.setState({
            [e.target.name] : e.target.value
        });

        this.showInputError(e.target.name);
    }

    handleDropDownChange(e) {
        this.setState({
            "phone_type" : e.target.value
        });
        console.log("test");
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
            <div className="userEdit">
                <Grid>
                    <Row>
                        <Col className="userEmailID" md={12}>
                            Information for user : {this.props.userData.email}
                        </Col>
                    </Row>
                    <Row>
                        <div className="userEditContainer" >
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
                                    <div>
                                        <FormGroup controlId="formControlsSelect">
                                             <ControlLabel>Select Phone Type</ControlLabel>
                                             <FormControl componentClass="select" placeholder="select" value={this.state.phone_type} onChange={this.handleDropDownChange}>
                                               <option value="andriod">Android</option>
                                               <option value="apple">Apple</option>
                                               <option value="other">Other</option>
                                             </FormControl>
                                       </FormGroup>
                                    </div>
                                </div>
                            </div>

                        <Link to="/">
                            <Button bsStyle="success" bsSize="large" block type="submit" onClick={this.handleSubmit}>Save</Button>
                        </Link>

                    </Row>
                </Grid>

            </div>
        );
    }
};

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.userData
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserEdit);
