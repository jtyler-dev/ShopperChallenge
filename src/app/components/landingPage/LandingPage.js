import React from 'react';
import {Glyphicon, Col, Grid, Row, Button, Modal} from 'react-bootstrap';
import InfoCard from './InfoCard';
import JobPostings from './JobPostings';

import Regflow from '../Regflow/Regflow';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    getInitialState() {
        return { showModal: false };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render () {
        return(
            <div id="landingPage" className="modal-container">
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                       <Modal.Title id="contained-modal-title">Apply in under 5 minutes</Modal.Title>
                     </Modal.Header>
                    <Regflow userData={this.props.userData}closeModal={this.close}/>
                </Modal>

                <section className="introSection">
                    <Grid>
                        <Row>
                            <Col sm={6} smOffset={3} md={6} mdOffset={3}>
                                <div className="eyeCatch">
                                    <div className="largeText">
                                        Earn money shopping and delivering groceries, giving customers more time to do what they love.
                                    </div>
                                    <div className="subText">
                                        Apply in under 5 minutes! Attend an in-person session and start work within one week!
                                    </div>
                                    <Button bsStyle="success" bsSize="large" onClick={this.open}>Apply Now</Button>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </section>
                <section className="infoSection">
                    <Grid>
                        <Row>
                            <Col md={4}>
                                <InfoCard iconStr="fa fa-clock-o" cardTitle="Be Independent" cardText="Schedule work around your own life." />
                            </Col>
                            <Col md={4}>
                                <InfoCard iconStr="fa fa-smile-o" cardTitle="Have Fun" cardText="Spend time shopping, exploring new things and being active." />
                            </Col>
                            <Col md={4}>
                                <InfoCard iconStr="fa fa-money" cardTitle="Earn Extra Income" cardText="Get paid weekly. Work Sundays to maximize your hours and pay." />
                            </Col>
                        </Row>
                    </Grid>
                </section>
                <section className="jobSection">
                    <JobPostings />
                </section>
            </div>
        );
    }
};

module.exports = LandingPage;
