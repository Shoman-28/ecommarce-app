import Button from "@restart/ui/esm/Button";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import bag1 from "../../../image/items/1-1.jpg";
import "./BestSellProductCard.css";
import { productsContext } from "../../../App";
// import CardSlider from "../CardSlider/CardSlider";

const BestSellProductCard = () => {

  const { products, setProducts } = useContext(productsContext);

  const handleAddToCart = (pd) => {
    const newCart = { ...products, cart: [...products.cart, pd] };
    console.log(newCart);
    setProducts(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart.cart));
  };

  // const bagName = [
  //   { name: "Grey Messenger Bag", price: "11.99" },
  //   { name: "Grey Messenger Bag", price: "11.99" },
  //   { name: "Grey Messenger Bag", price: "11.99" },
  //   { name: "Grey Messenger Bag", price: "11.99" },
  // ];
 
  return (
    <div className="container">
      <h3 className="pt-5 text-center">Best Sell Product</h3>
      <div className="row mt-5 ">
      {products?.pds?.length === 0
        ? "NO Products Found"
        : products.map((pd, index) => (
          <div key={pd.id} className="col-md-6 col-lg-3">
            <Card style={{}} className="card-Style">
                <Card.Img variant="top" src={pd.img} />
                <Card.Body style={{ background: "#f9f9f9" }}>
                  <Card.Title className="card-name">Leather Bag</Card.Title>
                  <Card.Text className="card-details">{pd.name}</Card.Text>
                <div className="dfh">
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                  <FontAwesomeIcon className="p-1 custom-icon" icon={faStar} />
                </div>
                <div className="add-product-btn d-flex justify-content-between">
                    <span>$ {pd.price}</span>

                    <Button
                      variant="primary"
                      className="p-1"
                      onClick={() => handleAddToCart(pd)}
                    >
                      <FontAwesomeIcon className=" " icon={faShoppingCart} />
                      Add To Cart
                    </Button>
                  </div>
                {/* <span variant="primary"></span>*/}
              </Card.Body> 
            </Card>
          </div>
       ))}
      </div>
    </div>
  );
};

export default BestSellProductCard;
