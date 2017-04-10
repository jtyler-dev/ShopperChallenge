import React from 'react';
import { Button, Col, Grid, Row} from 'react-bootstrap';


class ApplicationForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("WE HERE");

        if(this.props.closeModal) {
            //close the modal we are in
            this.props.closeModal();
        }
    }
    render() {
        return(
            <div className="applicationFormContainer">
                <form className="applicationForm" onSubmit={this.handleSubmit}>
                    <div className="formfields">
                        <div className="nameField">
                          <input type="text" name="first_name" placeholder="First Name"/>
                          <input type="text" name="last_name" className="lastName" placeholder="Last Name"/>
                        </div>
                      <input type="email" name="email" placeholder="Email"/>
                      <input type="tel" name="phone_number" placeholder="Cell Phone Number"/>
                      <input type="text" name="zip_code" placeholder="Zip Code"/>
                      <input type="text" name="zip_code" placeholder="Referral Code (optional)"/>
                    </div>
                    <div className="disclaimerText">
                        We will use this information to communicate with you about your application.
                    </div>
                  <Button bsStyle="success" bsSize="large" block type="submit">Continue ></Button>
                </form>
            </div>
        );
    }
};

module.exports = ApplicationForm;
