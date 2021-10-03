import { Position, Spinner, SpinnerSize, Toaster } from "@blueprintjs/core";
import axios from "axios";
import { debounce, find, get } from "lodash";
import { useCallback, useEffect, useState } from "react";
import AttributeList from "../components/AttributeList";
import Header from "../components/Header";
import { rarityHashMap, RarityTypes } from "../utils/attribute-hash";
import { botsJson } from "../utils/bots";
import cx from "classnames";

import ratchetRick from "../images/ratchet-rick.png";
import lightning from "../images/lightning.png";

import "./RarityTool.scss";

export type BotType = {
  link: string;
  name: string;
};

type BotsKeyType = {
  [key: string]: BotType;
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

const getRarityString = (
  rarity: string,
  category: string,
  traitName: string | undefined
) => {
  if (
    (rarity === "none" && category === "Damage") ||
    rarity === RarityTypes.EPIC
  ) {
    return "PRETTY EPIC";
  } else if (rarity === RarityTypes.RARE) {
    return "LOOKS RARE";
  } else if (
    rarity === RarityTypes.COMMON ||
    (category === "Equipment" && traitName === "None")
  ) {
    return "COMMON";
  } else if (
    rarity === "N/A" ||
    rarity === RarityTypes.LEGENDARY ||
    rarity === RarityTypes.UNKNOWN
  ) {
    return "HOLY S**T!! WTF IS THAT?!";
  }
};

export const AppToaster = Toaster.create({
  className: "ricky-toaster",
  position: Position.BOTTOM,
});

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
    if (!url || !bots[url]) {
      if (url !== "") {
        showErrorToast();
      }
      return;
    }
    setBot(null);
    setLoading(true);
    axios
      .get(bots[url].link)
      .then((response) => {
        setBot(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const showErrorToast = () => {
    AppToaster.show({
      message: (
        <div className="text-3xl uppercase flex items-center rarity-tool__error-toast">
          <div>
            <img
              className="rarity-tool__rick--angry"
              src={ratchetRick}
              alt="ratchet-rick"
            />
          </div>
          <div className="rarity-tool__error-toast--slide-in ml-5 text-red-800">
            "I can't find that bot!! <br />
            Quit wasting my time!!"
          </div>
        </div>
      ),
    });
  };

  const renderIcon = (rarity: string) => {
    const classname = cx("rarity-tool__icon", {
      "rarity-tool__icon--common": rarity === RarityTypes.COMMON,
      "rarity-tool__icon--rare": rarity === RarityTypes.RARE,
      "rarity-tool__icon--epic": rarity === RarityTypes.EPIC,
      "rarity-tool__icon--legendary": rarity === RarityTypes.LEGENDARY,
      "rarity-tool__icon--unknown": rarity === RarityTypes.UNKNOWN,
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
        <div key={category} className="flex uppercase">
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
          let rarity = get(rarityHashMap, [`${traitName}`], "N/A");
          return (
            <div className="tracking-widest flex uppercase">
              <div className="text-white text-center rarity-tool__trait rarity-tool__trait--background rarity-tool__trait--bordered">
                {category === "Backgrounds" ? "Background" : category}
              </div>
              <div className="rarity-tool__trait bg-gray-300 text-black text-center rarity-tool__trait--borderless">
                {bot ? traitName : "?"}
              </div>
              <div className="bg-white text-black text-center rarity-tool__trait rarity-tool__trait--bordered">
                {bot ? getRarityString(rarity, category, traitName) : "?"}
                {bot && renderIcon(rarity)}
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
      <div className="rarity-tool__container flex justify-center">
        <div className="rarity-tool px-28 py-14">
          <div className="uppercase flex items-center mb-4">
            <div className="mr-3">
              <img
                className="rarity-tool__rick"
                src={ratchetRick}
                alt="ratchet-rick"
              />
            </div>
            <div className="text-xl rarity-tool__rick--text mx-4">
              RATCHET RICKY'S RARITY APPRAISAL
            </div>
            <div>
              <img
                className="rarity-tool__lightning"
                src={lightning}
                alt="ricky-lightning"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-5">
              {loading && (
                <div className="rarity-tool__placeholder-img">
                  <div className="flex content-center h-full justify-center">
                    {loading && <Spinner size={SpinnerSize.LARGE} />}
                  </div>
                </div>
              )}
              {!loading && (
                <>
                  {bot ? (
                    <img
                      className="rarity-tool__bot-image"
                      alt="bot-pfp"
                      src={bot.image}
                    />
                  ) : (
                    <div className="rarity-tool__placeholder-img bg-gray-300"></div>
                  )}
                </>
              )}

              <div className="rarity-tool__bot-name mt-3 uppercase text-center border-black border-4 border-solid bg-white flex items-center justify-center">
                {bot?.name}
              </div>
            </div>
            <div className="ml-6">
              <div className="mb-1 tracking-widest">UNIT #</div>
              <input
                className="rarity-tool__search w-full mb-4"
                type="text"
                onChange={(e) => setQuery(e.currentTarget.value)}
              />
              {renderTraits(bot)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RarityTool;
