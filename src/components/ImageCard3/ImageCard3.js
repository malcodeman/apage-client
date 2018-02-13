import React from 'react';
import './imageCard3.css';
import bg from './assets/bg3.png';

const ImageCard3 = () => {
    return(
        <section className="image-card-3" style={{backgroundImage: `url(${bg})`}}>
            <div className="image-card-3-content">
                <div className="text-container">
                        <span className="number">002</span>
                        <p className="p">Cryptocurrency
                            <span className="dash"></span>Soon trade with <span className="gold"><strong>FITNESSBODY</strong> Coin</span></p>
                    </div>
                </div>
        </section>
    )
}

export default ImageCard3;