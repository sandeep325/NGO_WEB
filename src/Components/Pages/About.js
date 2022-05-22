import React from "react";
import { Link } from "react-router-dom";
const About = () =>{

    return (
        <>
  <div className="charity-subheader">
        <span className="black-transparent"></span>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>About Us</h1>
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>
                </div>
            </div>
        </div>
    </div>

    <div className="charity-main-content">

        <div className="charity-main-section charity-aboutus-text-full">
            <div className="container">
                <div className="row">
                        
                    <div className="col-md-7">
                        <div className="charity-aboutus-text">
                            <h2>We Are Non Profit Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lectus interdum lacus rutrum molestie. Vestibulum eu semper ipsum. Duis in libero non dolor rutrm faucibu  eget vitae lacus. Praesent eu pharetra ante. Quisque augue eros, rhoncus tae hendrer it eget, dapibus non diam.</p>
                            <ul className="charity-list-style-one">
                                <li>Phasellus dapibus, massa ac tempor rutrum</li>
                                <li>Aliquam ex lorem, feugiat eget dolor in, iaculis ullamcorpr fringilla soll porttitor.</li>
                                <li>Nullam rhoncus, nisl id ultrices tristique, risus massa ulla mcorper sem, id euism od nisi tortor.</li>
                            </ul>
                            <h6>Donation So Far: <span>$ 6000</span></h6>
                            <Link to="#" className="charity-about-btn">Become a Volunteer</Link> 
                        </div>
                    </div>
                    <div className="col-md-5">
                        <figure className="chrity-thumb-style">
                            <img src="extra-images/aboutus-img.png" alt=""/>
                        </figure>
                    </div>

                </div>
            </div>
        </div>
        <div className="charity-main-section charity_counter_full">
            <span className="black-transparent"></span>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-counter" id="counter">
                            <ul className="row">
                                <li className="col-md-3">
                                    <i className="icon-donation2 charity-bgcolor"></i>
                                    <span className="counter-value" data-count="5012">0</span>
                                    <small>Donators</small>
                                </li>
                                <li className="col-md-3">
                                    <i className="icon-ribbon charity-bgcolor"></i>
                                    <span className="counter-value" data-count="60574">0</span>
                                    <small>Causes Solved</small>
                                </li>
                                <li className="col-md-3">
                                    <i className="icon-mortarboard charity-bgcolor"></i>
                                    <span className="counter-value" data-count="30047">0</span>
                                    <small>Volunteer</small>
                                </li>
                                <li className="col-md-3">
                                    <i className="icon-help charity-bgcolor"></i>
                                    <span className="counter-value" data-count="7814">0</span>
                                    <small>Child Saved</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="charity-main-section charity-simple-services-full">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <h2>Our Services</h2>
                        </div>
                        <div className="charity-services charity-simple-services">
                            <ul className="row">
                                <li className="col-md-4">
                                    <i className="fas fa-book charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Free Education</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui velit posuere a volutpat amet.</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <i className="fas fa-handshake charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Volunteer</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui velit posuere a volutpat amet.</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <i className="fas fa-users charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Protect Children</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui velit posuere a volutpat amet.</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <i className="fas fa-book charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Free Education</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui velit posuere a volutpat amet.</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <i className="fas fa-handshake charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Volunteer</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui velit posuere a volutpat amet.</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <i className="fas fa-users charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Protect Children</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui velit posuere a volutpat amet.</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="charity-main-section charity-donation-parallex-full">
            <span className="light-black-transparent"></span>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-donation-parallex">
                            <h2>Help Africans,Donate For A Cause</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nibh, fringilla fermentum vulputate Curabitur vel maximus magna at cursus aliquet, arcu ut massa</p>
                            <div className="clearfix"></div>
                            <div className="charity-causestrip-section">
                                <span className="charity-left-section">Raised: <small>3250$</small></span>
                                <span className="charity-right-section">Goal: <small>5000$</small></span>
                                <div data-width='80' className="charity-cause-progressbar"></div>
                            </div>
                            <div className="clearfix"></div>
                            <Link to="#" className="charity-donation-parallex-btn">Make Donation</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="charity-main-section charity-partner-slider-full">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <h2>Our Partners</h2>
                        </div>
                        <div className="charity-partner-slider">
                            <div> <Link to="404.html"><img src="extra-images/partner-logo-1.png" alt=""/></Link>  </div>
                            <div> <Link to="404.html"><img src="extra-images/partner-logo-2.png" alt=""/></Link>  </div>
                            <div> <Link to="404.html"><img src="extra-images/partner-logo-3.png" alt=""/></Link>  </div>
                            <div> <Link to="404.html"><img src="extra-images/partner-logo-4.png" alt=""/></Link>  </div>
                            <div> <Link to="404.html"><img src="extra-images/partner-logo-3.png" alt=""/></Link>  </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
        </>
    );
}
export default About;