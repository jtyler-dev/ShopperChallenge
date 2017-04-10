import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';

// hard coded state-less Component
// In a full production application this would a template to render
// jobs pulled from the server
// for now this is just to get some content on the page to get an idea of what
// it might look like.
class JobPostings extends React.Component {
    render () {
        return (
            <div className="jobPostings">
                <Grid>
                    <Row>
                        <Col md={12}>
                            <div className="sectionTitle">
                                <h3>Positions at Instacart</h3>
                                <p>Shop, check-out, deliver or do it all - there's a role for you at Instacart.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="jobTitle">No Car? No Problem</div>
                        </Col>

                        <Col md={6}>
                            <div className="jobPost">
                                <div className="name">
                                    Shopper <span  className="jobType">[ Part-time ]</span>
                                </div>
                                <div className="jobDesc">
                                    Shop for grocery orders in local stores.
                                </div>
                                <div className="jobResponsibility">
                                    <ul>
                                        <li>Shopping only</li>
                                        <li>No vehicle required</li>
                                        <li>Flexible schedule</li>
                                        <li>Work up to 29 hrs/wk</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="jobPost">
                                <div className="name">
                                    Cashier <span  className="jobType">[ Part-time ]</span>
                                </div>
                                <div className="jobDesc">
                                    Work the cash register to check out orders.
                                </div>
                                <div className="jobResponsibility">
                                    <ul>
                                        <li>Check-out only</li>
                                        <li>No vehicle required</li>
                                        <li>Flexible schedule</li>
                                        <li>Work up to 29 hrs/wk</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className="jobTitle">Car Required</div>
                        </Col>

                        <Col md={6}>
                            <div className="jobPost">
                                <div className="name">
                                    Driver <span  className="jobType">[ Independent Contractor ]</span>
                                </div>
                                <div className="jobDesc">
                                    Deliver groceries from local stores to customers.
                                </div>
                                <div className="jobResponsibility">
                                    <ul>
                                        <li>Delivery only</li>
                                        <li>Vehicle required</li>
                                        <li>Flexible schedule</li>
                                        <li>Work unlimited hours</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="jobPost">
                                <div className="name">
                                    Driver + Shopper <span  className="jobType">[ Independent Contractor ]</span>
                                </div>
                                <div className="jobDesc">
                                    Shop for groceries and deliver them to customers
                                </div>
                                <div className="jobResponsibility">
                                    <ul>
                                        <li>Delivery and shopping</li>
                                        <li>Vehicle required</li>
                                        <li>Flexible schedule</li>
                                        <li>Work unlimited hours</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
};

module.exports = JobPostings;
