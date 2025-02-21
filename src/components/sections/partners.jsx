import React from 'react'
import Marquee from "react-fast-marquee";

import partner1 from "../../assets/images/client-logos/image1.png"
import partner2 from "../../assets/images/client-logos/image2.png"
import partner3 from "../../assets/images/client-logos/ksm andro (2).png"
import partner4 from "../../assets/images/client-logos/kui (1).png"
import partner5 from "../../assets/images/client-logos/logomulmed.png"
import partner6 from "../../assets/images/client-logos/gclub.png"

const Partners = () => {
    return (
        <div className="company-design-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Company and Partners I've Been Worked With</h2>
                        <div className="company-list">
                            <div className="scroller">
                                <Marquee >
                                    <div className="scroller__inner">
                                        <img src={partner1} alt="" />
                                        <img src={partner2} alt="" />
                                        <img src={partner3} alt="" />
                                        <img src={partner4} alt="" />
                                        <img src={partner5} alt="" />
                                        <img src={partner6} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners