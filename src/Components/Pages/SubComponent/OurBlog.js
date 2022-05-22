import React from "react";
import { Link } from "react-router-dom";
const OurBlog = () => {
    return (
        <>
<div className="charity-main-section charity-simple-blog-full">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <h2>Our Blogs</h2>
                        </div>
                        <div className="charity-blog charity-simple-blog">
                            <ul className="row">
                                <li className="col-md-6">
                                    <figure><Link to="#"><img src="extra-images/blog-simple-1.jpg" alt=""/></Link>
                                        <figcaption>
                                            <time datetime="2008-02-14 20:00" className="charity-bgcolor">18 <span>AUG</span></time>
                                            <Link to="#" className="blog-link-hover"><i className="fa fa-link"></i></Link>
                                        </figcaption>
                                    </figure>
                                    <div className="charity-simple-blog-text">
                                        <ul className="charity-simple-blog-options">
                                            <li><i className="fa fa-map-marker-alt"></i> George Street, London United</li>
                                            <li><i className="fa fa-comments"></i> <Link to="#">5 Comments</Link></li>
                                            <li><i className="far fa-heart"></i> <Link to="#">Like</Link></li>
                                        </ul>
                                        <h2><Link to="#">Monsoon floods world vision warns of spkie in child</Link></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nibh, fringilla.</p>
                                        <Link to="#" className="charity-simple-blog-btn">Read More</Link>
                                    </div>
                                </li>
                                <li className="col-md-6">
                                    <figure><Link to="#"><img src="extra-images/blog-simple-2.jpg" alt=""/></Link>
                                        <figcaption>
                                            <time datetime="2008-02-14 20:00" className="charity-bgcolor">12 <span>JAN</span></time>
                                            <Link to="#" className="blog-link-hover"><i className="fa fa-link"></i></Link>
                                        </figcaption>
                                    </figure>
                                    <div className="charity-simple-blog-text">
                                        <ul className="charity-simple-blog-options">
                                            <li><i className="fa fa-map-marker-alt"></i> George Street, London United</li>
                                            <li><i className="fa fa-comments"></i> <Link to="#">7 Comments</Link></li>
                                            <li><i className="far fa-heart"></i> <Link to="#">Like</Link></li>
                                        </ul>
                                        <h2><Link to="#">charity fears that soth suda nese refugee children</Link></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nibh, fringilla.</p>
                                        <Link to="#" className="charity-simple-blog-btn">Read More</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="charity-loadbtn"><Link to="#">See All</Link></div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default OurBlog;

