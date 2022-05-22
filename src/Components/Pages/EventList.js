import React from "react";
import { Link } from "react-router-dom";

const EventList = () =>{

    return (
        <>
<div className="charity-subheader">
        <span className="black-transparent"></span>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Our Team</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="charity-main-content">

<div className="charity-main-section">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
           
                <div className="charity-team charity-simple-team inner-wrap">
                    <ul className="row">
                        <li className="col-md-4">
                            <figure><a href="#"><img src="extra-images/simple-team-1.jpg" alt="" /></a>
                                <figcaption>
                                    <div className="charity-simple-team-media">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <div className="charity-simple-team-text">
                                        <h2><a href="#">Jhon Elexander</a></h2>
                                        <span>Co-director</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="col-md-4">
                            <figure><a href="#"><img src="extra-images/simple-team-2.jpg" alt="" /></a>
                                <figcaption>
                                    <div className="charity-simple-team-media">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <div className="charity-simple-team-text">
                                        <h2><a href="#">Brian Smith</a></h2>
                                        <span>Co-director</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="col-md-4">
                            <figure><a href="#"><img src="extra-images/simple-team-3.jpg" alt="" /></a>
                                <figcaption>
                                    <div className="charity-simple-team-media">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <div className="charity-simple-team-text">
                                        <h2><a href="#">Billy Hopkins</a></h2>
                                        <span>Co-director</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                       
                      
                    </ul>
                </div>
                {/* <div className="charity-pagination">
                    <ul className="page-numbers">
                       <li><a className="previous page-numbers" href="404.html"><span aria-label="Next"><i className="fa fa-angle-left"></i> Previous Post</span></a></li>
                       <li><span className="page-numbers current">01</span></li>
                       <li><a className="page-numbers" href="404.html">02</a></li>
                       <li><a className="page-numbers" href="404.html">03</a></li>
                       <li><a className="page-numbers" href="404.html">...</a></li>
                       <li><a className="page-numbers" href="404.html">10</a></li>
                       <li><a className="next page-numbers" href="404.html"><span aria-label="Next">Next Post<i className="fa fa-angle-right"></i></span></a></li>
                    </ul>
                  </div> */}

            </div>
        </div>
    </div>
</div>


</div>


        </>
    );
}
export default EventList;