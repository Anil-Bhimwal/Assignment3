import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardFooter, CardTitle, Button } from 'reactstrap';
import DishDetail from './DishdetailComponent';
class Menu extends Component {
  

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <Card body key={dish.id} className="col-md-6 col-lg-3 my-3" onClick={() => this.props.onClick(dish.id)}>
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
        </Card>
      );
    });

    return (
      
        <div className="row">
          {menu}
        </div>

    );
  }
}

export default Menu;