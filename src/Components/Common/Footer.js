import React from "react";
import { Link } from "react-router-dom";
const Footer = () =>{

    return(
        <>
    <footer id="charity-footer" className="charity-footer-one">
{/* <div className="charity-newslatter">
    <div className="container">
        <div className="row">
            <aside className="col-md-6">
                <h2>Sign up for newslatter</h2>
                <p>Submit your email and stay in tuch by notify our news and stay with us</p>
            </aside>
            <aside className="col-md-6">
                <form>
                    <input type="text" placeholder="Enter Your Email"/>
                    <label>
                        <input type="submit" value="Subscribe Now"/>
                        <i className="far fa-paper-plane"></i>
                    </label>
                </form>
            </aside>
        </div>
    </div>
</div> */}
<div className="charity-footer-widget">
    <div className="container">
        <div className="row">
            <aside className="col-md-6 widget widget_usefull_links">
                <div className="charity-footer-title"> <h2>Quick Links</h2> </div>
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Funder</Link></li>
                    <li><Link to="#">Partner</Link></li>
                    <li><Link to="#">Well Wisher</Link></li>
                    <li><Link to="#">Team</Link></li>
                    <li><Link to="#">Founder</Link></li>
                   
                </ul>
            </aside>
            {/* <aside className="col-md-4 widget widget_recent_news">
                <div className="charity-footer-title"> <h2>Recent News</h2> </div>
                <ul>
                    <li>
                        <figure><Link to="#"><img src="extra-images/recent-news-widget-1.jpg" alt=""/></Link></figure>
                        <div className="widget_recent_news_text">
                            <h6><Link to="#">Praesent sit amet tellus sed qum biben dum faucus</Link></h6>
                            <span>22 Sept, 2016</span>
                        </div>
                    </li>
                    <li>
                        <figure><Link to="#"><img src="extra-images/recent-news-widget-2.jpg" alt=""/></Link></figure>
                        <div className="widget_recent_news_text">
                            <h6><Link to="#">Morbi pulvinar faucibus urna, sit amet euisd nulla.</Link></h6>
                            <span>22 Sept, 2016</span>
                        </div>
                    </li>
                </ul>
            </aside> */}
            <aside className="col-md-6 widget widget_gallery">
                <div className="charity-footer-title"> <h2>Our Gallery</h2> </div>
                <ul>
                    <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-1.jpg"><img src="extra-images/widget-gallery-1.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                    <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-2.jpg"><img src="extra-images/widget-gallery-2.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                    <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-3.jpg"><img src="extra-images/widget-gallery-3.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                    <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-4.jpg"><img src="extra-images/widget-gallery-4.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                    <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-5.jpg"><img src="extra-images/widget-gallery-5.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                    <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-6.jpg"><img src="extra-images/widget-gallery-6.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                    <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-7.jpg"><img src="extra-images/widget-gallery-7.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                    <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-8.jpg"><img src="extra-images/widget-gallery-8.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                </ul>
            </aside>
        </div>
        <div className="charity-copyright">
            <Link to="#" className="back-top charity-bgcolor"><i className="fa fa-angle-up"></i></Link>
            <p>© 2018, All Right Reserved - by RiteTags</p>
            <ul>
                <li><Link to="404.html">Terms and conditions</Link></li>
                <li><Link to="404.html">Privacy policy</Link></li>
            </ul>
        </div>
    </div>
</div>


</footer>
        </>
    );
}
export default Footer;