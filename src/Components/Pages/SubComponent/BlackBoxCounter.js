import React from "react";
import { Link } from "react-router-dom";
const BlackBoxCounter = () => {
    return (
        <>

<div className="charity-main-section charity_counter_full">
            <span className="black-transparent"></span>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-counter" id="counter">
                            <ul className="row">
                                <li className="col-md-2">
                                    <i className="icon-donation2 charity-bgcolor"></i>
                                    <span className="counter-value" data-count="500">0</span>
                                    <small>Donators</small>
                                </li>
                                <li className="col-md-2">
                                    <i className="icon-ribbon charity-bgcolor"></i>
                                    <span className="counter-value" data-count="1000">0</span>
                                    <small>Widow Pension</small>
                                </li>
                                <li className="col-md-2">
                                    <i className="icon-mortarboard charity-bgcolor"></i>
                                    <span className="counter-value" data-count="10000">0</span>
                                    <small>Scholarship</small>
                                </li>
                                <li className="col-md-2">
                                    <i className="icon-help charity-bgcolor"></i>
                                    <span className="counter-value" data-count="3000">0</span>
                                    <small>Counselling</small>
                                </li>
                                <li className="col-md-2">
                                    <i className="icon-mortarboard charity-bgcolor"></i>
                                    <span className="counter-value" data-count="3407">0</span>
                                    <small>Ration Distributed</small>
                                </li>
                                <li className="col-md-2">
                                    <i className="icon-donation2 charity-bgcolor"></i>
                                    <span className="counter-value" data-count="1500">0</span>
                                    <small>Coaching</small>
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
export default BlackBoxCounter;
