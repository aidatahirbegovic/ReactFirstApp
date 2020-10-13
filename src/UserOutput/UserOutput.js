import React from 'react'

import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p> Username: {props.userName} </p>
            <p>I'll write </p>
        </div>
    )
};

export default userOutput;