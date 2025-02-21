import React from 'react';
import profile from "../../../assets/images/about/bungalaptop.jpg";

const Summary = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                       
                        <div className="col-lg-5">
                            <div className="about-image-part wow fadeInUp delay-0-3s">
                            <img 
                                src={profile} alt="About Me" className="img-fluid rounded" style={{ border: '6px solid #FFE700', padding: '5px' }} />
                            </div>
                        </div>
                       

                       
                        <div className="col-lg-7">
                            <div className="about-content-part wow fadeInUp delay-0-5s">
                                <h2>
                                Focus on <span>Software Engineering</span> dedicated to <span>transforming ideas</span> into impactful and user-centric applications.
                                </h2>
                                <p>
                                    Anja Bunga’s educational journey has equipped her with a solid foundation in Mathematics and Natural Science, leading to the development of strong analytical and problem-solving skills that have been instrumental in her current studies.
                                </p>
                                <p>
                                    She is now focused on Informatics, where she is delving into the intricacies of computer science and information technology.
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
