
import Main from '../pages/Main/index'
// import AllProduct from './../Components/Product/AllProduct';
import AllProduct from '../Components/BestSellProduct/BestSellProduct';

import ShoppingCard from '../Components/Home/ShoppingCard/ShoppingCard';
import AddToCard from '../Components/AddToCard/AddToCard';


const publicRoutes=[
    { path: "/", exact: true, component: Main },
    { path: "/home", component: Main },
    { path: "/men", component: AllProduct },
    { path: "/women", component: AllProduct },
    // { path: "/footwear", component: AllProduct },
    // { path: "/clothing", component: AllProduct },

    { path: "/accessories", component: AllProduct },
    { path: "/sale", component: AllProduct },
    { path: "/blog", component: AllProduct },
    { path: "/contact", component: AllProduct },
    
    { path: "/viewCart", component: AddToCard },
]

const authProtectedRoutes=[
    { path: "/", exact: true, component: Main },
]

export {authProtectedRoutes, publicRoutes}