import React, { useState } from "react";
import "./styles.css";
import Zombie from "../../images/zombie.png";
import Slider from "react-slick";
const rarityList = [
  "Head",
  "Body",
  "Background",
  "Hat",
  "Glasses",
  "Beard",
  "Necklace",
  "Other",
];
const Rarity = () => {
  const [selected, setSelected] = useState("Head");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="rarity-container" id="rarity">
      <h1 className="rarity-heading">Rarity Chart</h1>
      <div className="rarity-menu">
        <div className="rarity-options">
          {rarityList.map((rarity) => (
            <div onClick={() => setSelected(rarity)} className={`rarity__option ${selected === rarity && 'rarity__option--selected'} `}>{rarity}</div>
          ))}
         
        </div>
        <div className="carousel">
          <Slider {...settings}>
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
