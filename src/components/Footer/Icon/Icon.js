import React from 'react';
import './icon.css';

const Icon = (props) => <div className="icon" style={{backgroundImage: `url(${props.icon})`}}></div>

export default Icon;