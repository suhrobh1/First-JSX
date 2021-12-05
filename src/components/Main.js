import React from 'react';
import Subcontents from './Subcontents';


const Main = (props) => {

    return (
        <div className = "main">
            Things I need to do:
            <Subcontents/>
        </div>
    )
};

export default Main;