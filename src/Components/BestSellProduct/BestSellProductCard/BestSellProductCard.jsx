import Button from "@restart/ui/esm/Button";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { productsContext } from "../../../App";
import ProductCard from "../ProductCard/ProductCard";

const BestSellProductCard = () => {
  return (
    <div className="container">
      <h3 className="pt-5 text-center">Best Sell Product</h3>
      <div className="row mt-5 ">
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSellProductCard;
