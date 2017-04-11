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
    }

    nextStep(e) {
        e.preventDefault();

        var isChecked = this.refs.bgCheckBox.checked;

        if(isChecked) {
            this.props.saveValues({agreement: isChecked});
            this.props.nextStep();
        }
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
                    Program" shall mean the copyright license to make, use, sell,
                    offer for sale, have made, use, practice, sell, and offer for sale,
                    have made, use, practice, sell, and offer for sale, have made, and/or
                    otherwise dispose of Modifications or portions thereof and corresponding
                    documentation released with the terms and conditions of merchantability
                    and fitness for a fee. You may Distribute verbatim copies may or may not be
                    used for software interchange; or, c)
                </div>
                <div className="agreementCheck">
                    By selecting 'Yes' below I am agreeing the terms and conditions set forth from Instacart
                    <div className="checkboxContainer">
                        <input type="checkbox" id="backgroundCheck" ref="bgCheckBox" name="backgroundCheck" value="backgroundCheck" onChange={this.handleChange}/>
                        <label for="backgroundCheck">Yes, allow Instacart to preform a background check on me.</label>
                    </div>
                </div>

                <Button ref="submitBtn" bsStyle="success" bsSize="large" block type="submit" onClick={this.nextStep} disabled={this.state.isNotChecked}>Submit Application</Button>
            </div>

        );
    }
};


module.exports = Agreement;
