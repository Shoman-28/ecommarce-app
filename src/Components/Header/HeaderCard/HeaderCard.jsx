import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { productsContext } from "../../../App";
import CardProductPage from "../../AddToCard/CardProductsPage/CardProductPage";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";


const HeaderCard = () => {
  const { products } = useContext(productsContext);
  const {cart}=products;
  const {img, name}=cart
  console.log(name)
  const [show, setShow] = useState("");

 const cardProductsClose=()=>{
   if(show==true){
    setShow(false)
   }

 }

  // const handleShow = () => setShow(true);
  return (
    <div className="header-misc-icon">
      
        <span onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faShoppingBag} />
          <span className="top-cart-number">{products?.cart?.name}</span>
        </span>
       
        <Modal show={show} >
        
          <Modal.Header closeButton onClick={()=>cardProductsClose(false)}>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <span>{products?.cart?.name}</span>
            <p></p>
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      
      {/* <CardProductPage show={show}></CardProductPage> */}
      <div className="top-cart-content">
        <div className="top-cart-title">
          <h4>Shopping Cart</h4>
        </div>
        <div className="top-cart-items">
          <div className="top-cart-item">
            <div className="top-cart-item-image">
              <a href="1232">
                <img
                  src="images/shop/small/1.jpg"
                  alt="Blue Round-Neck Tshirt"
                />
              </a>
            </div>
            <div className="top-cart-item-desc">
              <div className="top-cart-item-desc-title">
                <a href="123">Blue Round-Neck Tshirt with a Button</a>
                <span className="top-cart-item-price d-block">$19.99</span>
              </div>
              <div className="top-cart-item-quantity">x 2</div>
            </div>
          </div>
          <div className="top-cart-item">
            <div className="top-cart-item-image">
              <a href="1213">
                <img
                  src="images/shop/small/6.jpg"
                  alt="Light Blue Denim Dress"
                />
              </a>
            </div>
            <div className="top-cart-item-desc">
              <div className="top-cart-item-desc-title">
                <a href="1322">Light Blue Denim Dress</a>
                <span className="top-cart-item-price d-block">$24.99</span>
              </div>
              <div className="top-cart-item-quantity">x 3</div>
            </div>
          </div>
        </div>
        <div className="top-cart-action">
          <span className="top-checkout-price">$114.95</span>
          <a href="132" className="button button-3d button-small m-0">
            View Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
