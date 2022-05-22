import React from "react";
import { Link } from "react-router-dom";
import MissionCard from "./SubComponent/MissionCard";
import MainMid from "./SubComponent/MainMid";
import LatestCauses from "./SubComponent/LatestCauses";
import BlackBoxCounter from "./SubComponent/BlackBoxCounter";
import LatestEvents from "./SubComponent/LatestEvents";
import OurGallery from "./SubComponent/OurGallery";
import Volunteers from "./SubComponent/Volunteers";
import OurBlog from "./SubComponent/OurBlog";
const Home = () =>{

    return (
        <>

<div className="charity-banner">
        
        <div className="charity-banner-layer">
            <span className="charity-banner-transparent"></span>
            <img src="extra-images/banner-1.jpg" alt=""/>
            <div className="charity-banner-caption">
                <div className="container">
                    <h1>Charity Start your future Cause Help <span className="charity-color">The Poeple</span></h1>
                    <div className="clearfix"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas aliquet quam quis molestie finibus. Integer aliquam ex ut rutrum aliquam.</p>
                    <div className="clearfix"></div>
                    <Link to="#">Learn More</Link> 
                    <Link to="#">Donate Now</Link> 
                </div>
            </div>
        </div>

    </div>

    <div className="charity-main-content">
<MissionCard/>,
</div>
{/* <MainMid/>, */}
{/* <LatestCauses/>, */}

<div className="charity-main-section charity-simple-team-full">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <h2>OUR IMPACT</h2>
                        </div>
                        {/* <div className="charity-team charity-simple-team">
                           <p>Dummy description for our impact. Dummy description for our impact. Dummy description for our impact.Dummy description for our impact.
                           Dummy description for our impact.Dummy description for our impact.
                           Dummy description for our impact.Dummy description for our impact.</p> 
                           
                        </div>
                        <div className="charity-loadbtn"><Link to="#">Load More</Link></div> */}
                        <BlackBoxCounter/>
                    </div>
                </div>
            </div>
        </div>

{/* <LatestEvents/>, */}


<OurGallery/>,
<Volunteers/>,

{/* <div className="charity-main-section charity-donation-parallex-full">
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
        </div> */}
  {/* <OurBlog/> */}
        </>
    );
}
export default Home;