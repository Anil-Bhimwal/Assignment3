import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({ item }) {

    return (
        <Card>
            <CardImg height="300px" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>
                    <h4>
                        {item.name}
                    </h4>
                </CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
            <CardFooter className="text-center ">
                <Button outline color="secondary">
                    <Link to={item.seeAll} >See All</Link>
                </Button>
            </CardFooter>
        </Card>
    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
            </div>
        </div>
    );
}

export default Home;