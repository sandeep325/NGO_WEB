import React from "react";
import { Link } from "react-router-dom";
const EventDetail = () =>{

    return (
        <>
<div className="charity-subheader">
        <span className="black-transparent"></span>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Event Detail</h1>
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>
                </div>
            </div>
        </div>
    </div>


    <div className="charity-main-content">

        <div className="charity-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 bottom-spacer">

                        <figure className="charity-event-thumb">
                            <img src="extra-images/event-detail-img.png" alt=""/>
                        </figure>


                        <div className="charity-event-rich-editor">
                            <h3>Children’s National: Helping Kids Grow Up Stronger</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus felis ut ullamcorper condimentum. Ut imperdiet lobortis ex, vitae tempor dolor viverra quis. Aliquam sodales eu leo id molestie.</p>
                        </div>
                        <ul className="charity-event-option-two">
                            <li>
                                <i className="fa fa-calendar"></i>
                                <h6>Event Sechudule:</h6>
                                <p>Thursday, February 18, 2016 <span>To</span> Friday, April 12, 2016</p>
                            </li>
                            <li>
                                <i className="fa fa-map-marker-alt"></i>
                                <h6>Location:</h6>
                                <p>7600 Green Park City, Londan</p>
                            </li>
                            <li>
                                <i className="fa fa-user"></i>
                                <h6>Event Speaker:</h6>
                                <p>John M.Watson</p>
                            </li>
                        </ul>
                        <div className="charity-countdown">
                            <span className="countdown-transparent"></span>
                            <div id="charity-countdown"></div>
                            <Link to="404.html" className="charity-join-btn">I Am Joining (12)</Link>
                        </div>
                        <div className="charity-event-rich-editor">
                            <div className="widget_title"><h2>Event Discription</h2></div>
                            <p>Nulla molestie leo non arcu porta, in dictum dui rutrum. Cras ipsum lectus, ullamcorper vel lacus et, condimentum rhoncus felis. Sed vulputate augue id malesuada maximus. Phasellus et justo elit. In ac tristique massa. Duis max imus porttitor aliquam. Maecenas eget neque urna.</p>
                            <blockquote>Curabitur lacus dui, convallis quis arcu vel, sagittis vulputate elit. Nullam ex libero, imp rdiet  lib ndit ac, tempor ac magna. In finibus libero vitae ex tincidunt pharetr.</blockquote>
                            <p>Mauris rutrum rutrum tincidunt. Etiam mauris dui, aliquet imperdiet rutrum in, interdum in dui. Cum sociis natoq ue penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et nunc nec massa tincidunt porta Maecenas finibus elementum orci ac consectetur. Phasellus scelerisque dapibus nibh,</p>
                        </div>
                        <div className="widget_title"><h2>Event Gallery</h2></div>
                        <div className="charity-event-gallery">
                            <ul>
                                <li><Link data-fancybox="gallery" to="extra-images/event-gallery-pic1.png" className="fancybox"><img src="extra-images/event-gallery-pic1.png" alt=""/><i className="icon-add2"></i></Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/event-gallery-pic2.png" className="fancybox"><img src="extra-images/event-gallery-pic2.png" alt=""/><i className="icon-add2"></i></Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/event-gallery-pic3.png" className="fancybox"><img src="extra-images/event-gallery-pic3.png" alt=""/><i className="icon-add2"></i></Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/event-gallery-pic4.png" className="fancybox"><img src="extra-images/event-gallery-pic4.png" alt=""/><i className="icon-add2"></i></Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/event-gallery-pic5.png" className="fancybox"><img src="extra-images/event-gallery-pic5.png" alt=""/><i className="icon-add2"></i></Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/event-gallery-pic6.png" className="fancybox"><img src="extra-images/event-gallery-pic6.png" alt=""/><i className="icon-add2"></i></Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/event-gallery-pic7.png" className="fancybox"><img src="extra-images/event-gallery-pic7.png" alt=""/><i className="icon-add2"></i></Link></li>
                                <li><Link data-fancybox="gallery" to="extra-images/event-gallery-pic8.png" className="fancybox"><img src="extra-images/event-gallery-pic8.png" alt=""/><i className="icon-add2"></i></Link></li>
                            </ul>
                        </div>
                        <div className="charity-event-map">
                            <div className="widget_title"><h2>Event Location</h2></div>
                            <div id="map"></div>
                        </div>



                        <div className="charity-prenxt-post">
                            <ul>
                                <li className="charity-prev-post">
                                    <figure>
                                        <Link to="404.html"><img src="extra-images/post-img1.png" alt=""/></Link>
                                    </figure>
                                    <div className="charity-prev-artical">
                                        <Link to="404.html" className="charity-post-arrow"><i className="fa fa-angle-double-left"></i> Previous Article</Link>
                                        <h3><Link to="404.html">Duis arcu lectus, interdum quisi sodales</Link></h3>
                                    </div>
                                </li>
                                <li className="charity-next-post">
                                    <figure>
                                        <Link to="404.html"><img src="extra-images/post-img2.png" alt=""/></Link>
                                    </figure>
                                    <div className="charity-next-artical">
                                        <Link to="404.html" className="charity-post-arrow">Next Article <i className="fa fa-angle-double-right"></i></Link>
                                        <h3><Link to="404.html">Duis arcu lectus, interdum quisi sodales</Link></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="charity-post-tags">
                            <div className="charity-tags">
                                <span>Tags:</span>
                                <Link to="404.html">charity </Link>
                                <Link to="404.html">/ donation</Link>
                                <Link to="404.html"> / needy</Link>
                            </div>
                            <div className="charity-blog-social">
                                <span>Share:</span>
                                <ul>
                                    <li>
                                        <Link to="https://www.facebook.com/" className="fab fa-facebook"></Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.twitter.com/" className="fab fa-twitter"></Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="fab fa-linkedin"></Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/" className="fab fa-youtube"></Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.vimeo.com/" className="fab fa-vimeo"></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <aside className="col-md-3">
                        
                        <div className="widget widget_search">
                            <div className="widget_title"><h2>Search Here</h2></div>
                            <form>
                                <input type="text" placeholder="Search Here"/>
                                <input type="submit" value=""/>
                                <i className="fa fa-search"></i>
                            </form>
                        </div>
                        <div className="widget widget_calendar">
                            <div className="widget_title"><h2>Event Calender</h2></div>
                            <table>
                                <caption>January 2017</caption>
                                <thead>
                                    <tr>
                                        <th title="Monday">M</th>
                                        <th title="Tuesday">T</th>
                                        <th title="Wednesday">W</th>
                                        <th title="Thursday">T</th>
                                        <th title="Friday">F</th>
                                        <th title="Saturday">S</th>
                                        <th title="Sunday">S</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="5"></td><td id="today">1</td><td>2</td>
                                    </tr>
                                    <tr>
                                        <td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
                                    </tr>
                                    <tr>
                                        <td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                                    </tr>
                                    <tr>
                                        <td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td>
                                    </tr>
                                    <tr>
                                        <td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td>
                                    </tr>
                                    <tr>
                                        <td>31</td><td colspan="6"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
export default EventDetail;