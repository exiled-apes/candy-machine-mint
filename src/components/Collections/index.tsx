import React from 'react'
import "./styles.css"
import Zombie from "../../images/zombie.png";
import Zombie1 from "../../images/zombie (1).png";
import Zombie2 from "../../images/zombie (2).png";
import Zombie3 from "../../images/zombie (3).png";
import Zombie4 from "../../images/zombie (6).png";
import Zombie5 from "../../images/zombie (5).png";

const Collections = () => {
    return (
        <div className="collection-container" id="collection">
           <h1 className="collection-heading">Collections</h1>
           <div className="collection-images"> 
                <img src={Zombie1} className="collection-image" alt="zombie"/>
                <img src={Zombie2} className="collection-image" alt="zombie"/>
                <img src={Zombie3} className="collection-image" alt="zombie"/>
                <img src={Zombie} className="collection-image" alt="zombie"/>
                <img src={Zombie5} className="collection-image" alt="zombie"/>
           </div>
           <p className="collection-detail">10 000 collectible Zombie Girl with proof of ownership stored on the Solana blockchain. </p>
        </div>
    )
}

export default Collections
