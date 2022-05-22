import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
       return(
       <>
      
      <header id="charity-header" className="charity-header-one">
        
        <div className="charity-top-strip">
            <div className="container">
                <div className="row">
                    <aside className="col-6 charity-strip-text">
                        <p>Explore The charity</p>
                        <span><i className="fas fa-phone fa-rotate-90"></i> 8851576516</span>
                        <span><i className="far fa-envelope"></i> <Link to="mailto:name@email.com">mdshadab1301@gmail.com</Link> </span>
                    </aside>
                    <aside className="col-6">
                        <div className="float-right">
                          <ul className="charity-social-network">
                              <li><Link to="#" className="fab fa-facebook-f"></Link> </li>
                              <li><Link to="#" className="fab fa-google"></Link> </li>
                              <li><Link to="#" className="fab fa-pinterest-p"></Link> </li>
                              <li><Link to="#" className="fab fa-linkedin-in"></Link> </li>
                              <li><Link to="#" className="fab fa-twitter"></Link> </li>
                          </ul>
                          <Link to="#" className="charity-strip-btn charity-bgcolor">Donate Now</Link> 
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        <div className="charity-main-header">
            <div className="container">
                <div className="row">
                    {/* <aside className="col-3"><Link to="/" className="charity-logo"><img src="images/logo.png" alt=""/></Link> </aside> */}
                    <aside className="col-3"><Link to="/" className="charity-logo text-danger " style={{fontSize:"20px"}}>Ansar Welfare</Link> </aside>
                    
                    <aside className="col-9">
                        <div className="float-right">
                            <Link to="#menu" className="menu-link active"><span></span></Link> 
                            <nav id="menu" className="menu charity-navigation">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link> </li>
                                    <li><Link to="#">About us</Link> 
                                        <ul className="children">
                                            <li><Link to="/our-team">Team</Link> </li>
                                            <li><Link to="/founders">Founder</Link> </li>
                                            {/* <li><Link to="/EventDetail">Vision</Link> </li> */}
                                        </ul>
                                    </li>
                                    <li><Link to="#">Our Work</Link> 
                                        <ul className="children">
                                            <li><Link to="/coaching">Coaching</Link> </li>
                                            <li><Link to="/counselling">Counselling</Link> </li>
                                            <li><Link to="/scholarship">Scholarship</Link> </li>
                                            <li><Link to="/ration_distribution">Ration Distribution</Link> </li>
                                            <li><Link to="/widow_pension">Widow Pension</Link> </li>
                                        </ul>
                                    </li>
                                    {/* <li><Link to="#">Blog</Link> 
                                        <ul className="children">
                                            <li><Link to="/BlogLarge">Cause List</Link> </li>
                                            <li><Link to="/Blog_medium">Cause Grid</Link> </li>
                                            <li><Link to="/Blog_detail">Cause Detail</Link> </li>
                                        </ul>
                                    </li> */}
                                    <li><Link to="#">Supporters</Link> 
                                        <ul className="children">
                                            <li><Link to="/funder">Funder</Link> </li>
                                            <li><Link to="/well-wisher">Well Wisher</Link> </li>
                                            <li><Link to="/partner">Partner</Link> </li>
                                        </ul>
                                    </li>
                                    {/* <li><Link to="#">Pages</Link> 
                                        <ul className="children">
                                            <li><Link to="/about">About Us</Link> </li>
                                            <li><Link to="/prayer_list">Prayer List</Link> </li>
                                            <li><Link to="/prayer_grid">Prayer Grid</Link> </li>
                                            <li><Link to="/Prayer_detail">Prayer Detail</Link> </li>
                                            <li><Link to="/notfoundPgae">404 Error</Link> </li>
                                            <li><Link to="/SearchResult">Search Result</Link> </li>
                                        </ul>
                                    </li> */}
                                     <li><Link to="/gallery">OurGallery</Link> </li>
                                    <li><Link to="/contact">Contact</Link> </li>
                                </ul>
                            </nav>
                            {/* <ul className="charity-header-options">
                                <li><Link to="#" data-toggle="modal" data-target="#searchModal"><i className="fas fa-search"></i></Link> </li>
                                <li><Link to="#"><i className="fab fa-opencart"></i></Link>  <div className="charity-cart-box"> <p>No products in the cart.</p> </div> </li>
                            </ul> */}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </header>



    <div className="modal fade searchmodal" id="searchModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <Link to="#" className="charity-close-btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Link>
                    <form>
                        <input type="text" value="Type Your Keyword" onblur="if(this.value == '') { this.value ='Type Your Keyword'; }" onfocus="if(this.value =='Type Your Keyword') { this.value = ''; }"/>
                        <input type="submit" value=""/>
                        <i className="fa fa-search"></i>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
       </>

       );

}
export default Header;