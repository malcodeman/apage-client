import React from 'react';
import './video.css';
import video from './assets/video.mp4';
import poster from './assets/poster2.jpg';

const Video = () => <video className="video" src={video} poster={poster}></video>

export default Video;