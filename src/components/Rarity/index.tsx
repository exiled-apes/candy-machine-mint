import React, { useState } from "react";
import "./styles.css";
import Slider from "react-slick";
import { useMemo } from "react";
import { assets } from "../../assets";
const rarityList = [
  "Background",
  "Skins",
  "Eyes",
  "Nose",
  "Clothes",
  "Accessory",
  "Hair",
  "Hats",
  "Mouth",
  "Glasses"
];
const Rarity = () => {
  const [selected, setSelected] = useState("Background");
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const attributesList = useMemo(() => {
    //ts ignore
    const attribute = assets[selected];
    if (attribute) {
      return attribute;
    }

    return [];
  }, [selected]);
  return (
    <div className="rarity-container" id="rarity">
      <h1 className="rarity-heading">Rarity Chart</h1>
      <div className="rarity-menu">
        <div className="rarity-options">
          {rarityList.map((rarity) => (
            <div
              onClick={() => setSelected(rarity)}
              className={`rarity__option ${
                selected === rarity && "rarity__option--selected"
              } `}
            >
              <p>{rarity}</p>
            </div>
          ))}
        </div>
        <div className="carousel">
          <Slider {...settings}>
            {attributesList.map((attribute) => (
              <div className="rare-zombie" key={attribute.def}>
                <img src={attribute.src} alt="zombie" />
                <p>{attribute.title}</p>
                <p>{attribute.rarity}%</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
