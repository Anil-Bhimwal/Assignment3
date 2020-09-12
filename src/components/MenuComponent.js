import React from 'react';
import { Card, CardImg, CardBody,  CardFooter, CardTitle, Button } from 'reactstrap'; 
let RenderMenuItem =({dish, onClick})=>{
  return(
    <Card Body >
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
}
  const Menu=(props)=> {
    const menu = props.dishes.map((dish) => {
      return (
        <div  key={dish.id} className="col-md-6 col-lg-3 my-3" >
          <RenderMenuItem dish={dish} onClick={props.onClick} />
        </div>
      );
    });

    return (
      
        <div className="row">
          {menu}
        </div>

    );
  }


export default Menu;