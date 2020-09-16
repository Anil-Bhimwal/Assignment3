import React from 'react';
import { Card, CardImg, CardBody, CardFooter, CardTitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
let RenderMenuItem = ({ dish, onClick }) => {
  return (
    <Card Body >
      <Link to={`/menu/${dish.id}`}>
      <CardImg width="100%" height="250px" src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle style={{ color: "grey" }} className="text-center">
            <h3>
              {dish.name}
            </h3>
          </CardTitle>
        </CardBody>
        <CardFooter className="text-center">
          <Button >Add</Button>
        </CardFooter>
      </Link>

    </Card>
  );
}
const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-md-6 col-lg-3 my-3" >
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb >
            <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {menu}
        </div>
      </div>


    );
}


export default Menu;