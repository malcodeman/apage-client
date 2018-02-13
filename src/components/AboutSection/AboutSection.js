import React from 'react';
import './aboutSection.css';

const AboutSection = () => {
    return(
        <section className="about-section">
            <div className="about-section-content">
                <div className="text-container">
                    <div className="left-side">
                        <p className="p">
                        <span className="gold">Ermin Bicakcic</span>
                        <span className="dash">                        
                        </span>
                        <br/>
                        star athlete</p>
                    </div>
                    <div className="right-side">
                        <h2 className="h2">About fitnessbody coin</h2>
                        <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla sit amet feugiat augue, quis pellentesque augue.
                            Cras a libero erat. Nulla vel pellentesque tortor.
                            Etiam lobortis nisi sit amet imperdiet tincidunt.
                            Donec fermentum urna sit amet massa ultricies, eget cursus sapien iaculis.</p>
                        <p className="p">Donec cursus pretium nibh, eget pharetra lacus fringilla vel.
                            Integer vitae quam vel dolor blandit posuere id id tortor.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;