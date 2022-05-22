import React from "react";
import { Link } from "react-router-dom";

const Contact = () =>{

    return (
        <>
  
  <div className="charity-subheader">
        <span className="black-transparent"></span>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Contact Us</h1>
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>
                </div>
            </div>
        </div>
    </div>

    <div className="charity-main-content">

        <div className="charity-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <h2>We would love to hear from you</h2>
                        </div>
                        <form method="post" className="myform" action="process-form.php">
                            <div className="charity-contact-form">
                                <ul className="row">
                                    <li className="col-md-6"><input type="text" placeholder="First Name" name="name" required/></li>
                                    <li className="col-md-6"><input type="text" placeholder="Last Name" name="name" required/></li>
                                    <li className="col-md-6"><input type="text" placeholder="Email" name="email" required/></li>
                                    <li className="col-md-6"><input type="text" placeholder="Phone Number" name="number" required/></li>
                                    <li className="col-md-12"><textarea placeholder="Messages" name="Message"></textarea></li>
                                    <li className="col-md-12"><input type="submit" value="Submit Request"/> <span className="output_message"></span> </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12">
                        <div className="charity-contact-list">
                            <ul className="row">
                                <li className="col-md-4">
                                    <div className="charity-contact-list-wrap">
                                        <i className="fa fa-map-marker-alt"></i>
                                        <h2 className="charity-color">Address</h2>
                                        <span>LaxmiNagar, <br/> New Delhi, India</span>
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <div className="charity-contact-list-wrap">
                                        <i className="fa fa-phone-volume"></i>
                                        <h2 className="charity-color">Phone Numbers</h2>
                                        <span>8851576516 <br/> 8521494888</span>
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <div className="charity-contact-list-wrap">
                                        <i className="far fa-envelope-open"></i>
                                        <h2 className="charity-color">Contact Mail</h2>
                                        <Link to="mailto:name@email.com">mdshadab1301@gmail.com</Link> <br/>
                                        <Link to="mailto:name@email.com">mdshadab1301@gmail.com</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="charity-main-section map-full">
            <div className="container-fluid">
                <div className="row">
                    <div id="map"></div>
                </div>
            </div>
        </div>

    </div>


        </>
    );
}
export default Contact;