import "./App.css";
import React from "react";
import "./Components/CSS/ecommerce.css";
import "./Components/CSS/fonts.css";
import "./Components/CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
import  AddProduct  from "./AdminPanal/AddProduct/AddProduct";

import productImg0 from "./image/shopping/shopping-0.jpg";
import productImg1 from "./image/shopping/shopping-1.jpg";
import productImg2 from "./image/shopping/shopping-2.jpg";
import productImg3 from "./image/shopping/shopping-3.jpg";
import productImg4 from "./image/shopping/shopping-4.jpg";
import productImg5 from "./image/shopping/shopping-5.jpg";
import productImg6 from "./image/shopping/shopping-6.jpg";
import productImg7 from "./image/shopping/shopping-7.jpg";
=======
>>>>>>> 80436d1b132ec01d6cf13e435c22903cf0dc7896


import { BrowserRouter as Router, Switch } from "react-router-dom";
import Authmiddlewar from "./routes/route";
import { authProtectedRoutes, publicRoutes } from "./routes/index";
import LayOut from "./Layout";



// export const baseUrl = process.env.REACT_APP_BACKEND_URL;

const App = (props) => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
<<<<<<< HEAD
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
=======
          {publicRoutes.map((route, idx) => (
            <Authmiddlewar
              path={route.path}
              layout={LayOut}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Authmiddlewar
              path={route.path}
              component={route.component}
              layout={LayOut}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
>>>>>>> 80436d1b132ec01d6cf13e435c22903cf0dc7896
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
