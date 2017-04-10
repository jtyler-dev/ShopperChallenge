import React from 'react';
import {Glyphicon, Col, Grid, Row, Button} from 'react-bootstrap';


class LandingPage extends React.Component {
    render () {
        return(
            <div id="landingPage">
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
                                    <Button bsStyle="success" bsSize="large">Apply Now</Button>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </section>
                <section className="infoSection">
                    <Grid>
                        <Row>
                            <Col md={4}>
                                <div className="infoCard">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    <div className="cardTitle">Be Independent</div>
                                    <p>Schedule work around your own life.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="infoCard">
                                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                                    <div className="cardTitle">Have Fun</div>
                                    <p>Spend time shopping, exploring new things and being active.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="infoCard">
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                    <div className="cardTitle">Earn Extra Income</div>
                                    <p>Get paid weekly. Work Sundays to maximize your hours and pay.</p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </section>
                <section className="jobSection">
                    <Grid>
                        <Row>
                            JOBS GO HERE
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
};

module.exports = LandingPage;
