import React from 'react';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="infoCard">
                <i className={this.props.iconStr} aria-hidden="true"></i>
                <div className="cardTitle">{this.props.cardTitle}</div>
                <p>{this.props.cardText}</p>
            </div>
        );
    }
};

module.exports = InfoCard;
