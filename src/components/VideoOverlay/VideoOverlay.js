import React from 'react';
import './videoOverlay.css';
import playIcon from './assets/play-circle.svg';
import poster from './assets/poster2.jpg';

const VideoOverlay = (props) => {
    return(
        <div className={`video-overlay ${props.shouldHide ? 'hide' : ''}`} style={{backgroundImage: `url(${poster})`}}>
            <p className="p">This time you will not fail</p>
            <img onClick={props.play} className="play-icon" src={playIcon} alt="Play button"/>
            <p className="p text-2">Let's get started</p>
        </div>
    )
}


export default VideoOverlay;