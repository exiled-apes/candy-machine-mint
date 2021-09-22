import React from 'react'
import "./styles.css"
import Zombie from "../../images/zombie.png";
const Collections = () => {
    return (
        <div className="collection-container" id="collection">
           <h1 className="collection-heading">Collections</h1>
           <div className="collection-images"> 
                <img src={Zombie} className="collection-image" alt="zombie"/>
                <img src={Zombie} className="collection-image" alt="zombie"/>
                <img src={Zombie} className="collection-image" alt="zombie"/>
                <img src={Zombie} className="collection-image" alt="zombie"/>
                <img src={Zombie} className="collection-image" alt="zombie"/>
           </div>
           <p className="collection-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut duis neque ullamcorper faucibus erat ullamcorper nulla diam. </p>
        </div>
    )
}

export default Collections
