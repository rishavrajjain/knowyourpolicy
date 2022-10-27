import React from 'react'

function HowItWorks() {
    return (
        <section id="how-it-works" className="about section-bg">
            <div className="container">

                <div className="row">
                    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                    <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                        <div className="content d-flex flex-column justify-content-center">
                            <h3 data-aos="fade-in" data-aos-delay="100">How it works ?</h3>
                            <p data-aos="fade-in">

                            </p>
                            <div className="row">
                                <div className="col-md-6 icon-box" data-aos="fade-up">
                                    <i className="fa fa-cart-arrow-down"></i>
                                    <h4><a href="#">Signup</a></h4>
                                    <p>Signup or login on our website.</p>
                                </div>
                                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <i className="fa fa-user-plus"></i>
                                    <h4><a href="#">Policy</a></h4>
                                    <p>Paste any complex policy or text that you need summary of and want to analyse</p>
                                </div>
                                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <i className="fa fa-share-square-o"></i>
                                    <h4><a href="#">View and Share</a></h4>
                                    <p>View and share the results</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HowItWorks;