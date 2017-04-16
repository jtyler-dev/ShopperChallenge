import React from 'react';
import { Button} from 'react-bootstrap';


class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="thankYouPage">
                <div className="errortitle">
                    An error has occured, please try again later
                </div>
                <div>
                    Error Message: {this.props.msg}
                </div>
                <Button ref="submitBtn" bsStyle="success" bsSize="large" block type="submit" onClick={this.props.closeModal}>Close</Button>
            </div>
        );
    }
};

module.exports = Error;
