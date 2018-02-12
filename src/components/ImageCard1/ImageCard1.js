import React from 'react';
import './imageCard1.css';

const ImageCard1 = () => {
    return(
        <section className="image-card-1">
            <div className="image-card-1-content">
                <div className="text-container">
                    <span className="number">001</span>
                    <p className="p">FITNESSBody <span className="dash"></span> Progression Training</p>
                </div>
                <div className="vertical-line">
                    <span className="line"></span>
                    <span className="text">ios & android app coming soon</span>
                </div>
            </div>
        </section>
    )
}

export default ImageCard1;