import { RiDownloadLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                  
                    <div className="col-lg-12">
                        <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                            <h2>Reach Me Out To Get More Know About Me</h2>
                            <p>I’m open to internship or part-time opportunities where I can contribute my skills and push creative boundaries. Don’t hesitate to reach out—let’s make something amazing happen! ✨</p>
                            <div className="hero-btns">
                                <Link to="/contact" className="theme-btn call-to-action-button">Let's Talk <i><RiDownloadLine size={16}/></i></Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default CallToAction