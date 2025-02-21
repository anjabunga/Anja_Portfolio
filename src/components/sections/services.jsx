import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import React from 'react'

const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                <h2>Core Competencies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Card description={"Building responsive and user-friendly websites and mobile applications using modern frameworks like React, Next.js, and Node.js."} icon={<RiGlobalFill size={55} />} title={"Web & Mobile App Development"} />
                        <Card description={"Transforming ideas into functional prototypes, helping validate product concepts before full-scale development."} icon={<RiQuillPenLine size={55}/>} title={"Software Prototyping"} />
                        <Card description={"Leading and collaborating in student organizations and tech projects, focusing on efficient workflows and achieving project goals."} icon={<RiPantoneFill size={55}/>} title={"Project Management & Team Collaboration"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services

const Card = ({ title, description, icon }) => {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="service-item wow fadeInUp delay-0-2s">
                <div className="content">
                    <i>{icon}</i>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}