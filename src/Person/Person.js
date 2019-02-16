import React from 'react';
import "./Person.css";
import AMY from "./images/amy.jpg";
import CHARLES from "./images/charles.jpg";
import GINA from "./images/gina.jpg";
import HOLT from "./images/holt.jpg";
import JAKE from "./images/jake.jpg";
import ROSA from "./images/rosa.jpg";
import TERRY from "./images/terry.jpg";

const person = {
    "AMY": AMY,
    "CHARLES": CHARLES,
    "GINA": GINA,
    "HOLT": HOLT,
    "JAKE": JAKE,
    "ROSA": ROSA,
    "TERRY": TERRY
}

const Reward = (props) => (

        <div>
            <img 
                className="personImg"
                src={person[props.targetName]}
                alt={props.targetName}
            />
        </div>
);

export default Reward;