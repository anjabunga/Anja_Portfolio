import React from 'react';
import CountUp from 'react-countup';

const AboutCount = () => {
    return (
        <section className="single-page-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-lg-12"> 
                        <h2>About Me</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Hi! I'm Anja, also known as Anja Bunga Aditya. Currently pursuing a Bachelor's degree in Computer Science with a specialization in Informatics, focusing on Software Engineering. I am an individual with a passion for problem-solving and a knack for creativity, diving into the world of software development with enthusiasm and dedication.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Beyond the realm of coding and academic life, I have an insatiable curiosity for exploring new horizons—whether it's immersing myself in the field of human resources, jumping into public relations, or finding joy in cooking and traveling.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            The relentless pursuit of knowledge fuels my passion for growth and empowers me to seize every opportunity that comes my way.
                        </p>

                     
                        <div className="row">
                            <Card count={"1"} title={"Years Of Experience"} />
                            <Card count={"23"} endOption={""} title={"Complete Projects"} />
                            <Card count={"3"} title={"Organizations Joined"} />
                            <Card count={"10"} title={"Experiences in Various Roles"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutCount;


const Card = ({ count, title, endOption }) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="hero-counter-area wow fadeInUp delay-0-4s">
                <div className="counter-item counter-text-wrap">
                    <span className="count-text plus">
                        <CountUp end={count} />{endOption}
                    </span>
                    <span className="counter-title">{title}</span>
                </div>
            </div>
        </div>
    );
};
