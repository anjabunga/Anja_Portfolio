import React from 'react';
import workScribble from "../../assets/images/custom/work-scribble.svg";
import { projectsData } from '../../utlits/fackData/projectData';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="projects-area" id="portfolio">
                <div className="custom-icon">
                    <img src={workScribble} alt="custom" />
                </div>
                <div className="container-fluid">
                    <div className="row g-4 portfolio-grid">
                        {projectsData.map(({ id, size, src, title, description }) => (
                            <div 
                                key={id} 
                                className={`${size === "large" ? "col-md-6 col-xl-6" : "col-md-6 col-xl-4"} portfolio-item category-${id}`}
                            >
                                <div className="portfolio-box position-relative overflow-hidden">
                                    {src.endsWith('.mp4') ? (
                                        <video width="100%" height="auto" autoPlay loop muted playsInline>
                                            <source src={src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img src={src} alt={title} className="portfolio-image" />
                                    )}
                                    <div className="portfolio-overlay">
                                        <h2 className="overlay-title">{title}</h2>
                                        <p className="overlay-description">{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Styling tambahan */}
            <style jsx>{`
                .portfolio-box {
                    position: relative;
                    cursor: pointer;
                }
                .portfolio-image,
                video {
                    width: 100%;
                    height: auto;
                    transition: transform 0.3s ease;
                }
                .portfolio-box:hover .portfolio-image,
                .portfolio-box:hover video {
                    transform: scale(1.05);
                    filter: blur(4px);
                }
                .portfolio-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    padding: 10px;
                    text-align: center;
                }
                .portfolio-box:hover .portfolio-overlay {
                    opacity: 1;
                }
                .overlay-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 5px;
                    color: #fff;
                }
                .overlay-description {
                    font-size: 1rem;
                    color: #ddd;
                    margin: 0;
                }
            `}</style>
        </>
    );
};

export default Portfolio;
