import React from 'react';
import { Button} from 'react-bootstrap';


class ApplicationForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("WE HERE");
    }
    render() {
        return(
            <form className="applicationForm" onSubmit={this.handleSubmit}>
              <input type="text" name="first_name" placeholder="First Name"/>
              <input type="text" name="last_name" placeholder="Last Name"/>
              <input type="email" name="email" placeholder="Email"/>
              <input type="tel" name="phone_number" placeholder="Cell Phone Number"/>
              <input type="text" name="zip_code" placeholder="Zip Code"/>
              <input type="text" name="zip_code" placeholder="Referral Code (optional)"/>
              <Button bsStyle="success" bsSize="large" block type="submit">Continue ></Button>
            </form>
        );
    }
};

module.exports = ApplicationForm;
