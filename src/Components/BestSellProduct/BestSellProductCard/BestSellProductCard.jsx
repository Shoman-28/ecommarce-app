import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import bag1 from "../../../image/items/1-1.jpg";
import "./BestSellProductCard.css";
// import CardSlider from "../CardSlider/CardSlider";

class BestSellProductCard extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="pt-5 text-center">Best Sell Product</h3>
        <div className="row mt-5 ">
          <div className="col-md-6 col-lg-3">
            <Card style={{  }} className="card-Style">
              {/* <CardSlider></CardSlider> */}
              <Card.Img variant="top" src={bag1} />
              <Card.Body style={{ background: "#f9f9f9" }}>
                <Card.Title className="card-name">Leather Bag</Card.Title>
                <Card.Text className="card-details">
                  Grey Messenger Bag
                </Card.Text>
                <div className="dfh">
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                </div>
                <span variant="primary">$ 11.99</span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card style={{  }} className="card-Style">
              <Card.Img variant="top" src={bag1} />
              <Card.Body style={{ background: "#f9f9f9" }}>
                <Card.Title className="card-name">Leather Bag</Card.Title>
                <Card.Text className="card-details">
                  Grey Messenger Bag{" "}
                </Card.Text>
                <div className="dfh">
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                </div>
                <span variant="primary">$ 11.99</span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card style={{  }} className="card-Style">
              <Card.Img variant="top" src={bag1} />
              <Card.Body style={{ background: "#f9f9f9" }}>
                <Card.Title className="card-name">Leather Bag</Card.Title>
                <Card.Text className="card-details">
                  Grey Messenger Bag{" "}
                </Card.Text>
                <div className="dfh">
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                </div>
                <span variant="primary">$ 11.99</span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card style={{  }} className="card-Style">
              <Card.Img variant="top" src={bag1} />
              <Card.Body style={{ background: "#f9f9f9" }}>
                <Card.Title className="card-name">Leather Bag</Card.Title>
                <Card.Text className="card-details">
                  Grey Messenger Bag{" "}
                </Card.Text>
                <div className="dfh">
                  <FontAwesomeIcon className="custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="custom-icon" icon={faStar} />
                </div>
                <span variant="primary">$ 11.99</span>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default BestSellProductCard;
