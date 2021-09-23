import AngledBob from "./images/hair/Angled Bob.png";
import Natural from "./images/hair/Black Natural Up 1.png";
import Fire from "./images/hair/fire.png";
import CobWeb from "./images/hair/Cobweb.png";
import Bangs from "./images/hair/Green Bob with Bangs.png";
import FireMouth from "./images/mouth/Fire.png";
import IceMouth from "./images/mouth/Ice.png";
import OrcMouth from "./images/mouth/Orc.png";
import VampireMouth from "./images/mouth/Vempire.png";
import Background from "./images/background/background 20.png";
import Background2 from "./images/background/background 21.png";
import Background3 from "./images/background/background 22.png";
import Background4 from "./images/background/background 23.png";
//Import images form the folder with the correct path

//Use the same key as in Rarity section and place the images in the that attribute array
export const assets: {
  [key: string]: any[];
} = {
  Head: [
    { src: AngledBob, title: "Hat", rarity: 1.24 },
    { src: Natural, title: "Hat", rarity: 1.24 },
    { src: Fire, title: "Hat", rarity: 1.24 },
    { src: CobWeb, title: "Hat", rarity: 1.24 },
    { src: Bangs, title: "Hat", rarity: 1.24 },
  ],
  Other: [
    { src: FireMouth, title: "Hat", rarity: 1.24 },
    { src: IceMouth, title: "Hat", rarity: 1.24 },
    { src: OrcMouth, title: "Hat", rarity: 1.24 },
    { src: VampireMouth, title: "Hat", rarity: 1.24 },
  ],
  Background: [
    { src: Background, title: "Hat", rarity: 1.24 },
    { src: Background2, title: "Hat", rarity: 1.24 },
    { src: Background3, title: "Hat", rarity: 1.24 },
    { src: Background4, title: "Hat", rarity: 1.24 },
  ],
};
