import React from "react";
import { Link } from "react-router-dom";
const CausesList = () =>{

    return (
        <>
   <div className="charity-subheader">
        <span className="black-transparent"></span>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Coaching</h1>
                    <p>  Write Coaching subtittle  or short discription here.</p>
                </div>
            </div>
        </div>
    </div>


    <div className="charity-main-section charity-simple-gallery-full">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charity-fancy-title">
                            {/* <h2>Our Coaching</h2> */}
                        </div>

{/* coacing img and text box here  */}
                <div class="row">
                    <div class="col-md-12">
                        {/* <div class="charity-fancy-title">
                            <p>Lorem ipsum dolor sit amet consectetur adipng elit Etiam dui velit posuere a voluat sitamet egestas ac ante.</p>
                        </div> */}
                    </div>
                    <div class="col-md-6">
                        <figure class="short-text-thumb"><img src="gallery_imgs/Gallery_img12.jpg" alt="" /></figure>
                    </div>
                    <div class="col-md-6 charity-short-text">
                        <h2>We are served since 35 years to helple people.</h2>
                        
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
                        <ul>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                            <li>Lorem ipsum dolor amet, onsectetde cons ectetur nulla.Lorem ipsum dolor amet, onsectetde cons ectetur nulla.</li>
                        </ul>
                        {/* <Link to="#" class="charity-more-btn"><i class="fas fa-arrow-right"></i> Read More</Link>  */}
                    </div>
                
                </div>


                    </div>
                </div>
            </div>
        </div>
  
        </>
    );
}
export default CausesList;