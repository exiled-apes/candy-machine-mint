import React from "react";
import ZGirls from "../../images/zgirls.svg";
import ZGirl from "../../images/zgirl.svg";
import "./styles.css";
interface Props {
    children?: React.ReactChild
}
const Header:React.FC<Props> = ({children}) => {
  return (
    <div className="header">
      <p className="header__content">
        A limited set of 3 333 unique algorithm generated Z Girls artworks has
        over 100 hand-drawn traits which made each of NFT one-of-a-kind. Make
        sure to have it in your digital collection!
      </p>
      {children}
      <img src={ZGirl} alt="zombie girl" className="z-girl"/>
    </div>
  );
};

export default Header;
