import axios from "axios";
import { useState } from "react";
import BotCard from "../components/BotCard";
import Header from "../components/Header";
import { botsJson } from "../utils/bots";

import "./RarityTool.scss";

type BotsKeyType = {
  [key: string]: {
    l: string;
  };
};

const RarityTool = () => {
  const [startingIndex, setIndex] = useState<number>(0);
  const bots: BotsKeyType = botsJson;
  const botKeys: string[] = Object.keys(botsJson);
  const subsetOfBots = botKeys.slice(0, 30);
  console.log("sub", subsetOfBots);

  const image = axios
    .get(
      "https://www.arweave.net/hmWxOv3d07jKvuBGnv_yBjrUs0dOM0losdFl4FsnQzE?ext=png"
    )
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return (
    <div className="rarity-tool">
      <Header />
      <div className="rarity-tool__left-nav bg-gray-200">left nav here</div>
      <div className="rarity-tool__main pt-10 pl-6">
        <div>Content goes here</div>
        <div className="grid grid-cols-1 gap-y-4 gap-x-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {subsetOfBots.map((bot: string, index) => (
            <BotCard key={index} url={bots[bot].l} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RarityTool;
