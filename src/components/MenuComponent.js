import React from 'react';
import { Card, CardImg, CardBody, CardFooter, CardTitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
let RenderMenuItem = ({ dish, onClick }) => {
  return (
    <Card Body >
      <Link to={`/menu/${dish.id}`}>
        <CardImg top width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle><h3>
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
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-md-6 col-lg-3 my-3" >
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

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