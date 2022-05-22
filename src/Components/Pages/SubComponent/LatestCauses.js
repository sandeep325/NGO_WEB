import React from "react";
import { Link } from "react-router-dom";
const LatestCauses = () => {

    return (
        <>
        
        <div class="charity-main-section latest_causes_full">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="charity-fancy-title">
                            <h2>Latest Causes</h2>
                        </div>
                        <div class="charity-causes charity-cause-grid">
                            <ul class="row">
                                <li class="col-md-4">
                                    <figure><a href="#"><img src="extra-images/cause-grid-1.jpg" alt=""/></a>
                                        <figcaption><a href="#" class="charity-cause-grid-hover"><i class="fa fa-users"></i> 21 Donors</a></figcaption>
                                    </figure>
                                    <div data-width='90' data-target='95' class="charity-cause-progressbar"></div>
                                    <div class="charity-cause-grid-text">
                                        <span class="charity-cause-raised">Raised <br/> <strong>$2000</strong></span>
                                        <small class="charity-cause-raised">Goal <br/> <strong>$5000</strong></small>
                                        <div class="clearfix"></div>
                                        <h2><a href="#">Hunger in nigeria</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla lectus ac dui feugiat magna dapibus.</p>
                                        <a href="#" class="charity-more-btn"><i class="fas fa-arrow-right"></i> Donate Now</a>
                                    </div>
                                </li>
                                <li class="col-md-4">
                                    <figure><a href="#"><img src="extra-images/cause-grid-2.jpg" alt=""/></a>
                                        <figcaption><a href="#" class="charity-cause-grid-hover"><i class="fa fa-users"></i> 21 Donors</a></figcaption>
                                    </figure>
                                    <div data-width='60' data-target='60' class="charity-cause-progressbar"></div>
                                    <div class="charity-cause-grid-text">
                                        <span class="charity-cause-raised">Raised <br/> <strong>$1000</strong></span>
                                        <small class="charity-cause-raised">Goal <br/> <strong>$3000</strong></small>
                                        <div class="clearfix"></div>
                                        <h2><a href="#">New School for children</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla lectus ac dui feugiat magna dapibus.</p>
                                        <a href="#" class="charity-more-btn"><i class="fas fa-arrow-right"></i> Donate Now</a>
                                    </div>
                                </li>
                                <li class="col-md-4">
                                    <figure><a href="#"><img src="extra-images/cause-grid-3.jpg" alt=""/></a>
                                        <figcaption><a href="#" class="charity-cause-grid-hover"><i class="fa fa-users"></i> 21 Donors</a></figcaption>
                                    </figure>
                                    <div data-width='45' data-target='45' class="charity-cause-progressbar"></div>
                                    <div class="charity-cause-grid-text">
                                        <span class="charity-cause-raised">Raised <br/> <strong>$7000</strong></span>
                                        <small class="charity-cause-raised">Goal <br/> <strong>$9000</strong></small>
                                        <div class="clearfix"></div>
                                        <h2><a href="#">Provide Treatment</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla lectus ac dui feugiat magna dapibus.</p>
                                        <a href="#" class="charity-more-btn"><i class="fas fa-arrow-right"></i> Donate Now</a>
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
export default LatestCauses;