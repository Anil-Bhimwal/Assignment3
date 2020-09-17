import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';
class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            telNumber: "",
            email: "",
            agreeToContact: false,
            contactType: "Tel.",
            message: "",
            touched: {
                firstName: false,
                lastName: false,
                telNumberber: false,
                message: false,
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postFeedBack(
            values.firstName,
            values.lastName,
            values.telNumber,
            values.email,
            values.agreeToContact,
            values.contactType,
            values.message
        )
        this.props.resetFeedbackForm();
    }


    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form
                            model="feedback"
                            onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>
                                    First Name
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstName"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        messages={{
                                            required: "* ",
                                            minLength: "Must be greater than 2 characters",
                                            maxLength:
                                                "Must be lesser than or equal to 15 characters",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>
                                    Last Name
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastName"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        messages={{
                                            required: "* ",
                                            minLength: "Must be greater than 2 characters",
                                            maxLength:
                                                "Must be lesser than or equal to 15 characters",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telNumber" md={2}>
                                    Tel. Number
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telNumber"
                                        className="form-control"
                                        id="telNumber"
                                        name="telNumber"
                                        placeholder="Tel. Number"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                            isNumber,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telNumber"
                                        show="touched"
                                        messages={{
                                            required: "* ",
                                            minLength: "Must be greater than 2 numbers.",
                                            maxLength:
                                                "Must be lesser than or equal to 15 numbers.",
                                            isNumber: " Invalid Telephone Number.",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>
                                    E-mail
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="E-mail"
                                        validators={{
                                            required,
                                            validEmail,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "* ",
                                            validEmail: "Invalid Email Adress",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agreeToContact"
                                                className="form-check-input"
                                                name="agreeToContact"
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>E-mail</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>
                                    Your Feedback
                  </Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        placeholder="Type your message here."
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: "* ",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 12, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Grand Trunk Road<br />
                          Near Desh Metro Station<br />
                          India<br />
                            <i className="fa fa-phone"></i>: +91 12345 67810<br />
                            <i className="fa fa-fax"></i>: +91 10876 54321<br />
                            <i className="fa fa-envelope"></i>: <a href="contunous@food.net">continuous@food.net</a> <br/>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary redirect-social-media" href="tel:+9100000000000"><i className="fa fa-phone "></i> Call</a>
                            <a role="button" className="btn btn-info redirect-social-media" href="www.skype.com"><i className="fa fa-skype "></i> Skype</a>
                            <a role="button" className="btn btn-success redirect-social-media" href="mailto:contunous@food.net"><i className="fa fa-envelope-o "></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;