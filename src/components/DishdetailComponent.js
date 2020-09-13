import React from 'react'
import { Card, CardImg, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, CardTitle, CardHeader, Badge, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderComments(comments) {
    if (comments == null) {
        return (<div></div>);
    }
    const cmnts = comments.map(comment => {
        return (
            <ListGroupItem key={comment.id}>
                <ListGroupItemHeading>
                    <Badge>
                        {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </Badge>
                </ListGroupItemHeading>
                <ListGroupItemText>
                    {comment.comment}
                </ListGroupItemText>
            </ListGroupItem>
        );
    })
    return (
        <ListGroup>
            {cmnts}
        </ListGroup>


    )
}


export default function DishDetail(props) {
    if (props.dish != null) {
        let dish = props.dish;
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <Card Body className="col-md-6 dish-image">
                        <CardImg style={{paddingTop:'20px', paddingBottom: '30px'}}top width="100%" src={dish.image} alt={dish.name} />
                        <CardTitle>
                            <h3>
                                {dish.name}
                            </h3>
                        </CardTitle>
                        <cardtext style={{paddingBottom: '30px'}}>{dish.description}</cardtext>
                    </Card>
                    <Card Body className="col-md-6" style={{paddingTop:'20px'}}>
                        <CardHeader   className="text-right">
                            <button>Add</button>
                        </CardHeader>
                        <CardBody>

                            <h4 className="comments-header">
                                Comments:
                        </h4>
                            <cardtext>
                                {RenderComments(props.comments)}
                            </cardtext>

                        </CardBody>
                    </Card>
                </div>
            </div>

        );

    } else {
        return (
            <div></div>
        )
    }
}
