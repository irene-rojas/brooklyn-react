import React from 'react';
import AMY from "./images/amy.jpg";
import CHARLES from "./images/charles.jpg";
import GINA from "./images/gina.jpg";
import HOLT from "./images/holt.jpg";
import JAKE from "./images/jake.jpg";
import ROSA from "./images/rosa.jpg";
import TERRY from "./images/terry.jpg";

const imgNames = {
    "Amy": AMY,
    "Charles": CHARLES,
    "Gina": GINA,
    "Holt": HOLT,
    "Jake": JAKE,
    "Rosa": ROSA,
    "Terry": TERRY
}

const Reward = (props) => {

    const name = props.targetName;

    return (
        <div className="rewardImg">
            <img 
                className="rewardPhoto"
                src={imgNames[props.name]}
                alt={props.targetName}
            />
        </div>
    )
};

export default Reward;