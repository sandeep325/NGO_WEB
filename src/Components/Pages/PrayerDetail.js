import React from "react";
import { Link } from "react-router-dom";
const PrayerDetail = () =>{

    return (
        <>
  
  <div class="charity-subheader">
        <span class="black-transparent"></span>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Prayer Detail</h1>
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero</p>
                </div>
            </div>
        </div>
    </div>


    <div class="charity-main-content">

        <div class="charity-main-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="charity-sermon-detail">
                            <figure><img src="extra-images/sermon-detail-img.png" alt=""/></figure>
                            <div class="charity-sermon-detail-text">
                                <h3>Get Help Hand to Save Children</h3>
                                <p>Lorem ipsum dolor sit amet, consectur adips cing elit. Donec a lectus interdu lacus rutrus molestie. Vestibulm eu.</p>
                                <ul class="charity-sermon-detail-option">
                                    <li>
                                        <i class="fa fa-calendar"></i>
                                        <h6>Prayer Date: <span>December 2, 2017</span></h6>
                                    </li>
                                    <li>
                                        <i class="fab fa-leanpub"></i>
                                        <h6>Bible Text: <span>Michel Jorden</span></h6>
                                    </li>
                                    <li>
                                        <i class="far fa-file"></i>
                                        <h6>Prayer Series: <span>Winter Revival</span></h6>
                                    </li>
                                    <li>
                                        <i class="fa fa-map-marker-alt"></i>
                                        <h6>Location: <span>Cairo,Africa</span></h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="charity-sermon-player">
                            <div id="jp_container_16" class="jp-audio" role="application" aria-label="media player">
                                <div class="jp-type-playlist">
                                    <div id="jquery_jplayer_16" class="jp-jplayer"></div>
                                    <div class="jp-gui jp-interface">
                                        <div class="jp-controls">
                                            <span class="jp-previous"><i class="fa fa-step-backward"></i></span>
                                            <span class="jp-play"><i class="fa fa-pause"></i> <i class="fa fa-play"></i></span>
                                            <span class="jp-next"><i class="fa fa-step-forward"></i></span>
                                        </div>
                                        <div class="charity-player-wrap">
                                            
                                                <span class="jp-shuffle"><i class="fa fa-random"></i></span>
                                                <span class="jp-repeat"><i class="fa fa-undo"></i></span>
                                            <div class="jp-duration" role="timer" aria-label="duration">3:00</div>
                                            <div class="jp-progress">
                                                <div class="jp-seek-bar">
                                                    <div class="jp-play-bar"></div>
                                                </div>
                                            </div>
                                            <div class="jp-duration" role="timer" aria-label="duration">3:00</div>
                                        </div>
                                        <div class="jp-volume-controls">
                                            <span class="jp-mute"><i class="fa fa-volume-up"></i> <i class="fa fa-volume-off"></i></span>
                                            <div class="jp-volume-bar">
                                                <div class="jp-volume-bar-value"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="jp-playlist">
                                    <ul>
                                        <li>&nbsp;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="widget_title"><h2>Prayer Discription</h2></div>
                        <div class="charity-rich-editor charity-cause-detail">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis purus nulla, at rhoncus elit non. Ut luct us libero at laore ncus. Praesent fermentum lacus at nulla hendrerit facilisis. Ut ips us, mollis non sollicitu din quis, lacinia a tellus.</p>
                            <p>Phasellus lobortis mattis dolor ac laoreet. Pellentesque feugiat scelerisque libero, et convallis cidunt at. Aen ean inn luctus, felis in, luctus elit. Aenean fringilla consectetur posuere.</p>
                            <blockquote>Curabitur lacus dui, convallis quis arcu vel, sagittis vulputate elit. Nullam ex libero, imp rdiet  lib ndit ac, tempor ac magna. In finibus libero vitae ex tincidunt pharetr.</blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis purus nulla, at rhoncus elit non. Ut luct us libero at laore ncus. Praesent fermentum lacus at nulla hendrerit facilisis. Ut ips us, mollis non sollicitu din quis, lacinia a tellus.</p>
                        </div>
                        <div class="charity-rich-editor">
                            <div class="charity-post-tags">
                              <div class="charity-tags">
                                 <span>Tags:</span>
                                 <a href="#">charity </a>
                                 <a href="#">/ donation</a>
                                 <a href="#"> / needy</a>
                              </div>
                              <div class="charity-blog-social">
                                 <span>Share:</span>
                                 <ul>
                                    <li><a href="https://www.facebook.com/" class="fab fa-facebook"></a></li>
                                    <li><a href="https://www.twitter.com/" class="fab fa-twitter"></a></li>
                                    <li><a href="https://www.linkedin.com/" class="fab fa-linkedin"></a></li>
                                    <li><a href="https://www.youtube.com/" class="fab fa-youtube"></a></li>
                                    <li><a href="https://www.vimeo.com/" class="fab fa-vine"></a></li>
                                 </ul>
                              </div>
                           </div>
                       </div>
                        <div class="widget_title"><h2>Admin Post</h2></div>
                        <div class="charity-admin-post">
                            <figure>
                                <a href="#"><img src="extra-images/admin-post-img.png" alt=""/></a>
                                <figcaption>
                                    <h6><a href="#">Mickey Ror</a></h6>
                                    <span>Founder</span>
                                </figcaption>
                            </figure>
                            <div class="charity-admin-post-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies dolor libero, eu fermentum ante tristique fermentum. Vestibulum maximus ornare facilisis. Etiam id vulp utate dolor. Class aptent taciti sociosqu ad litor.</p>
                                <ul class="charity-admin-social">
                                    <li><a href="https://www.facebook.com/" class="fab fa-facebook"></a></li>
                                    <li><a href="https://www.twitter.com/" class="fab fa-twitter"></a></li>
                                    <li><a href="https://www.linkedin.com/" class="fab fa-linkedin"></a></li>
                                    <li><a href="https://www.youtube.com/" class="fab fa-youtube"></a></li>
                                    <li><a href="https://www.vimeo.com/" class="fab fa-vine"></a></li>
                                </ul>
                            </div>
                        </div>
                       <div class="charity-prenxt-post">
                            <ul>
                                <li class="charity-prev-post">
                                    <figure><a href="404.html"><img src="extra-images/post-img1.png" alt=""/></a></figure>
                                    <div class="charity-prev-artical">
                                        <a href="404.html" class="charity-post-arrow"><i class="fa fa-angle-double-left"></i> Previous Article</a>
                                        <h3><a href="404.html">Duis arcu lectus, interdum quisi sodales gravida neque</a></h3>
                                    </div>
                                </li>
                                <li class="charity-next-post">
                                    <figure><a href="404.html"><img src="extra-images/post-img2.png" alt=""/></a></figure>
                                    <div class="charity-next-artical">
                                        <a href="404.html" class="charity-post-arrow">Previous Article <i class="fa fa-angle-double-right"></i></a>
                                        <h3><a href="404.html">Duis arcu lectus, interdum quisi sodales gravida neque</a></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <aside class="col-md-3">

                        <div class="widget widget_search">
                            <div class="widget_title"><h2>Search Here</h2></div>
                            <form>
                                <input type="text" placeholder="Search Here"/>
                                <input type="submit" value=""/>
                                <i class="fa fa-search"></i>
                            </form>
                        </div>
                        <div class="widget widget_archive">
                            <div class="widget_title"><h2>Calender Archives</h2></div>
                            <ul>
                                <li><a href="404.html">13 August 2017</a></li>
                                <li><a href="404.html">28 September 2017</a></li>
                                <li><a href="404.html">19 May 2017</a></li>
                                <li><a href="404.html">03 March 2017</a></li>
                                <li><a href="404.html">28 February 2017</a></li>
                            </ul>
                        </div>
                        <div class="widget widget_events">
                            <div class="widget_title"><h2>Upcoming Events</h2></div>
                            <ul>
                                <li>
                                    <time datetime="2008-02-14 20:00">22 Aug</time>
                                    <div class="charity-events">
                                       <h6><a href="event-detail.html">Fusce fibus purus cos vulputate</a></h6>
                                       <a href="event-detail.html"><i class="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</a>
                                    </div>
                                </li>
                                <li>
                                    <time datetime="2008-02-14 20:00">13 Sep</time>
                                    <div class="charity-events">
                                       <h6><a href="event-detail.html">Fusce fibus purus cos vulputate</a></h6>
                                       <a href="event-detail.html"><i class="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</a>
                                    </div>
                                </li>
                                <li>
                                    <time datetime="2008-02-14 20:00">07 Dec</time>
                                    <div class="charity-events">
                                       <h6><a href="event-detail.html">Fusce fibus purus cos vulputate</a></h6>
                                       <a href="event-detail.html"><i class="fa fa-map-marker-alt"></i> 1403 Blackwell Street 9976</a>
                                    </div>
                                </li>
                             </ul>
                        </div>
                        <div class="widget widget_gallery">
                            <div class="widget_title"> <h2>Our Gallery</h2> </div>
                            <ul>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-1.jpg"><img src="extra-images/widget-gallery-1.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-2.jpg"><img src="extra-images/widget-gallery-2.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-3.jpg"><img src="extra-images/widget-gallery-3.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-4.jpg"><img src="extra-images/widget-gallery-4.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-5.jpg"><img src="extra-images/widget-gallery-5.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-6.jpg"><img src="extra-images/widget-gallery-6.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-7.jpg"><img src="extra-images/widget-gallery-7.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-8.jpg"><img src="extra-images/widget-gallery-8.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
                                <li><a data-fancybox="gallery" href="extra-images/widget-gallery-6.jpg"><img src="extra-images/widget-gallery-6.jpg" alt=""/> <i class="fa fa-plus"></i> </a></li>
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
export default PrayerDetail;