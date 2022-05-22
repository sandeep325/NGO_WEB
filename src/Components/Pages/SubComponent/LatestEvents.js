import React from "react";
import { Link } from "react-router-dom";
const LatestEvents = () => {
    return (
        <>
        <div className="charity-main-section charity-event-grid-full">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <h2>Latest Events</h2>
                        </div>
                        <div className="charity-event charity-event-grid">
                            <ul className="row">
                                <li className="col-md-4">
                                    <figure><Link to="#"><img src="extra-images/event-grid-1.jpg" alt=""/></Link>
                                        <figcaption>
                                            15 <span>Jan</span>
                                        </figcaption>
                                        <Link to="#" className="charity-caption-btn"><span>View Detail</span></Link>
                                    </figure>
                                    <div className="charity-event-grid-text">
                                        <h2><Link to="#">Fundraising as a team in the workplace</Link></h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                                        <ul className="charity-event-grid-option">
                                            <li><span>Start Time :</span> 01 December 2018</li>
                                            <li><span>Ending Time :</span> 22 December 2018</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <figure><Link to="#"><img src="extra-images/event-grid-2.jpg" alt=""/></Link>
                                        <figcaption>
                                            19 <span>Dec</span>
                                        </figcaption>
                                        <Link to="#" className="charity-caption-btn"><span>View Detail</span></Link>
                                    </figure>
                                    <div className="charity-event-grid-text">
                                        <h2><Link to="#">Trinity trash bas water way cleanup</Link></h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                                        <ul className="charity-event-grid-option">
                                            <li><span>Start Time :</span> 04 November 2018</li>
                                            <li><span>Ending Time :</span> 28 November 2018</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="col-md-4">
                                    <figure><Link to="#"><img src="extra-images/event-grid-3.jpg" alt=""/></Link>
                                        <figcaption>
                                            23 <span>NOV</span>
                                        </figcaption>
                                        <Link to="#" className="charity-caption-btn"><span>View Detail</span></Link>
                                    </figure>
                                    <div className="charity-event-grid-text">
                                        <h2><Link to="#">Helping the children from Zimbabwe</Link></h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                                        <ul className="charity-event-grid-option">
                                            <li><span>Start Time :</span> 07 April 2018</li>
                                            <li><span>Ending Time :</span> 20 April 2018</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default LatestEvents;
