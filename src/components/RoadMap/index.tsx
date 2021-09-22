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
              <h4>Day 1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                aliquet semper lobortis praesent ultrices non egestas. Interdum
                sed ut ultrices pulvinar laoreet eu sed. Iaculis amet magna nibh
                bibendum accumsan morbi magna diam. Scelerisque proin sed ac
                fringilla sapien vitae ornare volutpat nec.
              </p>
            </div>
          </div>
          <div className="roadmap__step">
            <div className="roadmap__step-number roadmap__step-number-next">
              2
              <img src={Path} className="path" alt="path" />
            </div>
            <div className="roadmap__step-detail roadmap__step-detail-next">
              <h4>Day 1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                aliquet semper lobortis praesent ultrices non egestas. Interdum
                sed ut ultrices pulvinar laoreet eu sed. Iaculis amet magna nibh
                bibendum accumsan morbi magna diam. Scelerisque proin sed ac
                fringilla sapien vitae ornare volutpat nec.
              </p>
            </div>
          </div>

          <div className="roadmap__step">
            <div className="roadmap__step-number">
              3
              <img src={Path} className="path" alt="path" />
            </div>
            <div className="roadmap__step-detail">
              <h4>Day 1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                aliquet semper lobortis praesent ultrices non egestas. Interdum
                sed ut ultrices pulvinar laoreet eu sed. Iaculis amet magna nibh
                bibendum accumsan morbi magna diam. Scelerisque proin sed ac
                fringilla sapien vitae ornare volutpat nec.
              </p>
            </div>
          </div>

          <div className="roadmap__step">
            <div className="roadmap__step-number roadmap__step-number-next">
              4
            </div>
            <div className="roadmap__step-detail  roadmap__step-detail-next">
              <h4>Day 1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                aliquet semper lobortis praesent ultrices non egestas. Interdum
                sed ut ultrices pulvinar laoreet eu sed. Iaculis amet magna nibh
                bibendum accumsan morbi magna diam. Scelerisque proin sed ac
                fringilla sapien vitae ornare volutpat nec.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container" id="about">
        <h1>About</h1>
        <p>
          This is our first and only one NFT collection of beautiful Creepy
          Girls.
        </p>
        <p>
          Creepy Girls Collection is about pure art. Every person will love his
          own CG. Some people see themselves there the others - some people they
          love. Or just join the aesthetic pleasure.
        </p>
        <p>
          There are more than 120 traits in it and some of them are rare. All
          the prevalence is shown in our Rarity Chart where you can see the
          names of most rare treats. You can also try to find a combination of
          several of them if you’re lucky to find such a gem.
        </p>
        <p>
          After recent discussion with our community in Discord we decided to
          reduce the size of collection to a 3333 (instead of initial 10k). That
          made CG even more unique, diversive and valuable. The size is final
          and we won’t ever expand or reduce it.
        </p>
        <p>
          We are also about to launch our own Merch with Creepys. That could be
          T-Shirts, Facemasks, Hoodies or Phone Cases. We want those girls to
          come into the real world with you!
        </p>
        <p>
          There are also some plans to make a game based on that art. And the
          development has already started but we won’t make any pre-sales or big
          promises. We will show you that when it will be on the stage where you
          can see some real progress.
        </p>
        <p>
          What else to expect. There is a plan of creation of a new Creepy
          collection that will be as gorgeous as this one. Likely even more of
          course. All owners of Creepy Girls will have big chances to get an NFT
          from the new collection for free! The more Girls you have the more
          chances to get another exclusive NFT. Those who own 10 Creepy Girls
          will have a guaranteed random Rare art. If you have more than 10 -
          those extra will also participate in a “lottery” to get another common
          Creepy from the collection. I must tell you that this is gonna be not
          that soon. Probably Only after all the CG collection is sold. So don’t
          worry that we will make some fact and low quality and low valuable
          arts. We’re not going to that hole.
        </p>
        <p>
          We’re willing to gather a strong community around this Creepy Art. We
          will listen to you and decide together what will be the next move.
        </p>
        <h2><span>ZGirls</span> Love you</h2>
      </div>
    </div>
  );
};

export default RoadMap;
