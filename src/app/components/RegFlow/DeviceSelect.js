import React from 'react';
import { Button} from 'react-bootstrap';


class DeviceSelect extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        var type = event.target.getAttribute("data-deviceType");
        
        // doube check to make sure that the type we have been passed in matches
        // what we are expecting
        if(type === "andriod" || type === "apple" || type === "other") {
            this.props.saveValues({phone_type: type});
            this.props.nextStep();
        }
    }

    render() {
        return (
            <div className="deviceSelectContainer">
                <div className="deviceTitle">Please Select Your Current Phone</div>
                <Button bsStyle="default" bsSize="large" block type="submit" data-deviceType="andriod" onClick={this.handleSubmit}><i className="fa fa-android" aria-hidden="true"></i> Android</Button>
                <Button bsStyle="default" bsSize="large" block type="submit" data-deviceType="apple" onClick={this.handleSubmit}><i className="fa fa-apple" aria-hidden="true"></i> Apple</Button>
                <Button bsStyle="default" bsSize="large" block type="submit" data-deviceType="other" onClick={this.handleSubmit}>Other</Button>

            </div>
        );
    }
};

module.exports = DeviceSelect;
