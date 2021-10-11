import React from "react";
import "./styles.css";
import Path from "../../images/path.svg";
const RoadMap = () => {
  return (
    <div className="roadmap-container" id="roadmap">
      <div>
        <h1 className="roadmap__heading">RoadMap</h1>
        <div>
          <div className="roadmap__step">
            <div className="roadmap__step-number">
              1
              <img src={Path} className="path" alt="path" />
            </div>
            <div className="roadmap__step-detail">
              <h4>Launch of ZGirls (Q4 2021):</h4>
              <p>
              An army of zombie girls is ready to be released on Soalana.
              The listing of the project on the big platforms of Solanart, SolSea, DigitalEyes, Magic Eden
              </p>
            </div>
          </div>
          <div className="roadmap__step">
            <div className="roadmap__step-number roadmap__step-number-next">
              2
              <img src={Path} className="path" alt="path" />
            </div>
            <div className="roadmap__step-detail roadmap__step-detail-next">
              <h4>Launch of Zcity (Q4 2021):</h4>
              <p>
              A marketplace that will bring together all the zombie-themed NFTs. 
               (you are creator, collector of Zombie NFT or you just want to sell your zombie in the auction Zcity is for you)
              </p>
            </div>
          </div>

          <div className="roadmap__step">
            <div className="roadmap__step-number">
              3
              <img src={Path} className="path" alt="path" />
            </div>
            <div className="roadmap__step-detail">
              <h4>Launch of ZFamilly (Q1 2022):</h4>
              <p>
              The biggest giveaway the NFT Community on Solana will ever see. 
              Distribution of royalties and the launch of new generation NFTs (more details will be released).
              </p>
            </div>
          </div>

          <div className="roadmap__step">
            <div className="roadmap__step-number roadmap__step-number-next">
              4
            </div>
            <div className="roadmap__step-detail  roadmap__step-detail-next">
              <h4>Launch of ZCommunity (Q2 2022):</h4>
              <p>
              An animated series of Zombie invasion after each episode of the series is launched, 
              the episode will be offered in NFT, and the new character or 3D object will also be sold on our market place (Zcity)

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container" id="about">
        <h1>About</h1>
        <p>
        The ZGirls isn't just another NFT project. Its a story that you can be a part of and decide its future.
        </p>
        <p>
        The goal of launching ZGirls is to create a community around NFTs but especially around of Zombies art, 
        lotteries and giveaways will be offered several times a month to develop our community.
        </p>
        <p>
        Our next big goal will be to launch an NFTs marketplace specializing in zombie illustrations, 
        and to complete the ZFamilly collection (More details will be announced as the project progresses).
        </p>
        <p>
        The royalties will be divided among the owners of the NFT ZGirls and the other portion will be donated to charity.
        </p>
        <p>
        We’re willing to gather a strong community around this Zombie Art. 
        We will listen to you and decide together what will be the next move.
        </p>        
        <h2><span>The ZGirls</span> Team</h2>
      </div>
    </div>
  );
};

export default RoadMap;
