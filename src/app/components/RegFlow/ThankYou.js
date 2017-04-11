import React from 'react';
import { Button} from 'react-bootstrap';

class ThankYou extends React.Component {
    render() {
        return(
            <div className="thankYouPage">
                <div className="text">
                    Thank you for your aplication. We will be in contact with you soon.
                    <br/>
                    To check the status of your application please login using your email.
                </div>
                <Button ref="submitBtn" bsStyle="success" bsSize="large" block type="submit" onClick={this.props.closeModal}>Close</Button>
            </div>
        );
    }
};

module.exports = ThankYou;
