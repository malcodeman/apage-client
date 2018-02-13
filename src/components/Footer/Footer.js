import React from 'react';
import './footer.css';
import Form from '../Form/Form';
import Icon from './Icon/Icon';
import TwitterIcon from './assets/twitter.svg';
import InstagramIcon from './assets/instagram.svg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <span className="no-waiting">No more waiting</span>
                <h3 className="h3">Get info about fitnessbody first</h3>
                <Form placeholder="Enter email adress to stay informed" value="Keep me posted"/>
                <p className="p get-updates">Get FitnessBody updates on the next releases, plus other informations about future development.</p>
                <p className="p share">Share this page</p>
                <div className="icons">
                    <Icon icon={TwitterIcon}/>
                    <Icon icon={InstagramIcon}/>            
                </div>
                <div className="legal">
                    <span className="dash"></span>
                    © 2018 FitnessBody®, Inc.
                    <span className="dash"></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;