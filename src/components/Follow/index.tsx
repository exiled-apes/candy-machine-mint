import React from "react";
import Twitter from "../../images/twitter.svg";
import Discord from "../../images/discord.svg";

import "./styles.css";
const Follow = () => {
  return (
    <div>
      <div className="follow-container" id="social">
        <h1>Join ZGirls Community </h1>
        <div>
          <a href="https://discord.gg/QxFUPjXKgX">
            <img src={Discord} alt="discord" />
          </a>
          <a href="https://twitter.com/ZGirlsNFT">
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="copyright">Copyright © ZGirls.art 2021</div>
    </div>
  );
};

export default Follow;
