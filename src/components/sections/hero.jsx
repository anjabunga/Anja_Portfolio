import React from 'react'
import profile from "../../assets/images/about/anjaformal1.jpg"
import { RiDownloadLine } from '@remixicon/react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="glitch">
                            <img src={profile} alt="About Me" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        
                        <div className="hero-content wow fadeInUp delay-0-2s">
                            <h1>I am a Front-End web developer and tech enthusiast in crafting intuitive experiences on websites.</h1>
                            <h2>Hi, I'm Anja, a frontend web developer specializing in crafting seamless and engaging user interfaces for web applications.</h2>
                            <div className="hero-btns">
                                 <a href="https://drive.google.com/file/d/1xpZIFCUrYc8p0jHslnjMfVGP3J06O-HR/view?usp=sharing" className="theme-btn" target="_blank" rel="noopener noreferrer">
                                     Get a look to my CV <i><RiDownloadLine size={16}/></i>
                                </a>
                            </div>

                        </div>
                     
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero