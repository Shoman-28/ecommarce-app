import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

import grayBag from '../../../image/items/1-1.jpg';
import itemImgae1 from '../../../image/items/2-1.jpg';
import itemImgae2 from '../../../image/items/3-1.jpg';
import itemImgae3 from '../../../image/items/4-1.jpg';
const Navications = () => {
    const categories=[        
    {name:'Backpacks'},
    {name:'Leather Bag'},
    {name:'Travel Bag'},
    {name:'Trolley'},
    {name:'Workout Bag'},
]
    const popular=[        
    {name:'United Colors'},
    {name:'Burton London'},
    {name:'Calvin Clein Jeans'},
    {name:'Top Ten'},
    {name:'Armyni'},
]  
const WomenfootWere=[        
    {name:'Casual Shoes'},
    {name:'Formal Shoes'},
    {name:'Sports Shoes'},
    {name:'Party  Shoes'},
    {name:'Slippers'},
]
const WomenClothing=[
    {name:'Casual Shirt'},
    {name:'T-Shirts'},
    {name:'Collared Tees'},
    {name:'Sweamwear'},
    {name:'Pants'},
]

  return (
    <nav className="primary-menu style-ecommerce menu-spacing-margin">
      <ul className="menu-container">
        <li className="menu-item current">
          <a className="menu-link" href="#">
            <div>Home</div>
          </a>
        </li>
        <li className="menu-item mega-menu">
          <a className="menu-link" href="#">
            <div>Men</div>
          </a>
          <div
            className="mega-menu-content mega-menu-style-2"
            style={{
              background: "url('../../../image/items/3-3.jpg'),",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
            }}
          >
            <div className="container">
              <div className="row">
                <ul className="sub-menu-container mega-menu-column col-xl-2 col-lg-3">
                  <li className="menu-item">
                    <div className="widget">
                      <div className="portfolio-item">
                        <div className="portfolio-image">
                          <a href="#">
                            <img src={grayBag} alt="Grey Bag"/> 
                            
                          </a>
                          <div className="product-cart">
                            <a href="#">
                              <FontAwesomeIcon icon={faShoppingCart}/>
                             
                            </a>
                          </div>
                          <div className="product-quickview">
                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Available Sizes: S | M | L">                                                                                       
                              <FontAwesomeIcon className="" icon={faInfo}/>
                            </a>
                          </div>
                        </div>
                        <div className="portfolio-desc pb-0">
                          <div>
                            <h3>
                              <a href="#">Leather Bag</a>
                            </h3>
                            <span className="mt-0">
                              <a href="#">Messenger Bag</a>
                            </span>
                            <div className="rating-stars">
                                <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                            </div>
                          </div>
                          <div className="item-price">
                            <span>&euro;29.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="sub-menu-container mega-menu-column col-lg-3">
                  <li className="menu-item">
                    <div className="widget">
                      <h4 className="highlight-me">Last Viewed Items</h4>

                      <div
                        className="posts-sm row col-mb-30"
                        id="recent-shop-list-sidebar"
                      >
                        <div className="entry col-12">
                          <div className="grid-inner row g-0">
                            <div className="col-auto">
                              <div className="entry-image">
                                <a href="#">
                                  <img src={itemImgae1} alt="Image"/>                                                                     
                                </a>
                              </div>
                            </div>
                            <div className="col ps-3">
                              <div className="entry-title">
                                <h4>
                                  <a href="#">Women's Hand Bag</a>
                                </h4>
                              </div>
                              <div className="entry-meta no-separator">
                                <ul className="sub-menu-container">
                                  <li className="color">$15</li>
                                  <li className="menu-item">
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="entry col-12">
                          <div className="grid-inner row g-0">
                            <div className="col-auto">
                              <div className="entry-image">
                                <a href="#">
                                  <img src={itemImgae2} alt="Image" />                                                                                  
                                </a>
                              </div>
                            </div>
                            <div className="col ps-3">
                              <div className="entry-title">
                                <h4>
                                  <a href="#">Laptop Bag</a>
                                </h4>
                              </div>
                              <div className="entry-meta no-separator">
                                <ul className="sub-menu-container">
                                  <li className="color">$19</li>
                                  <li className="menu-item">
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="entry col-12">
                          <div className="grid-inner row g-0">
                            <div className="col-auto">
                              <div className="entry-image">
                                <a href="#">
                                  <img src={itemImgae3} alt="Image" />                                                                                                        
                                </a>
                              </div>
                            </div>
                            <div className="col ps-3">
                              <div className="entry-title">
                                <h4>
                                  <a href="#">College Backpack</a>
                                </h4>
                              </div>
                              <div className="entry-meta no-separator">
                                <ul className="sub-menu-container">
                                  <li className="color">$19.99</li>
                                  <li className="menu-item">
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStar}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStarHalf}/>
                                    <FontAwesomeIcon className="p-1 custom-icon" icon={faStarHalf}/>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="sub-menu-container mega-menu-column col-lg-2">
                  <li className="menu-item mega-menu-title">
                    <a className="menu-link" href="#">
                      <div>Categories</div>
                    </a>
                    <ul className="sub-menu-container">
                        {
                            categories.map((p=><li className="menu-item">
                                <a href="#" className="menu-link"><div>{p.name}</div></a>
                            </li>))
                        }
                    </ul>
                  </li>
                </ul>
                <ul className="sub-menu-container mega-menu-column col-lg-2 border-start-0">
                  <li className="menu-item mega-menu-title">
                    <a className="menu-link" href="#">
                      <div>Popular Brands</div>
                    </a>
                    <ul className="sub-menu-container">
                    {
                            popular.map((p=><li className="menu-item">
                                <a href="#" className="menu-link">{p.name}</a>
                            </li>))
                        }                  
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="menu-item mega-menu mega-menu-small">
          <a className="menu-link" href="#">
            <div>Women</div>
          </a>
          <div className="mega-menu-content mega-menu-style-2">
            <div className="container">
              <div className="row">
                <ul className="sub-menu-container mega-menu-column col-lg-6">
                
                  <li className="menu-item mega-menu-title">
                    <a className="menu-link" href="#">
                      <div>Footwear</div>
                    </a>
                    <ul className="sub-menu-container">
                    {
                            WomenfootWere.map((p=><li className="menu-item">
                                <a href="#" className="menu-link">{p.name}</a>
                            </li>))
                        }
                     
                    </ul>
                  </li>
                </ul>
                <ul className="sub-menu-container mega-menu-column col-lg-6">
                  <li className="menu-item mega-menu-title">
                    <a className="menu-link" href="#">
                      <div>Clothing</div>
                    </a>
                    <ul className="sub-menu-container">
                    {
                            WomenClothing.map((p=><li className="menu-item">
                                <a href="#" className="menu-link">{p.name}</a>
                            </li>))
                        }
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            <div>Accessories</div>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            <div>Sale</div>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            <div>Blog</div>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            <div>Contact</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navications;