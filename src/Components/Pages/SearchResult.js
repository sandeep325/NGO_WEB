import React from "react";
import { Link } from "react-router-dom";
const SearchResult = () =>{

    return (
        <>
<div className="charity-subheader">
        <span className="light-black-transparent"></span>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Search Result</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nibh, fringilla fermentum at.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="charity-main-content">
        
        <div className="charity-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="charity-search-result-title">
                            <h2>Nothing Found</h2>
                            <p>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
                        </div>
                        <form className="charity-search-result-form">
                            <input type="text" placeholder="Enter your Keyword"/>
                            <input type="submit" value=""/>
                            <i className="fa fa-search"></i>
                        </form>
                        <div className="charity-blog charity-simple-blog charity-search-result-list">
                            <ul className="row">
                                <li className="col-md-12">
                                    <figure><Link to="#"><img src="extra-images/blog-simple-1.jpg" alt=""/></Link>
                                        <figcaption>
                                            <Link to="#" className="blog-link-hover"><i className="fa fa-link"></i></Link>
                                        </figcaption>
                                    </figure>
                                    <div className="charity-simple-blog-text">
                                        <ul className="charity-simple-blog-options">
                                            <li><i className="fa fa-map-marker-alt"></i> George Street, London United</li>
                                            <li><i className="fa fa-comments"></i> <Link to="#">5 Comments</Link></li>
                                            <li><i className="far fa-heart"></i> <Link to="#">Like</Link></li>
                                        </ul>
                                        <h2><Link to="#">Phasellus interdum a justo et pharetra Donec blandit massa vitae vulputate</Link></h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Sed urna nibh fringilla Praesent sed elit fringilla, condimentum elit eget, ultricies tellus Proin sit amet lorem egestas rutrum.</p>
                                        <Link to="#" className="charity-simple-blog-btn">Read More</Link>
                                    </div>
                                </li>
                                <li className="col-md-12">
                                    <figure><Link to="#"><img src="extra-images/blog-simple-2.jpg" alt=""/></Link>
                                        <figcaption>
                                            <Link to="#" className="blog-link-hover"><i className="fa fa-link"></i></Link>
                                        </figcaption>
                                    </figure>
                                    <div className="charity-simple-blog-text">
                                        <ul className="charity-simple-blog-options">
                                            <li><i className="fa fa-map-marker-alt"></i> George Street, London United</li>
                                            <li><i className="fa fa-comments"></i> <Link to="#">7 Comments</Link></li>
                                            <li><i className="far fa-heart"></i> <Link to="#">Like</Link></li>
                                        </ul>
                                        <h2><Link to="#">Phasellus interdum a justo et pharetra Donec blandit massa vitae vulputate</Link></h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Sed urna nibh fringilla Praesent sed elit fringilla, condimentum elit eget, ultricies tellus Proin sit amet lorem egestas rutrum.</p>
                                        <Link to="#" className="charity-simple-blog-btn">Read More</Link>
                                    </div>
                                </li>
                                <li className="col-md-12">
                                    <figure><Link to="#"><img src="extra-images/blog-simple-3.jpg" alt=""/></Link>
                                        <figcaption>
                                            <Link to="#" className="blog-link-hover"><i className="fa fa-link"></i></Link>
                                        </figcaption>
                                    </figure>
                                    <div className="charity-simple-blog-text">
                                        <ul className="charity-simple-blog-options">
                                            <li><i className="fa fa-map-marker-alt"></i> George Street, London United</li>
                                            <li><i className="fa fa-comments"></i> <Link to="#">5 Comments</Link></li>
                                            <li><i className="far fa-heart"></i> <Link to="#">Like</Link></li>
                                        </ul>
                                        <h2><Link to="#">Phasellus interdum a justo et pharetra Donec blandit massa vitae vulputate</Link></h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Sed urna nibh fringilla Praesent sed elit fringilla, condimentum elit eget, ultricies tellus Proin sit amet lorem egestas rutrum.</p>
                                        <Link to="#" className="charity-simple-blog-btn">Read More</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <aside className="col-md-3">
                        
                        <div className="widget widget_archive">
                            <div className="widget_title"><h2>Calender Archives</h2></div>
                            <ul>
                                <li><Link to="404.html">13 August 2017</Link></li>
                                <li><Link to="404.html">28 September 2017</Link></li>
                                <li><Link to="404.html">19 May 2017</Link></li>
                                <li><Link to="404.html">03 March 2017</Link></li>
                                <li><Link to="404.html">28 February 2017</Link></li>
                            </ul>
                        </div>

                        <div className="widget widget_events">
                            <div className="widget_title"><h2>Upcoming Events</h2></div>
                            <ul>
                                <li>
                                    <time datetime="2008-02-14 20:00">22 Aug</time>
                                    <div className="charity-events">
                                       <h6><Link to="event-detail.html">Fusce fibus purus cos vulputate</Link></h6>
                                       <Link to="event-detail.html"><i className="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</Link>
                                    </div>
                                </li>
                                <li>
                                    <time datetime="2008-02-14 20:00">13 Sep</time>
                                    <div className="charity-events">
                                       <h6><Link to="event-detail.html">Fusce fibus purus cos vulputate</Link></h6>
                                       <Link to="event-detail.html"><i className="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</Link>
                                    </div>
                                </li>
                                <li>
                                    <time datetime="2008-02-14 20:00">07 Dec</time>
                                    <div className="charity-events">
                                       <h6><Link to="event-detail.html">Fusce fibus purus cos vulputate</Link></h6>
                                       <Link to="event-detail.html"><i className="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</Link>
                                    </div>
                                </li>
                             </ul>
                        </div>

                        <div className="widget widget_gallery">
                            <div className="widget_title"> <h2>Our Gallery</h2> </div>
                            <ul>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-1.jpg"><img src="extra-images/widget-gallery-1.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-2.jpg"><img src="extra-images/widget-gallery-2.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-3.jpg"><img src="extra-images/widget-gallery-3.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-4.jpg"><img src="extra-images/widget-gallery-4.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-5.jpg"><img src="extra-images/widget-gallery-5.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-6.jpg"><img src="extra-images/widget-gallery-6.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-7.jpg"><img src="extra-images/widget-gallery-7.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-8.jpg"><img src="extra-images/widget-gallery-8.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-6.jpg"><img src="extra-images/widget-gallery-6.jpg" alt=""/> <i className="fa fa-plus"></i> </Link></li>
                            </ul>
                        </div>

                    </aside>
                </div>
            </div>
        </div>

    </div>
  
        </>
    );
}
export default SearchResult;