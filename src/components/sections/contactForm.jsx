import React from 'react';
import { RiBuilding2Line, RiHeadphoneLine, RiMailLine, RiMailOpenLine } from '@remixicon/react';

const ContactForm = () => {
    return (
        <section id="contact" className="contact-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">

                        <div className="col-lg-12">
                            <ul className="extra-skills wow fadeInUp delay-0-2s pb-30">
                                <li><i><RiBuilding2Line size={16} /></i>Jakarta, Indonesia</li>

                                {/* WhatsApp Chat Link */}
                                <li>
                                    <i><RiHeadphoneLine size={16} /></i>
                                    <a href="https://wa.me/6281537460072" target="_blank" rel="noopener noreferrer">
                                        Chat via WhatsApp
                                    </a>
                                </li>

                                {/* Email Link */}
                                <li>
                                    <i><RiMailOpenLine size={16} /></i>
                                    <a href="mailto:bungabunga0603@gmail.com">Email: bungabunga0603@gmail.com</a>
                                </li>
                            </ul>

                    

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
