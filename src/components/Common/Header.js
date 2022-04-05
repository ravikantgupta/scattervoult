import React from "react";
const Header = () => {
return (
	<><div className="bg-light-pink" id="myHeader">
          
            <header id="masthead" className="header ttm-header-style-classNameic">
              
               <div className="ttm-header-wrap">
                
                  <div id="ttm-stickable-header-w" className="ttm-stickable-header-w clearfix">
                     <div id="site-header-menu" className="site-header-menu">
                        <div className="site-header-menu-inner ttm-stickable-header">
                           <div className="container">
                             
                              <div className="site-branding">
                                 <a className="home-link" href="index.html" title="Fondex" rel="home">
                                 <img id="logo-img " className="img-center desktoplogo" src="images/desktoplogo.png" alt="logo-img"/>
                                 <img id="mobilelogo" className="img-center" src="images/logo.png" alt="logo-img"/>
                                 </a>
                              </div>
                             
                              <div id="site-navigation" className="site-navigation">
                                 <div className="ttm-menu-toggle">
                                    <input type="checkbox" id="menu-toggle-form" />
                                    <label for="menu-toggle-form" className="ttm-menu-toggle-block">
                                    <span className="toggle-block toggle-blocks-1"></span>
                                    <span className="toggle-block toggle-blocks-2"></span>
                                    <span className="toggle-block toggle-blocks-3"></span>
                                    </label>
                                 </div>
                                 <nav id="menu" className="menu">
                                    <ul className="dropdown" id="my_m">
                                       <li><a href="javascript:void(0)">About Us</a></li>
                                      
                                       <li><a href="investment.html">Investment</a></li>
                                        <li className="dropdown">
                                          <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                          Resources
                                          </button>
                                          <div className="dropdown-menu">
                                             <a className="dropdown-item" href="Blog.html">Blog</a>
                                             <a className="dropdown-item" href="events.html">Events</a>
                                             <a className="dropdown-item" href="faq.html">FAQ's</a>
                                          </div>
                                       </li>
                                      
                                       <li><a href="contactus.html">Contact Us</a></li>
                                       <li className="callus"><a href="login.html" className="pr-0">Login</a></li>
                                       <li className="callus"><a href="register.html" className="pr-0 lightblueGradient signup hover-effect">Sign Up</a></li>
                                    </ul>
                                 </nav>
                              </div>
                           
                           </div>
                        </div>
                     </div>
                  </div>
                
               </div>
             
            </header>
           
         </div></>
);
};

export default Header;
