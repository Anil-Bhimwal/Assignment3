import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Contact(props) {
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
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">contunuous@food.net</a>
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

export default Contact;