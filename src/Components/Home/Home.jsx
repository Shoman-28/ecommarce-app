import React from 'react';
import Contents from './Contents/Contents';
import Gallery from './Gallery/Gallery';
import Slider from './Slider/Slider';
import BestSellProduct from '../BestSellProduct/BestSellProduct';
import FeaturedItems from '../Shared/FeaturedItems/FeaturedItems';
import ManAndWomen from './Man&Women/ManAndWomen';
import ShopCategories from '../ShopCategories/ShopCategories';
import ShoppingCard from './ShoppingCard/ShoppingCard';
import Footer from '../Shared/Footer/Footer';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div >
            <Slider/>            
            <Contents/>
            <Gallery/>
            {/* <BestSellProduct/> */}
            <FeaturedItems/>
            <ManAndWomen/>
            <ShopCategories/>
            <ShoppingCard/>
            <Footer/>
        </div>
    );
};

export default Home;