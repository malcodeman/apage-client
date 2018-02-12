import React from 'react';
import './form.css';

const Form = () => {
    return(
        <form className="form">
            <input className="email" type="email" placeholder="ENTER EMAIL ADRESS TO STAY INFORMED"/>
            <input className="submit" type="submit" value="LAUNCHING AT SUMMER 2018"/>
        </form>
    )
}

export default Form;