import React from "react";
import { Link } from "react-router-dom";
const notfoundPgae = () =>{

    return (
        <>
  <div className="charity-subheader">
        <span className="light-black-transparent"></span>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>404 Error</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nibh, fringilla fermentum at.</p>
                </div>
            </div>
        </div>
    </div>


    <div className="charity-main-content">
        
        <div className="charity-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-page-wrap">
                            <div className="error-page-inner">
                                <h2>404 Error</h2>
                                <span>oops page not found</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Sed urna nibh fringilla fermentum at.</p>
                                <Link to="#" className="error-page-btn">Back To Home</Link>
                                <form>
                                    <input type="text" placeholder="Enter your Keyword"/>
                                    <input type="submit" value=""/>
                                    <i className="fa fa-search"></i>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
        </>
    );
}
export default notfoundPgae;