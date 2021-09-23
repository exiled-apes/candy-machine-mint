import React, { useState } from "react";
import "./styles.css";
import Slider from "react-slick";
import { useMemo } from "react";
import { assets } from "../../assets";
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
  const attributesList = useMemo(() => {
    //ts ignore
    const attribute = assets[selected];
    console.log(assets);
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
              {rarity}
            </div>
          ))}
        </div>
        <div className="carousel">
          <Slider {...settings}>
            {attributesList.map((attribute) => (
              <div className="rare-zombie" key={attribute.def}>
                <img src={attribute} alt="zombie" />
                <p>Earing 2. Uncommon</p>
                <p>1.76%</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
