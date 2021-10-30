import "./App.css";
import "./Components/CSS/ecommerce.css";
import "./Components/CSS/fonts.css";
import "./Components/CSS/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import AddToCard from "./Components/AddToCard/AddToCard";
import { createContext, useState, useEffect } from "react";
import productImg from "./image/items/1-1.jpg";
export const productsContext = createContext();

export const baseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const product = [
    { id: 1, name: "Grey Messenger Bag", price: "11.99", img: productImg },
    { id: 2, name: "Grey Messenger Bag", price: "11.99", img: productImg },
  ];
  const [products, setProducts] = useState({ pds: product, cart: [] });

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      setProducts({ ...products, cart: cart });
    }
  }, []);
  return (
    <productsContext.Provider value={{ products, setProducts }}>
      <div className="">
        <Header />
        <Home />
        <Product />
        <AddToCard/>
      </div>
    </productsContext.Provider>
  );
}

export default App;
