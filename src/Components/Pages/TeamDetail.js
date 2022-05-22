import React from "react";
import { Link } from "react-router-dom";

const TeamDetail  = () =>{

    return (
        <>
       
       <div className="charity-subheader">
        <span className="black-transparent"></span>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Our Partners</h1>
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>
                </div>
            </div>
        </div>
    </div>

    <div className="charity-main-content">

        <div className="charity-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="charity-team-warp">
                            <figure><img src="extra-images/team-detail-img.png" alt=""/></figure>
                            <h3>Julai Martyn</h3>
                            <span>Co-Director</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus felis ut ullamcorper condime ntum Ut imperdiet lobortis et mollis neque placerat non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            <div className="charity-team-contact">
                                <ul className="chaity-contact-info">
                                    <li>
                                        <h6>Phone:</h6>
                                        <span>+123 45 678</span>
                                    </li>
                                    <li>
                                        <h6>Email:</h6>
                                        <Link to="mailto:name@email.com">info@example.com</Link> 
                                    </li>
                                </ul>
                                <div className="charity-blog-social">
                                 <ul>
                                    <li><Link to="https://www.facebook.com/" className="fab fa-facebook"></Link> </li>
                                    <li><Link to="https://twitter.com/login" className="fab fa-twitter"></Link> </li>
                                    <li><Link to="https://www.linkedin.com/uas/login" className="fab fa-linkedin"></Link> </li>
                                    <li><Link to="https://www.youtube.com/" className="fab fa-youtube"></Link> </li>
                                    <li><Link to="https://vine.co/" className="fab fa-vine"></Link> </li>
                                 </ul>
                              </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus felis ut ullamcorper condimentu m. Ut imperdiet lobortis ex, vitae tempor dolor viverra quis. Aliquam sodales eu leo id molestie. Maecenasu llamcorper malesuada arcu, in lobortis mauris feugiat sed. Duis placerat maximus felis, et mollis neque pl acerat non. </p>
                            <blockquote>Curabitur lacus dui, convallis quis arcu vel, sagittis vulputate elit. Nullam ex libero, imp rdiet  lib ndit ac, tempor ac magna. In finibus libero vitae ex tincidunt pharetr.</blockquote>
                            <p>Nulla molestie leo non arcu porta, in dictum dui rutrum. Cras ipsum lectus, ullamcorper vel lacus et, condim entum rhoncus felis. Sed vulputate augue id malesuada maximus.</p>
                        </div>
                        <div className="charity-team-timeline">
                          <div className="widget_title"><h2>We Need Your Help</h2></div>
                          <ul>
                             <li>
                                <div className="charity-image">
                                   <i className="icon-users-group"></i>
                                   <span></span>
                                </div>
                                <div className="charity-team-timeline-text">
                                   <h6>We want to help as many as we can</h6>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus felis ut ullamc entum. Ut imperdiet lobortis ex.</p>
                                </div>
                             </li>
                             <li>
                                <div className="charity-image">
                                   <i className="icon-donation"></i>
                                   <span></span>
                                </div>
                                <div className="charity-team-timeline-text">
                                   <h6>We want to help as many as we can</h6>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus felis ut ullamc entum. Ut imperdiet lobortis ex.</p>
                                </div>
                             </li>
                             <li>
                                <div className="charity-image">
                                   <i className="icon-books-stack-of-three"></i>
                                   <span></span>
                                </div>
                                <div className="charity-team-timeline-text">
                                   <h6>We want to help as many as we can</h6>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus felis ut ullamc entum. Ut imperdiet lobortis ex.</p>
                                </div>
                             </li>
                             <li>
                                <div className="charity-image">
                                   <i className="icon-heart"></i>
                                   <span></span>
                                </div>
                                <div className="charity-team-timeline-text">
                                   <h6>We want to help as many as we can</h6>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus felis ut ullamc entum. Ut imperdiet lobortis ex.</p>
                                </div>
                             </li>
                          </ul>
                        </div>
                        <div className="widget_title"><h2>Become a Volunteer</h2></div>
                        <div className="charity-volunteer-form">
                            <form>
                                <ul>
                                    <li>
                                        <label>Name:</label>
                                        <input type="text" value="Enter name*" onblur="if(this.value == '') { this.value ='Enter name*'; }" onfocus="if(this.value =='Enter name*') { this.value = ''; }"/></li>
                                    <li>
                                        <label>Email:</label>
                                        <input type="text" value="Enter email*" onblur="if(this.value == '') { this.value ='Enter email*'; }" onfocus="if(this.value =='Enter email*') { this.value = ''; }"/></li>
                                    <li className="charity-select-form">
                                        <label>Country:</label>
                                        <div className="charity-select-two">
                                            <select>
                                                <option value="">Enter country*</option>
                                                <option value="pakistan">counter name</option>
                                                <option value="india">counter name</option>
                                                <option value="usa">counter name</option>
                                                <option value="student">counter name</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li className="charity-select-form">
                                        <label>State / Region:</label>
                                        <div className="charity-select-two">
                                            <select>
                                                <option value="">Enter State*</option>
                                                <option value="pakistan">state name</option>
                                                <option value="india">state name</option>
                                                <option value="usa">state name</option>
                                                <option value="student">state name</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li className="charity-select-form">
                                        <label>City:</label>
                                        <div className="charity-select-two">
                                            <select>
                                                <option value="">Enter city*</option>
                                                <option value="pakistan">city name</option>
                                                <option value="india">city name</option>
                                                <option value="usa">city name</option>
                                                <option value="student">city name</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li className="chrity-full-form">
                                        <label>Address:</label>
                                        <input type="text" value="Enter address line*" onblur="if(this.value == '') { this.value ='Enter address line*'; }" onfocus="if(this.value =='Enter address line*') { this.value = ''; }"/></li>
                                    <li>
                                        <label>Zip / Postal Code:</label>
                                        <input type="text" value="Enter code*" onblur="if(this.value == '') { this.value ='Enter code*'; }" onfocus="if(this.value =='Enter code*') { this.value = ''; }"/></li>
                                    <li>
                                        <label>Phone:</label>
                                        <input type="text" value="Enter number*" onblur="if(this.value == '') { this.value ='Enter number*'; }" onfocus="if(this.value =='Enter number*') { this.value = ''; }"/></li>
                                    <li className="chrity-full-form">
                                        <label>Describe Your Self:</label>
                                        <textarea placeholder="Type here*" ></textarea></li>
                                    <li><input type="submit" value="Send Inquiry"/></li>
                                </ul>
                            </form>
                        </div>
                        <div className="charity-team-contactus">
                            <ul>
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <h5>Email Us At:</h5>
                                    <Link to="mailto:name@email.com">info@example.com</Link> 
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <h5>Call Us At:</h5>
                                    <span>+(091)61 3146 8728</span>
                                </li>
                            </ul>
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
                        <div className="widget widget_archive">
                            <div className="widget_title"><h2>Calender Archives</h2></div>
                            <ul>
                                <li><Link to="404.html">13 August 2017</Link> </li>
                                <li><Link to="404.html">28 September 2017</Link> </li>
                                <li><Link to="404.html">19 May 2017</Link> </li>
                                <li><Link to="404.html">03 March 2017</Link> </li>
                                <li><Link to="404.html">28 February 2017</Link> </li>
                            </ul>
                        </div>
                        <div className="widget widget_events">
                            <div className="widget_title"><h2>Upcoming Events</h2></div>
                            <ul>
                                <li>
                                    <time datetime="2008-02-14 20:00">22 Aug</time>
                                    <div className="charity-events">
                                       <h6><Link to="event-detail.html">Fusce fibus purus cos vulputate</Link> </h6>
                                       <Link to="event-detail.html"><i className="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</Link> 
                                    </div>
                                </li>
                                <li>
                                    <time datetime="2008-02-14 20:00">13 Sep</time>
                                    <div className="charity-events">
                                       <h6><Link to="event-detail.html">Fusce fibus purus cos vulputate</Link> </h6>
                                       <Link to="event-detail.html"><i className="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</Link> 
                                    </div>
                                </li>
                                <li>
                                    <time datetime="2008-02-14 20:00">07 Dec</time>
                                    <div className="charity-events">
                                       <h6><Link to="event-detail.html">Fusce fibus purus cos vulputate</Link> </h6>
                                       <Link to="event-detail.html"><i className="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</Link> 
                                    </div>
                                </li>
                             </ul>
                        </div>
                        <div className="widget widget_gallery">
                            <div className="widget_title"> <h2>Our Gallery</h2> </div>
                            <ul>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-1.jpg"><img src="extra-images/widget-gallery-1.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-2.jpg"><img src="extra-images/widget-gallery-2.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-3.jpg"><img src="extra-images/widget-gallery-3.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-4.jpg"><img src="extra-images/widget-gallery-4.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-5.jpg"><img src="extra-images/widget-gallery-5.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-6.jpg"><img src="extra-images/widget-gallery-6.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-7.jpg"><img src="extra-images/widget-gallery-7.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-8.jpg"><img src="extra-images/widget-gallery-8.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
                                <li><Link data-fancybox="gallery" to="extra-images/widget-gallery-6.jpg"><img src="extra-images/widget-gallery-6.jpg" alt=""/> <i className="fa fa-plus"></i> </Link> </li>
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
export default TeamDetail;