import React from "react";
const Footer = () => {
return (
	<>
      <footer class="footer"data-aos="fade-up"data-aos-duration="2000">
         <div class="container">
            <div class="row">
              <div class="col-md-4 aboutscatter col-sm-4">
                 <h5>About ScatterVault.io</h5>
                 <p class="pt-24">In a world where one company controls 77% of all searches, 
                    influencing trillions of dollars in spending, 
                    shaping perceptions and effectively acting as the 
                    primary gatekeeper to the Internet.
                  </p>
                  <div class="row">
                     <div class="col-md-6 col-6 col-xs-6">
                        <ul>
                           <li>
                              <a href="investment.html">Investment Plan</a>
                           </li>
                            <li>
                              <a href="contactus.html">Contact Us</a>
                           </li>

                        </ul>
                     </div>
                     <div class="col-md-6 col-6 col-xs-6">
                        <ul>
                          
                           <li>
                              <a href="Blog.html">Blog  </a>
                           </li>
                           <li>
                              <a href="faq.html">FAQ's</a>
                           </li>
                        </ul>
                     </div>
                  </div>
              </div>

              <div class="col-md-4 latest-twitt col-sm-4">
                 <h5>Latest Tweet</h5>
                 <p class="date pt-24">25 SEPTEMBER 2018</p>
                 <p><a href="#">merkulov <span>@merkulove_d</span></a></p>
                 <img src="images/footerimg.png" alt=""/>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, 
                    Nemo sit, consequatur quasi tenetur maxime ab. Doloribus, placeat?
                  </p>
              </div>

              <div class="col-md-4 newsletter col-sm-4">
                 <h5>Subscribe to newsletter</h5>
                 <form>
                  <div class="input-group mb-3 ">
                     <input type="text" class="form-control" placeholder="me@merkulove.desig" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                     <div class="input-group-append">
                       <span class="input-group-text" id="basic-addon2"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                     </div>
                   </div>
                 </form>
                 <p>Join our subscribers list to get the latest news, updates and 
                    special offers delivered directly in your inbox.</p>
              </div>
            </div>
         </div>
      </footer>
      <footer className="sub-footer copyright">
         <div className="container">
            <div className="row">
               
               <div className="col-md-12 col-sm-12 text-center pb-30">
                  <div>Copyright © 2010-2022 ScatterVault.io. All rights reserved.</div>
               </div>
            </div>
         </div>
      </footer>
      </>
);
};

export default Footer;
