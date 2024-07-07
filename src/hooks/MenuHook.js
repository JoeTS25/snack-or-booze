import React from "react";
import { Link } from "react-router-dom";
import "../FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function MenuHook({ snacks, drinks }) {
    /*Hook to take either a drink or snack item, with the drink
    or snack title, and add it to this page */
    let items;
    let url;
    
    if(snacks) {
      items = snacks;
      url = 'Snacks'
    } else {
      items = drinks;
      url = 'Drinks';
    }


  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {url} Menu
          </CardTitle>
          <CardText>
            Here's a List of Our {url}
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${url.toLowerCase()}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuHook;