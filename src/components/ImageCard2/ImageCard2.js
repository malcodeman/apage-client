import React from 'react';
import './imageCard2.css';
import bg from './assets/bg2.png';

const ImageCard2 = () => {
    return(
        <section className="image-card-2" style={{backgroundImage: `url(${bg})`}}>
            <div className="image-card-2-content">
                <div className="text-container">
                    <h2 className="h2">Fun and science<span className="dash"></span>combined</h2>
                    <p className="p">We combine state of the arts fitness experts and video training with an amazing attention to detail to bring
                        You a new training experience that 
                        You have never seen before to increase 
                        Your chance to succeed in training.</p>
                </div>
            </div>
        </section>
    )
}

export default ImageCard2;