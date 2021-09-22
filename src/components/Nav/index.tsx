import React, { useState } from "react";
import "./styles.css";
import Logo from "../../images/zgirls.svg";

const links = [
  { name: "Home", link: "#home" },
  { name: "Collection", link: "#collection" },
  { name: "About", link: "#about" },
  { name: "Rarity", link: "#rarity" },
  { name: "RoadMap", link: "#roadmap" },
  { name: "Social", link: "#social" },
];
const Nav = () => {
  const [selected, setSelected] = useState("#home");
  return (
    <div className="nav" id="#home">
      <div>
        <img src={Logo} alt="logo" width="100"/>
      </div>
      <ul className="nav-links">
        {links.map(({ name, link }) => {
          return (
            <li key={link} onClick={() => setSelected(link)}>
              <a
                href={link}
                className={`nav-link ${selected === link && "nav-link--active"}`}
              >
                {" "}
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
