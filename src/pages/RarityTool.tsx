import { Spinner, SpinnerSize } from "@blueprintjs/core";
import axios from "axios";
import { debounce, find, get } from "lodash";
import { useCallback, useEffect, useState } from "react";
import AttributeList from "../components/AttributeList";
import Header from "../components/Header";
import { rarityHashMap } from "../utils/attribute-hash";
import { botsJson } from "../utils/bots";
import cx from "classnames";

import "./RarityTool.scss";

export type BotType = {
  link: string;
  name: string;
};

type BotsKeyType = {
  [key: string]: BotType;
};

type RarityHashType = {
  [key: string]: string;
};

type BotDataType = {
  name: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
  image: string;
  collection: {
    name: string;
  };
};

const RarityTool = () => {
  const bots: BotsKeyType = botsJson;
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [bot, setBot] = useState<null | BotDataType>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceLoadData = useCallback(debounce(fetchData, 1000), []);

  useEffect(() => {
    debounceLoadData(query);
  }, [query, debounceLoadData]);

  function fetchData(url: string) {
    if (!url) {
      return;
    }
    setLoading(true);
    axios
      .get(bots[url].link)
      .then((response) => {
        setBot(response.data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }

  const renderIcon = (rarity: string) => {
    const classname = cx("rarity-tool__icon", {
      "rarity-tool__icon--common": rarity === "COMMON",
      "rarity-tool__icon--rare": rarity === "LOOKS RARE",
      "rarity-tool__icon--epic": rarity === "PRETTY EPIC",
      "rarity-tool__icon--legendary": rarity === "DANG LEGENDARY",
    });
    return <div className={classname} />;
  };

  const renderTraits = (bot: BotDataType | null) => {
    const categories = [
      "Backgrounds",
      "Body",
      "Equipment",
      "Damage",
      "Expression",
    ];
    if (!bot) {
      categories.map((category) => (
        <div className="flex uppercase">
          <div className="text-white text-center rarity-tool__trait rarity-tool__trait--background rarity-tool__trait--bordered">
            {category === "Backgrounds" ? "Background" : category}
          </div>
          <div className="rarity-tool__trait bg-gray-300 text-black text-center rarity-tool__trait--borderless">
            ?
          </div>
          <div className="bg-white text-black text-center rarity-tool__trait rarity-tool__trait--bordered">
            ?
          </div>
        </div>
      ));
    }
    return (
      <div>
        {categories.map((category) => {
          const matchingCategory = find(
            bot?.attributes,
            (trait) => trait.trait_type === category
          );
          const traitName = matchingCategory?.value;
          console.log("tn", traitName, category);
          let rarity = get(rarityHashMap, [`${traitName}`], "N/A");
          if (traitName === "none" && category === "Damage") {
            rarity = "RARE";
          } else if (rarity === "RARE") {
            rarity = "LOOKS RARE";
          }
          return (
            <div className="flex uppercase">
              <div className="text-white text-center rarity-tool__trait rarity-tool__trait--background rarity-tool__trait--bordered">
                {category === "Backgrounds" ? "Background" : category}
              </div>
              <div className="rarity-tool__trait bg-gray-300 text-black text-center rarity-tool__trait--borderless">
                {bot ? traitName : "?"}
              </div>
              <div className="bg-white text-black text-center rarity-tool__trait rarity-tool__trait--bordered">
                {bot ? rarity : "?"}
                {rarity !== "N/A" && renderIcon(rarity)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="rarity-tool px-28 py-14">
        <div className="uppercase">RATCHET RICKY'S RARITY APPRAISAL</div>
        <div className="flex">
          <div className="mt-5">
            {bot && !loading ? (
              <img
                className="rarity-tool__bot-image"
                alt="bot-pfp"
                src={bot.image}
              />
            ) : (
              <div className="rarity-tool__placeholder-img">
                <div className="flex content-center h-full justify-center">
                  {loading && <Spinner size={SpinnerSize.LARGE} />}
                </div>
              </div>
            )}
            <div className="rarity-tool__bot-name mt-3 uppercase text-center border-black border-4 border-solid bg-white flex items-center justify-center">
              Irrelevant #2042
            </div>
          </div>
          <div className="ml-6">
            <div className="mb-1">UNIT #</div>
            <input
              className="rarity-tool__search w-full mb-4"
              type="text"
              onChange={(e) => setQuery(e.currentTarget.value)}
            />
            {renderTraits(bot)}
          </div>
        </div>
      </div>
    </>
  );
};

export default RarityTool;
