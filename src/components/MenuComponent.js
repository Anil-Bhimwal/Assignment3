import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardFooter, CardTitle, Button } from 'reactstrap';
import DishDetail from './DishdetailComponent';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <Card body key={dish.id} className="col-md-6 col-lg-3 my-3" onClick={() => this.onDishSelect(dish)}>
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
      <div className="container">
        <div className="row">
          {menu}
        </div>
        
          <DishDetail dish={this.state.selectedDish} />
        
      </div>
    );
  }
}

export default Menu;