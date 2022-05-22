import React from "react";
import { Link } from "react-router-dom";
const MainMid = () => {

    return (
        <>
         <div className="charity-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <p>Lorem ipsum dolor sit amet consectetur adipng elit Etiam dui velit posuere a voluat sitamet egestas ac ante.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="short-text-thumb"><img src="extra-images/short-text-thumb-1.jpg" alt=""/></figure>
                    </div>
                    <div className="col-md-6 charity-short-text">
                        <h2>We are served since 35 years to helple people with trust</h2>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipng elit. Etiam dui velit, posuere a voluat sitamet, egestas ac ante.
                        Lorem ipsum dolor sit amet, consectetur adipng elit. Etiam dui velit, posuere a voluat sitamet, egestas ac ante.
                        consectetur adipng elit. Etiam dui velit, posuere a voluat sitamet, egestas ac ante.
                        consectetur adipng elit. Etiam dui velit, posuere a voluat sitamet, egestas ac ante.
                        
                        </p>
                       
                        <Link to="#" className="charity-more-btn"><i className="fas fa-arrow-right"></i> Read More</Link> 
                    </div>
                   
                </div>
            </div>

            <div className="container-fluid">
            <div className="col-md-12">
                        <div className="charity-services charity-simple-services">
                            <ul className="row">
                                <li className="col-md-3">
                                    <i className="fas fa-book charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Coaching</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui velit posuere a volutpat amet.</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                <li className="col-md-3">
                                    <i className="fas fa-handshake charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Scholarship </h2>
                                        <p>Our mission To mainstream child rights and children’s concerns in all development planning.</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                <li className="col-md-3">
                                    <i className="fas fa-users charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Ration Distribution </h2>
                                        <p>Our vision an  inclusive society where all children grow up in an environment .</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                <li className="col-md-3">
                                    <i className="fas fa-users charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2> Counselling</h2>
                                        <p>Our vision an  inclusive society where all children grow up in an environment .</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li>
                                {/* <li className="col-md-3">
                                    <i className="fas fa-users charity-color"></i>
                                    <div className="charity-simple-services-text">
                                        <h2>Widow Pension </h2>
                                        <p>Our vision an  inclusive society where all children grow up in an environment .</p>
                                        <Link to="#" className="charity-service-link">Read More</Link> 
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>

            </div>
        </div>
        </>
    );
}
export default MainMid;