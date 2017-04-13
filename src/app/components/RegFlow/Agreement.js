import React from 'react';
import { Button} from 'react-bootstrap';


class Agreement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNotChecked: true
        }
        this.nextStep = this.nextStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    nextStep(e) {
        e.preventDefault();

        var isChecked = this.refs.bgCheckBox.checked;

        if(isChecked) {
            this.props.saveValues({agreement: isChecked});
            //TODO : pop up spinner gif wait until submitted and then move to next screen
            this.props.handleSubmit(this.handleUpload);
            //this.props.nextStep();
        }
    }

    handleUpload() {
        /// turn off spinner
        // go to next page
        this.props.nextStep();
    }

    handleChange(e) {
        this.setState({
            isNotChecked: !this.refs.bgCheckBox.checked
        });
    }

    render() {
        return(
            <div className="agreementContainer">
                <div className="agreementTitle">
                    Agreement for Running a background check.
                </div>
                <div className="agreementText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ligula lacus, viverra nec nisl eget, euismod tristique tellus.
                    Quisque ligula metus, ultricies a cursus sit amet, luctus eu purus.
                    Quisque a metus id lorem ultrices molestie. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. Phasellus id
                    lorem facilisis, consectetur nisi sed, faucibus enim. Maecenas euismod
                    ipsum vel enim luctus, a efficitur purus molestie.
                </div>
                <div className="agreementCheck">
                    By selecting 'Yes' below I am agreeing the terms and conditions set forth from Instacart
                    <div className="checkboxContainer">
                        <input type="checkbox" id="backgroundCheck" ref="bgCheckBox" name="backgroundCheck" value="backgroundCheck" onChange={this.handleChange}/>
                        <label htmlFor="backgroundCheck">Yes, allow Instacart to preform a background check on me.</label>
                    </div>
                </div>

                <Button ref="submitBtn" bsStyle="success" bsSize="large" block type="submit" onClick={this.nextStep} disabled={this.state.isNotChecked}>Submit Application</Button>
            </div>
        );
    }
};

module.exports = Agreement;
