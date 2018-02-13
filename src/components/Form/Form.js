import React from 'react';
import './form.css';

const Form = (props) => {
    return(
        <form className="form">
            <input className="email" type="email" placeholder={props.placeholder}/>
            <input className="submit" type="submit" value={props.value}/>
        </form>
    )
}

export default Form;