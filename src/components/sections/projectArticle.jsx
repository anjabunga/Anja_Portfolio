import React, { useState } from 'react'
import work from "../../assets/images/projects/work2.jpg"
import project1 from "../../assets/images/about/anjaformal1.jpg"
import project2 from "../../assets/images/projects/single-project2.jpg"
import project3 from "../../assets/images/projects/single-project3.jpg"
import project4 from "../../assets/images/projects/single-project4.jpg"

const projectsData = [
    {
        id: 1,
        src: project1
    },
    {
        id: 2,
        src: project2
    },
    {
        id: 3,
        src: project3
    },
    {
        id: 4,
        src: project4
    },
]
const ProjectArticle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openPopup = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <div className="single-project-page-design">
                <div className="single-project-image">
                    <img src={work} alt="Main Work" />
                </div>
                <div className="container pt-60 pb-40">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-project-page-left wow fadeInUp delay-0-2s">
                                <div className="single-info">
                                    <p>Year</p>
                                    <h3>2024</h3>
                                </div>
                                <div className="single-info">
                                    <p>Client</p>
                                    <h3>Bento Studio</h3>
                                </div>
                                <div className="single-info">
                                    <p>Services</p>
                                    <h3>Web Design</h3>
                                </div>
                                <div className="single-info">
                                    <p>Project</p>
                                    <h3>Creative</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="single-project-page-right wow fadeInUp delay-0-4s">
                                <h2>Description</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis luctus ligula. Donec gravida consequat magna, non fermentum justo convallis non.</p>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-60">
                        {projectsData.map((project) => (
                            <div className="col-lg-6" key={project.id}>
                                <div onClick={() => openPopup(project)} className="work-popup">
                                    <div className="single-image wow fadeInUp delay-0-2s">
                                        <div className="project-box">
                                            <h4>{project.title}</h4>
                                            <p>Click to view more details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Popup for Project Description */}
            {isOpen && selectedProject && (
                <div className="modal-overlay" onClick={closePopup}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closePopup}>X</button>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                    </div>
                </div>
            )}

            {/* CSS for Modal */}
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }
                .modal-content {
                    background: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    width: 500px;
                    max-width: 90%;
                    text-align: center;
                    position: relative;
                }
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: transparent;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
                }
                .project-box {
                    background: #f7f7f7;
                    padding: 20px;
                    text-align: center;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }
                .project-box:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </>
    );
};

export default ProjectArticle;