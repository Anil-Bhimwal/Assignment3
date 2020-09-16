import React from 'react'
import { Card, CardImg, CardBody, CardFooter, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, CardTitle, CardHeader, Badge, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
function RenderComments(comments, postComment, dishId) {
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
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null){

        let dish = props.dish;
        let postComment=props.postComment;
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                
            </div>
            <div className="row">
                <Card Body className="col-md-6 dish-image">
                    <CardImg style={{ paddingTop: '20px', paddingBottom: '30px' }} top width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardTitle>
                        <h3>
                            {dish.name}
                        </h3>
                    </CardTitle>
                    <cardtext style={{ paddingBottom: '30px' }}>{dish.description}</cardtext>
                </Card>
                <Card Body className="col-md-6" style={{ paddingTop: '20px' }}>
                    <CardHeader >
                        <Badge color="info">{dish.price}</Badge>
                        <button style={{marginLeft: "350px"}}>Add</button>
                    </CardHeader>
                    <CardBody>

                        <h4 className="comments-header">
                            Comments:
                        </h4>
                        <cardtext>
                            {RenderComments(props.comments, postComment, dish.id)}
                        </cardtext>
                    </CardBody>
                    <CardFooter style={{ marginBottom: "20px" }}>
                        <CommentForm dishId={dish.id} postComment={postComment} />
                    </CardFooter>
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
