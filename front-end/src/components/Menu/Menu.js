import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isShop = pathname === '/shop';

  const goShop = () => {
    navigate('/shop');
  };
  return (
    <div class="menu">
      <div class="menu__wrap container dflex">
        <div class={`sideBar dflex ${isHome ? '' : 'hide'}`}>
          <i class="fas fa-bars"></i>
          <span>Browse Categories</span>
          <i class="fas fa-angle-down"></i>
          <ul class="sideBar__list">
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/chair-1.svg" alt="" />
                <span>Furniture</span>
                <i class="fas fa-angle-right"></i>
              </div>
              <ul class="submenu">
                <li class="submenu__item dflex">
                  <div class="item col-3">
                    <img src="./images/menu/menu-product-1-118x118.jpg" alt="" />
                    <a class="link-title" href="#">
                      Clocks{' '}
                    </a>
                    <ul>
                      <li>
                        <a class="sub-link" href="#">
                          Mantel Clocks
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Anniversary Clocks
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Wall Clocks
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Digital Clocks
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Travle and Alarm
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item col-3">
                    <img src="./images/menu/menu-product-3-118x118.jpg" alt="" />
                    <a class="link-title" href="#">
                      TableTop
                    </a>
                    <ul>
                      <li>
                        <a class="sub-link" href="#">
                          Pepper Shakers
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Spice Jars
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Dish Drainers
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Cocktails Shakers
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Utensil Holders
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item col-3">
                    <img src="./images/menu/menu-product-3-2-118x118.jpg" alt="" />
                    <a class="link-title" href="#">
                      Kitchen
                    </a>
                    <ul>
                      <li>
                        <a class="sub-link" href="#">
                          Oil Vinegar
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Bottle Racks
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Chopping Boards
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Vacuum Flasks
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Utensil Holders
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="item col-3">
                    <img src="./images/menu/menu-product-5-2-118x118.jpg" alt="" />
                    <a class="link-title" href="#">
                      Lighting
                    </a>
                    <ul>
                      <li>
                        <a class="sub-link" href="#">
                          Interior Lighting
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Ceiling Lamps
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Wall Lamps
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Floor Lamps
                        </a>
                      </li>
                      <li>
                        <a class="sub-link" href="#">
                          Ceiling Lamps
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="submenu__item dflex bottom" style={{ background: '#f5f5f5' }}>
                  <div class="item col-3">
                    <img src="./images/menu/brand-alessi.png" alt="" />
                  </div>
                  <div class="item col-3">
                    <img src="./images/menu/brand-Eva-Solo.png" alt="" />
                  </div>
                  <div class="item col-3">
                    <img src="./images/menu/brand-PackIt.png" alt="" />
                  </div>
                  <div class="item col-3">
                    <img src="./images/menu/brand-witra.png" alt="" />
                  </div>
                </li>
              </ul>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/knives-1.svg" alt="" />
                <span>Cooking</span>
                <i class="fas fa-angle-right"></i>
                <ul class="submenu cooking dflex">
                  <li class="submenu__item dflex col-3">
                    <div class="item">
                      <a class="link-title" href="#">
                        Sofas And Armchairs
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Easy Chairs
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Small Sofas
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Day Beds
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Footstools
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="submenu__item dflex col-3">
                    <div class="item">
                      <a class="link-title" href="#">
                        Tables and Chairs
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Console Tables
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Secretary Desks
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Game Tables
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Coffee Tables
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="submenu__item dflex col-3">
                    <div class="item">
                      <a class="link-title" href="#">
                        Kids Furniture
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Kids Lighting
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kid Textiles
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kids Bathroom
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kid Bedroom
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="submenu__item dflex col-3">
                    <div class="item">
                      <a class="link-title" href="#">
                        Tables and Chairs
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Console Tables
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Secretary Desks
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Game Tables
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Coffee Tables
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="submenu__item dflex col-3">
                    <div class="item">
                      <a class="link-title" href="#">
                        Storage Systems
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Shoe Cabinets
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Trolleys
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Hallway Units
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Screens
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Storage Chests
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="submenu__item dflex col-3">
                    <div class="item">
                      <a class="link-title" href="#">
                        Chests of Drawers
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Hallway Units
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Display Cabinets
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Storage Walls
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Sideboards
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Bookcases
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/flower-1.svg" alt="" />
                <span>Accessories</span>
                <i class="fas fa-angle-right"></i>
                <ul class="submenu dflex accessories">
                  <li class="submenu__item dflex col-7">
                    <div class="item col-6">
                      <a class="link-title" href="#">
                        Furniture
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Small Sofas
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Armchair
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Easy Chairs
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Lounge Chairs
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Day Beds
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-6">
                      <a class="link-title" href="#">
                        Bathroom
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Washbasins
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Towel Racks
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Soap Dishes
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Bathtub Taps
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Accessible Showers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-6">
                      <a class="link-title" href="#">
                        Kitchen
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Kitchen Worktops
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Cooking Accessories
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kitchen Appliances
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Cookware and Bakeware
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kitchen Textiles
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-6">
                      <a class="link-title" href="#">
                        Ourdoor
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Garden Tables
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Paving Blocks
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Outdoor Chairs
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Parasol Bases
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Vertical Trellies
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="submenu__item col-5 post">
                    <a class="link-title" href="#">
                      Summer Style
                    </a>
                    <ul class="post">
                      <li class="dflex">
                        <img src="./images/menu/product-accessories-10-88x100.jpg" alt="" />
                        <div class="post__content">
                          <a href="#">Decoration wooden present </a>
                          <span class="price">$89.00</span>
                        </div>
                      </li>
                      <li class="dflex">
                        <img src="./images/menu/light4.-88x100.jpg" alt="" />
                        <div class="post__content">
                          <a href="#">Light wood consectetur</a>
                          <div class="dflex">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <span class="price">$499.00</span>
                        </div>
                      </li>
                      <li class="dflex">
                        <img src="./images/menu/accessories1-88x100.jpg" alt="" />
                        <div class="post__content">
                          <a href="#">Keys wood acceesories</a>
                          <span class="price">$199.00</span>
                        </div>
                      </li>
                      <li class="dflex">
                        <img src="./images/menu/furniture10-88x100.jpg" alt="" />
                        <div class="post__content">
                          <a href="#">Classic wooden chair</a>
                          <div class="dflex">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <span class="price">
                            <del>$19.00</del>$5.00
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/003-shirt.svg" alt="" />
                <span>Fashion</span>
                <i class="fas fa-angle-right"></i>
                <ul class="submenu dflex fashion">
                  <li class="submenu__item dflex col-7">
                    <div class="item col-6 dflex">
                      <img src="./images/category/003-shirt.svg" alt="" />
                      <div class="item__content">
                        <a class="link-title" href="#">
                          Man
                        </a>
                        <ul>
                          <li>
                            <a class="sub-link" href="#">
                              Outerwear
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Jackets
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Jumpsuits
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="item col-6 dflex">
                      <img src="./images/category/003-shirt.svg" alt="" />
                      <div class="item__content">
                        <a class="link-title" href="#">
                          Woman
                        </a>
                        <ul>
                          <li>
                            <a class="sub-link" href="#">
                              Knitwear
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Skirts
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Sweatshirts
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="item col-6 dflex">
                      <img src="./images/category/003-shirt.svg" alt="" />
                      <div class="item__content">
                        <a class="link-title" href="#">
                          T-Shirts
                        </a>
                        <ul>
                          <li>
                            <a class="sub-link" href="#">
                              T-Shirts
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Dungarees
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Shorts
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="item col-6 dflex">
                      <img src="./images/category/003-shirt.svg" alt="" />
                      <div class="item__content">
                        <a class="link-title" href="#">
                          Accessories
                        </a>
                        <ul>
                          <li>
                            <a class="sub-link" href="#">
                              Scarfs
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Hats
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Sunglasses
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="item col-6 dflex">
                      <img src="./images/category/003-shirt.svg" alt="" />
                      <div class="item__content">
                        <a class="link-title" href="#">
                          Bags
                        </a>
                        <ul>
                          <li>
                            <a class="sub-link" href="#">
                              Backpacks
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Travel
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Business
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="item col-6 dflex">
                      <img src="./images/category/003-shirt.svg" alt="" />
                      <div class="item__content">
                        <a class="link-title" href="#">
                          Shoes
                        </a>
                        <ul>
                          <li>
                            <a class="sub-link" href="#">
                              Leather
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Sneakers
                            </a>
                          </li>
                          <li>
                            <a class="sub-link" href="#">
                              Moccasins
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="submenu__item dflex col-5 img">
                    <img src="./images/menu/banner-half-menu-4-1.png" alt="" />
                  </li>
                </ul>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/clock-1.svg" alt="" />
                <span>Clock</span>
                <i class="fas fa-angle-right"></i>
                <ul class="submenu clock">
                  <li class="submenu__item dflex">
                    <div class="item col-3">
                      <a class="link-title" href="#">
                        Indoor
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Barware
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Tableware
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Placemats
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Serving
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-3">
                      <a class="link-title" href="#">
                        Outdoor
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Garden Tools
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Pot Plants
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Bird Feeders
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Outdoor Toys
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-3">
                      <a class="link-title" href="#">
                        Kitchen
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Cookbooks
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Baking
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Carafes &amp; Jugs
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Mugs &amp; Cups
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-3">
                      <a class="link-title" href="#">
                        Drink
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Barware
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Hip Flasks
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Wine Accessories
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Tea &amp; Coffee
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-3">
                      <a class="link-title" href="#">
                        Toy
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Kids Meal Time
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Board Games &amp; Puzzles
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Creative Toys
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-3">
                      <a class="link-title" href="#">
                        Travel
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Luggage Accessories
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Tech Accessories
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Reusable Bags
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-3">
                      <a class="link-title" href="#">
                        Fashion
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Reusable Bags
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Grooming
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-3">
                      <a class="link-title" href="#">
                        Health
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Glass Food Containters
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Sports Drink Bottles
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Stainless Steel Bottles
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="submenu__item dflex bottom" style={{ background: '#f5f5f5' }}>
                    <div class="item col-3">
                      <img src="./images/menu/brand-alessi.png" alt="" />
                    </div>
                    <div class="item col-3">
                      <img src="./images/menu/brand-Eva-Solo.png" alt="" />
                    </div>
                    <div class="item col-3">
                      <img src="./images/menu/brand-PackIt.png" alt="" />
                    </div>
                    <div class="item col-3">
                      <img src="./images/menu/brand-witra.png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/light-bulb-1.svg" alt="" />
                <span>Lighting</span>
                <i class="fas fa-angle-right"></i>
                <ul class="submenu lighting">
                  <li class="submenu__item dflex">
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Sofas And Armchairs
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Footstools
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Day Beds
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Lounge Chairs
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Small Sofas
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Easy Chairs
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Tables And Chairs
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Coffee Tables
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Console Tables
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Secretary Desks
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Writing Desks
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Game Tables
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Storage Systems
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Storage Chests
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Hallway Units
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Shoe Cabinets
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Screens
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Trolleys
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Chests of Drawers
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Bookcases
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Storage Walls
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Sideboards
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Display Cabinets
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Hallway Units
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Kids Furniture
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Kids Bedroom
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kids Armchairs
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kids Bathroom
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kids Lighting
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kids Textiles
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/rocking-horse-1.svg" alt="" />
                <span>Toys</span>
                <i class="fas fa-angle-right"></i>
                <ul class="submenu toy dflex">
                  <li class="submenu__item dflex col-7">
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Accessories
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Cushions
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Photo Frames
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Bean Bags
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Home Telephones
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Furniture
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Chairs
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Loungers
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Stools
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Shelves
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Lighting
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Ceiling Lighting
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Wall Lights
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Floor Lamps
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Light Bulbs
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Bedroom
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Bed Cushions
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Duvets &amp; Pillows
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Throws &amp; Blankets
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Alarm Clocks
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Bathroom
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Shower Curtains
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Bathroom Bins
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Bath Towel
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Bath Mats
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="item col-4">
                      <a class="link-title" href="#">
                        Kitchen
                      </a>
                      <ul>
                        <li>
                          <a class="sub-link" href="#">
                            Pots &amp; Pans
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Cooking &amp; Banking
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kitchen Linen
                          </a>
                        </li>
                        <li>
                          <a class="sub-link" href="#">
                            Kitchen Storage
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="submenu__item dflex col-5 post">
                    <div class="image">
                      <img src="./images/menu/clocks6-430x490.jpg" alt="" />
                    </div>
                    <a class="link-title" href="#">
                      Ullamcorper arcu elementum
                    </a>
                    <span>Clocks</span>
                    <div class="dflex">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <span class="price">
                      <del>399.00$</del>$333.00$
                    </span>
                  </li>
                  <li class="submenu__item dflex col-12 bottom">
                    <ul class="dflex">
                      <li>
                        <a class="link-title" href="#">
                          Ups Service
                        </a>
                        <br />
                        <a class="sub-link" href="#">
                          Shipping & Returns
                        </a>
                      </li>
                      <li>
                        <a class="link-title" href="#">
                          Stores
                        </a>
                        <br />
                        <a class="sub-link" href="#">
                          Find retail locations
                        </a>
                      </li>
                      <li>
                        <a class="link-title" href="#">
                          Free Shipping
                        </a>
                        <br />
                        <a class="sub-link" href="#">
                          For order above $100
                        </a>
                      </li>
                      <li>
                        <a class="link-title" href="#">
                          Customer Care
                        </a>
                        <br />
                        <a class="sub-link" href="#">
                          For All Your Questions
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/biscuit.svg" alt="" />
                <span>Hand Made</span>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/002-hand-bag.svg" alt="" />
                <span>Minimalism</span>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/004-game-console.svg" alt="" />
                <span>Electronics</span>
              </div>
            </li>
            <li class="sideBar">
              <div class="dflex">
                <img src="./images/category/break.svg" alt="" />
                <span>Cars</span>
              </div>
            </li>
          </ul>
        </div>
        <ul class="menu__menu dflex">
          <li class="menu__item">
            <a class="link" href="/">
              Home<i class="fas fa-angle-down"></i>
              <ul class="submenu">
                <li>
                  <a href="#">
                    <img src="./images/menu/default.jpg" alt="" />
                    <p>Demo Default</p>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img src="./images/menu/preview-fashion-minimalism-1.jpg" alt="" />
                    <p>Demo Fashion Minimalism</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/menu/peview-demo.jpg" alt="" />
                    <p>Demo Bakery</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/menu/preview-decor.jpg" alt="" />
                    <p>Demo Decor</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/menu/preview-retail.jpg" alt="" />
                    <p>Demo Retail</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/menu/Electronics1.jpg" alt="" />
                    <p>Demo Electronics</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/menu/Fashion-Colored1.jpg" alt="" />
                    <p>Demo Fashion Color</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/menu/handmade.jpg" alt="" />
                    <p>Demo Handmade</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/menu/peview-demo-drinks.jpg" alt="" />
                    <p>Demo Drinks</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/menu/Fashion1.jpg" alt="" />
                    <p>Demo Fashion</p>
                  </a>
                </li>
              </ul>
            </a>
          </li>
          <li class="menu__item">
            <a class={`link ${isShop ? 'active' : ''}`} style={{ cursor: 'pointer' }} onClick={goShop}>
              Shop
            </a>
          </li>
          <li class="menu__item">
            <a class="link" href="blog.html">
              Blog<i class="fas fa-angle-down"></i>
              <ul class="submenu megamenu dflex" style={{ alignItems: 'center' }}>
                <li class="megamenu__item">
                  <a class="link-title" href="#">
                    Blog Types
                  </a>
                  <ul>
                    <li>
                      <a class="sub-link" href="#">
                        Alternative
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Small Image
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Blog Chess
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Masonry Grid
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Infinite Scrolling
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        With Background
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Blog Flat
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Default Flat
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Blog Mask
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="megamenu__item">
                  <a class="link-title" href="#">
                    Single Post
                  </a>
                  <ul>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #1
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #2
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #3
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #4
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #5
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #6
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #7
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #8
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="#">
                        Post Example #9
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="megamenu__item post">
                  <a class="link-title" href="#" style={{ fontSize: '1.6rem' }}>
                    Recent Posts
                  </a>
                  <ul class="posts">
                    <li class="post__item">
                      <div class="post__image">
                        <img src="./images/menu/blog-12-75x65.jpg" alt="" />
                      </div>
                      <div class="post__content">
                        <a class="link-title" href="#">
                          A companion for extra sleeping
                        </a>
                        <a class="date" href="#">
                          July 23, 2016<span>1 Comment</span>
                        </a>
                      </div>
                    </li>
                    <li class="post__item">
                      <div class="post__image">
                        <img src="./images/menu/blog-11-75x65.jpg" alt="" />
                      </div>
                      <div class="post__content">
                        <a class="link-title" href="#">
                          Outdoor seating collection inspiration
                        </a>
                        <a class="date" href="#">
                          July 23, 2016<span>1 Comment</span>
                        </a>
                      </div>
                    </li>
                    <li class="post__item">
                      <div class="post__image">
                        <img src="./images/menu/blog-17-75x65.jpg" alt="" />
                      </div>
                      <div class="post__content">
                        <a class="link-title" href="#">
                          Modular seating and table system
                        </a>
                        <a class="date" href="#">
                          July 23, 2016<span>1 Comment</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </a>
          </li>
        </ul>
        <ul class="menu__offer dflex">
          <li>
            <a class="link active" href="#">
              Special Offer
            </a>
          </li>
          <li>
            <a class="link" href="#">
              Purchase Theme
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
