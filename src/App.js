import "./App.css";
import "./Components/CSS/ecommerce.css";
import "./Components/CSS/fonts.css";
import "./Components/CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import AddToCard from "./Components/AddToCard/AddToCard";
import { createContext, useState, useEffect } from "react";

import  AddProduct  from "./AdminPanal/AddProduct/AddProduct";

import productImg0 from "./image/shopping/shopping-0.jpg";
import productImg1 from "./image/shopping/shopping-1.jpg";
import productImg2 from "./image/shopping/shopping-2.jpg";
import productImg3 from "./image/shopping/shopping-3.jpg";
import productImg4 from "./image/shopping/shopping-4.jpg";
import productImg5 from "./image/shopping/shopping-5.jpg";
import productImg6 from "./image/shopping/shopping-6.jpg";
import productImg7 from "./image/shopping/shopping-7.jpg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProduct from "./Components/BestSellProduct/ProductCard/ProductCard";
import Footer from "./Components/Shared/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/ContactPage/Contact";

export const productsContext = createContext();

export const baseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const product = [
    {
      id: 1,
      name: "Sun glasses and shopping bags",
      price: "11.09",
      img: productImg0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Grey Messenger Bag",
      price: "21.89",
      img: productImg1,
      quantity: 3,
    },
    {
      id: 3,
      name: "Grey Messenger Bag",
      price: "15.69",
      img: productImg2,
      quantity: 1,
    },
    {
      id: 4,
      name: "Grey Messenger Bag",
      price: "61.40",
      img: productImg3,
      quantity: 2,
    },
    {
      id: 5,
      name: "Grey Messenger Bag",
      price: "22.55",
      img: productImg4,
      quantity: 3,
    },
    {
      id: 6,
      name: "Grey Messenger Bag",
      price: "31.30",
      img: productImg5,
      quantity: 2,
    },
    {
      id: 7,
      name: "Grey Messenger Bag",
      price: "43.10",
      img: productImg6,
      quantity: 1,
    },
    {
      id: 8,
      name: "Grey Messenger Bag",
      price: "32.33",
      img: productImg7,
      quantity: 3,
    },
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
      <Router>
        <Switch>
        <Route path="/admin">
            <AddProduct />
              
          </Route>
          <Route path="/home">
            <Header />
              <Home />
              <Footer />
          </Route>
          <Route path="/allProduct">
            <Header />
            <AllProduct />
            <Footer />
          </Route>
          <Route path="/viewCart">
            <Header />
            <AddToCard />
            <Footer />
          </Route>
          <Route path="/blog">
            <Header />
            <Blog/>
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact/>
            
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </productsContext.Provider>
  );
}

export default App;
