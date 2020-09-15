import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <Media className="mt-5">
                <Media left top >
                    <img src={leader.image} width="100px" height="100px" style={{ marginRight: "30px" }} alt={leader.name} />
                </Media>
                <Media body>
                    <Media heading>
                        {leader.name}
                    </Media>
                    <p style={{ fontStyle: "italic" }}>
                        {leader.designation}
                    </p>
                    {leader.description}
                </Media>
            </Media>
        );
    });


    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">1 Aug. 2019</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Anil Bhimwal</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$3,234,232</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">20</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">Baba Gharwale ,
                                Lorem ipsum dolor sit amet. 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>


                </div>
            </div>
        </div>
    );
}

export default About;    