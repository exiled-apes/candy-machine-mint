import React from "react";
import "./styles.css";
import Zombie from "../../images/zombie.png";
import Slider from "react-slick";
const Rarity = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="rarity-container">
      <h1 className="rarity-heading">Rarity Chart</h1>
      <div className="rarity-menu">
        <div className="rarity-options">
          <div className="rarity__option rarity__option--selected ">Head</div>
          <div className="rarity__option">Body</div>
          <div className="rarity__option">Background</div>
          <div className="rarity__option">Hat</div>
          <div className="rarity__option">Glasses</div>
          <div className="rarity__option">Beard</div>
          <div className="rarity__option">Necklace</div>
          <div className="rarity__option">Other</div>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            <div  className="rare-zombie">
              <img src={Zombie} alt="zombie" />
              <p>Earing 2. Uncommon</p>
              <p>1.76%</p>
            </div>
            <div className="rare-zombie">
              <img src={Zombie} alt="zombie" />
              <p>Earing 2. Uncommon</p>
              <p>1.76%</p>
            </div>
            <div className="rare-zombie">
              <img src={Zombie} alt="zombie" />
              <p>Earing 2. Uncommon</p>
              <p>1.76%</p>
            </div>
            <div className="rare-zombie">
              <img src={Zombie} alt="zombie" />
              <p>Earing 2. Uncommon</p>
              <p>1.76%</p>
            </div>
            <div className="rare-zombie">
              <img src={Zombie} alt="zombie" />
              <p>Earing 2. Uncommon</p>
              <p>1.76%</p>
            </div>
            <div className="rare-zombie">
              <img src={Zombie} alt="zombie" />
              <p>Earing 2. Uncommon</p>
              <p>1.76%</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
