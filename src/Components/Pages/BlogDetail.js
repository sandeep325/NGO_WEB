import React from "react";
import { Link } from "react-router-dom";

const BlogDetail  = () =>{

    return (
        <>
      
      <div class="charity-subheader">
        <span class="black-transparent"></span>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Blog Detail</h1>
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
                        <div class="charity-rich-editor">
                            <figure class="charity-postthumb"><img src="extra-images/blog-detail-img.png" alt=""/></figure>
                            <h2>Give Shelters To Needy People Of Africa</h2>
                            <div class="charity-blog-options">
                                <ul>
                                    <li>
                                        <time datetime="2008-02-14 20:00">/ 21 December 2017 </time>
                                    </li>
                                    <li><a href="404.html">/ 23 comments</a></li>
                                </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis purus nulla, at rhoncus elit non. Ut luct us libero at laore ncus. Praesent fermentum lacus at nulla hendrerit facilisis. Ut ips us, mollis non sollicitu din quis, lacinia a tellus.</p>
                            <p>Phasellus lobortis mattis dolor ac laoreet. Pellentesque feugiat scelerisque libero, et convallis cidunt at. Aen ean inn luctus, felis in, luctus elit. Aenean fringilla consectetur posuere.</p>
                            <blockquote>Curabitur lacus dui, convallis quis arcu vel, sagittis vulputate elit. Nullam ex libero, imp rdiet lib ndit ac, tempor ac magna. In finibus libero vitae ex tincidunt pharetr.</blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis purus nulla, at rhoncus elit non. Ut luct us libero at laore ncus. Praesent fermentum lacus at nulla hendrerit facilisis. Ut ips us, mollis non sollicitu din quis, lacinia a tellus.</p>
                            <div class="charity-post-tags">
                                <div class="charity-tags">
                                    <span>Tags:</span>
                                    <a href="404.html">charity </a>
                                    <a href="404.html">/ donation</a>
                                    <a href="404.html"> / needy</a>
                                </div>
                                <div class="charity-blog-social">
                                    <span>Share:</span>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" class="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" class="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" class="fab fa-linkedin"></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" class="fab fa-youtube"></a>
                                        </li>
                                        <li>
                                            <a href="https://www.vimeo.com/" class="fab fa-vimeo"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="charity-prenxt-post">
                            <ul>
                                <li class="charity-prev-post">
                                    <figure>
                                        <a href="404.html"><img src="extra-images/post-img1.png" alt=""/></a>
                                    </figure>
                                    <div class="charity-prev-artical">
                                        <a href="404.html" class="charity-post-arrow"><i class="fa fa-angle-double-left"></i> Previous Article</a>
                                        <h3><a href="404.html">Duis arcu lectus, interdum quisi sodales</a></h3>
                                    </div>
                                </li>
                                <li class="charity-next-post">
                                    <figure>
                                        <a href="404.html"><img src="extra-images/post-img2.png" alt=""/></a>
                                    </figure>
                                    <div class="charity-next-artical">
                                        <a href="404.html" class="charity-post-arrow">Next Article <i class="fa fa-angle-double-right"></i></a>
                                        <h3><a href="404.html">Duis arcu lectus, interdum quisi sodales</a></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="widget_title"><h2>Admin Post</h2></div>
                        <div class="charity-admin-post">
                            <figure>
                                <a href="404.html"><img src="extra-images/admin-post-img.png" alt=""/></a>
                                <figcaption>
                                    <h6><a href="404.html">Mickey Ror</a></h6>
                                    <span>Founder</span>
                                </figcaption>
                            </figure>
                            <div class="charity-admin-post-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies dolor libero, eu fermentum ante tristique fermentum. Vestibulum maximus ornare facilisis. Etiam id vulp utate dolor. Class aptent taciti sociosqu ad litor.</p>
                                <ul class="charity-admin-social">
                                    <li>
                                        <a href="https://www.facebook.com/" class="fab fa-facebook"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" class="fab fa-twitter"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" class="fab fa-linkedin"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" class="fab fa-youtube"></a>
                                    </li>
                                    <li>
                                        <a href="https://www.vimeo.com/" class="fab fa-vine"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="widget_title"><h2>Comments</h2></div>
                        <div class="comments-area">
                            <ul class="comment-list">
                                <li>
                                    <div class="thumb-list">
                                        <figure><img alt="" src="extra-images/comment-img1.png"/></figure>
                                        <div class="text-holder">
                                            <h6>Cynthia Sachmidt</h6>
                                            <time class="post-date" datetime="2008-02-14 20:00">June 16, 2017 at 2:10 pm</time>
                                            <a class="comment-reply-link" href="#"><i class="fa fa-share"></i> Reply</a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel consequat tellus augue tortor, vitae volutpat ante. Proin tellus augue, dignissim vel lorem ut, vulpu sit amet, co tate laoreet enim.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="thumb-list">
                                        <figure><img alt="" src="extra-images/comment-img2.png"/></figure>
                                        <div class="text-holder">
                                            <h6>George Baily</h6>
                                            <time class="post-date" datetime="2008-02-14 20:00">June 16, 2017 at 2:10 pm</time>
                                            <a class="comment-reply-link" href="#"><i class="fa fa-share"></i> Reply</a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel consequat tellus augue tortor, vitae volutpat ante. Proin tellus augue, dignissim vel lorem ut, vulpu sit amet, co tate laoreet enim.</p>
                                        </div>
                                    </div>
                                    <ul class="children">
                                        <li>
                                            <div class="thumb-list">
                                                <figure><img alt="" src="extra-images/comment-img3.png"/></figure>
                                                <div class="text-holder">
                                                    <h6>Sareena Marchant</h6>
                                                    <time class="post-date" datetime="2008-02-14 20:00">June 16, 2017 at 2:10 pm</time>
                                                    <a class="comment-reply-link" href="#"><i class="fa fa-share"></i> Reply</a>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel consequat tellus augue tortor, vitae volutpat ante. Proin tellus augue, dignissim vel lorem ut, vulpu sit amet, co tate laoreet enim.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="widget_title"><h2>Leave a Comment</h2></div>
                        <div class="comment-respond">
                            <form>
                                <p>
                                    <label>Name:</label>
                                    <input type="text" value="Enter name*" onblur="if(this.value == '') { this.value ='Enter name*'; }" onfocus="if(this.value =='Enter name*') { this.value = ''; }"/>
                                </p>
                                <p>
                                    <label>Email:</label>
                                    <input type="text" value="Enter email*" onblur="if(this.value == '') { this.value ='Enter email*'; }" onfocus="if(this.value =='Enter email*') { this.value = ''; }"/>
                                </p>
                                <p class="charity-respond-full-form">
                                    <label>Comment:</label>
                                    <textarea name="comment" placeholder="Type your comment*" class="commenttextarea"></textarea>
                                </p>
                                <p class="form-submit">
                                    <input name="submit" class="submit" value="Submit" type="submit"/>
                                    <input name="comment_post_ID" value="99" id="comment_post_ID" type="hidden"/>
                                </p>
                            </form>
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
export default BlogDetail;