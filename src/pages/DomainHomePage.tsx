import Header from "../components/Header";
import bannerImage from "../images/banner.jpg";

import "./DomainHomePage.scss";

const DomainHomePage = () => {
  return (
    <div>
      <Header />
      <div className="domain-home has-text-centered pt-4">
        <img src={bannerImage} alt="banner" />
        <div className="has-text-white is-size-5 mt-3">
          Mint page is no longer here, please check #announcements for updates
          in our Discord:
          <br />
          <a
            className="is-size-4"
            href={
              "https://discord.com/channels/882673113479913492/882683701866143794"
            }
            target="_blank"
            rel="noreferrer"
          >
            https://discord.com/channels/882673113479913492/882683701866143794
          </a>
        </div>
      </div>
    </div>
  );
};

export default DomainHomePage;
