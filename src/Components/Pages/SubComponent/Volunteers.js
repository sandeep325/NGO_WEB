import React from "react";
import { Link } from "react-router-dom";
const Volunteers = () => {
    return (
        <>
<div className="charity-main-section charity-simple-team-full">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <h2>Our Volunteers</h2>
                        </div>
                        <div className="charity-team charity-simple-team">
                            <ul className="row">
                                <li className="col-md-4">
                                    <figure><Link to="#"><img src="extra-images/simple-team-1.jpg" alt=""/></Link>
                                        <figcaption>
                                            <div className="charity-simple-team-media">
                                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </div>
                                            <div className="charity-simple-team-text">
                                                <h2><Link to="#">Shadab Ashraf</Link></h2>
                                                <span>Co-director</span>
                                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-4">
                                    <figure><Link to="#"><img src="extra-images/simple-team-2.jpg" alt=""/></Link>
                                        <figcaption>
                                            <div className="charity-simple-team-media">
                                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </div>
                                            <div className="charity-simple-team-text">
                                                <h2><Link to="#">Sandeep Negi</Link></h2>
                                                <span>Co-director</span>
                                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-4">
                                    <figure><Link to="#"><img src="extra-images/simple-team-3.jpg" alt=""/></Link>
                                        <figcaption>
                                            <div className="charity-simple-team-media">
                                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </div>
                                            <div className="charity-simple-team-text">
                                                <h2><Link to="#">Mohtamim</Link></h2>
                                                <span>Co-director</span>
                                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="charity-loadbtn"><Link to="#">Load More</Link></div> */}
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default Volunteers;
