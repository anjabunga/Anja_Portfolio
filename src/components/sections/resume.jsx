import React from 'react'

const Resume = () => {
    return (
        <div className="resume-area" id="resume">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                <h2>Education</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="resume-wrapper wow fadeInUp delay-0-2s">
                                <Card year={"2022 - Present"} title={"Faculty of Computer Sciences - Universitas Pembangunan Nasional Veteran Jakarta"} institution={"Informatics"} description={"Concentration: Mobile Developer, Front-End Developer, Back-End Developer, Website Developer"} />
                                <Card year={"2018 - 2021"} title={"SMA Negeri 2 Cimahi"} institution={"Mathematics and Sciences"} description={"Concentration: Mathematics, Sciences"} />
    
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                        <h2>Experience</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="resume-wrapper wow fadeInUp delay-0-2s">
                            <Card year={"Oct 2024 - Mar 2025"} title={"Maxy Academy"} institution={"Front-End Developer"} description={"Concentration: Mobile Developer, Front-End Developer, Back-End Developer, Website Developer"} />
                                <Card year={"Oct 2024 - Jan 2025"} title={"Citilink Indonesia"} institution={"Learning Management System - System Developer Intern"} description={"Concentration: Mobile Developer, Front-End Developer, Back-End Developer, Website Developer"} />
                                <Card year={"Feb 2024 - May 2024"} title={"International Office of UPNVJ"} institution={"Administration and Partnership Intern"} description={"Concentration: Mathematics, Sciences"} />
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume

const Card = ({ year, description, title, institution }) => {
    return (
        <div className="resume-box">
            <span className="resume-date">{year}</span>
            <h5 className="fw-medium">{institution}</h5>
            <span><b>{title}</b></span>
            <p>{description}</p>
        </div>
    )
}