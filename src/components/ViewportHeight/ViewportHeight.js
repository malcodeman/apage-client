import React from 'react';

const ViewportHeight = (props) => {
    return(
        <div style={{minHeight: '100vh'}}>{props.children}</div>
    )
}

export default ViewportHeight;