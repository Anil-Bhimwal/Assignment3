import React from 'react'
import { Card, CardImg, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, CardText, CardFooter, CardTitle, Button, CardHeader, Badge } from 'reactstrap';

function renderComments(comments) {
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
            <div className="row">
                <Card Body className="col-lg-6 dish-image">
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />

                </Card>
                <Card Body className="col-lg-6">
                    <CardHeader className="text-right">
                        <button>Add</button>
                    </CardHeader>
                    <CardBody>
                        <CardTitle>
                            <h3>
                                {dish.name}
                            </h3>
                        </CardTitle>
                        <cardtext>{dish.description}</cardtext>
                        <h4 className="comments-header">
                            Comments:
                        </h4>
                        <cardtext>
                            {renderComments(dish.comments)}
                        </cardtext>

                    </CardBody>
                </Card>
            </div>
        );

    } else {
        return (
            <div></div>
        )
    }
}
