import { RiArrowRightLine } from '@remixicon/react';
import React from 'react';

const Card = ({ src, date, title, tag }) => {
    const driveLink = "https://drive.google.com/drive/folders/1cmOvyO-2Z4HOzx8s4SvnK_GQi-y3j8SL?usp=sharing";

    return (
        <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
                <div className="blog-post-img">
              
                    <a href={driveLink} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt="" />
                    </a>
                    <div className="blog-post-category">
                        <a href={driveLink} target="_blank" rel="noopener noreferrer">{tag}</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="blog-post-caption">
                    <h3>Posted on {date}</h3>
                   
                    <h2>
                        <a className="link-decoration" href={driveLink} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                    </h2>

                    
                    <a 
                        className="theme-btn" 
                        href={driveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View More <i><RiArrowRightLine size={16} /></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
