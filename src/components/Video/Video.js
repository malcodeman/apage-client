import React from 'react';
import './video.css';
import video from './assets/video.mp4';
import VideoOverlay from '../VideoOverlay/VideoOverlay';

class Video extends React.Component{
    state = {
        shouldHide: false
    }
    playVideo = () => {
        this.refs.videoRef.play();
        this.refs.videoRef.controls = true;
        this.setState({shouldHide: true});
        if (this.refs.videoRef.webkitRequestFullScreen) {
            this.refs.videoRef.webkitRequestFullScreen();
        } else if (this.refs.videoRef.mozRequestFullScreen) {
            this.refs.videoRef.mozRequestFullScreen();
        } else if (this.refs.videoRef.msRequestFullscreen) {
            this.refs.videoRef.msRequestFullscreen();
        }
    }
    render(){
        return(
            <React.Fragment>
                <video ref="videoRef" className="video" src={video}></video>
                <VideoOverlay play={this.playVideo} shouldHide={this.state.shouldHide}/>
            </React.Fragment>         
        )
    }
} 

export default Video;