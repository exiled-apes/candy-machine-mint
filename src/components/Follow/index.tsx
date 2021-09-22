import React from "react";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import "./styles.css";
const Follow = () => {
  return (
    <div>
      <div className="follow-container">
        <h1>Follow Us</h1>
        <div>
          <a href="/">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="copyright">Copyright © ZGirls .art 2021</div>
    </div>
  );
};

export default Follow;
