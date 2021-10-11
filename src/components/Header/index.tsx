import React from "react";
import ZGirl from "../../images/Zombie_Site.png";
import "./styles.css";
interface Props {
    children?: React.ReactChild
}
const Header:React.FC<Props> = ({children}) => {
  return (
    <div className="header">
      <div className="header__content">
        The ZGirls are an army of 10,000 uniquely generated zombie girls that exist forever in the Solana blockchain.
Each one is randomly generated with over 100 hand-drawn features, and each description is uniquely generated with over 4600 girl first name,1000 last name and 550 hobbies and interests.
      </div>
      <br />
      <br />
      <br />
      {children}
      <img src={ZGirl} alt="zombie girl" className="z-girl"/>
      <img src={ZGirl} alt="zombie girl" className="z-girl-two"/>
    </div>
  );
};

export default Header;
