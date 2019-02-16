import React from 'react';
import AMY from "./images/amy.jpg";
import CHARLES from "./images/charles.jpg";
import GINA from "./images/gina.jpg";
import HOLT from "./images/holt.jpg";
import JAKE from "./images/jake.jpg";
import ROSA from "./images/rosa.jpg";
import TERRY from "./images/terry.jpg";


const Reward = (props) => (

    <div className="rewardImg">
        <img 
            className="rewardPhoto"
            src={[props.targetName]}
            alt={props.targetName}
        />
    </div>

);

export default Reward;