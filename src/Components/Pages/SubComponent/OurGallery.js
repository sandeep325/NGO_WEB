import React from "react";
import { Link } from "react-router-dom";
const OurGallery = () => {
    return (
        <>

<div className="charity-main-section charity-simple-gallery-full">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            <h2>Our Gallery</h2>
                        </div>
                        <div className="charity-gallery charity-simple-gallery">
                            <ul className="row">
                                <li className="col-md-2 px-0">
                                    <figure><Link href="#"><img src="extra-images/home-gallery-1.jpg" alt=""/></Link>
                                        <figcaption>
                                            <span></span>
                                            <Link data-fancybox="gallery" href="extra-images/home-gallery-1.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-4 px-0">
                                    <figure><Link href="#"><img src="extra-images/home-gallery-5.jpg" alt=""/></Link>
                                        <figcaption>
                                            <span></span>
                                            <Link data-fancybox="gallery" href="extra-images/home-gallery-5.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-2 px-0">
                                    <figure><Link href="#"><img src="extra-images/home-gallery-2.jpg" alt=""/></Link>
                                        <figcaption>
                                            <span></span>
                                            <Link data-fancybox="gallery" href="extra-images/home-gallery-2.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-4 px-0">
                                    <figure><Link href="#"><img src="extra-images/home-gallery-6.jpg" alt=""/></Link>
                                        <figcaption>
                                            <span></span>
                                            <Link data-fancybox="gallery" href="extra-images/home-gallery-6.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-4 px-0">
                                    <figure><Link href="#"><img src="extra-images/home-gallery-7.jpg" alt=""/></Link>
                                        <figcaption>
                                            <span></span>
                                            <Link data-fancybox="gallery" href="extra-images/home-gallery-7.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-2 px-0">
                                    <figure><Link href="#"><img src="extra-images/home-gallery-3.jpg" alt=""/></Link>
                                        <figcaption>
                                            <span></span>
                                            <Link data-fancybox="gallery" href="extra-images/home-gallery-3.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-2 px-0">
                                    <figure><Link href="#"><img src="extra-images/home-gallery-4.jpg" alt=""/></Link>
                                        <figcaption>
                                            <span></span>
                                            <Link data-fancybox="gallery" href="extra-images/home-gallery-4.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="col-md-4 px-0">
                                    <figure><Link href="#"><img src="extra-images/home-gallery-8.jpg" alt=""/></Link>
                                        <figcaption>
                                            <span></span>
                                            <Link data-fancybox="gallery" href="extra-images/home-gallery-8.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </figcaption>
                                    </figure>
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
export default OurGallery;
