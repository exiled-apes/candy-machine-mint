import { Icon, InputGroup, Spinner, SpinnerSize } from "@blueprintjs/core";
import axios from "axios";
import { debounce } from "lodash";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import AttributeList from "../components/AttributeList";
import BotCard from "../components/BotCard";
import Header from "../components/Header";
import { botsJson } from "../utils/bots";

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

  const renderIcon = () => {
    return <div className="rarity-tool__icon" />;
  };

  const renderTraits = () => {
    return (
      <div>
        {["Backgrounds", "Body", "Equipment", "Damage", "Expression"].map(
          (category) => (
            <div className="flex uppercase">
              <div className="text-white text-center rarity-tool__trait rarity-tool__trait--background rarity-tool__trait--bordered">
                {category === "Backgrounds" ? "Background" : category}
              </div>
              <div className="rarity-tool__trait bg-gray-300 text-black text-center rarity-tool__trait--borderless">
                SKY
              </div>
              <div className="bg-white text-black text-center rarity-tool__trait rarity-tool__trait--bordered">
                COMMON
                {renderIcon()}
              </div>
            </div>
          )
        )}
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
            {bot ? (
              <img
                className="rarity-tool__bot-image"
                alt="bot-pfp"
                src={bot.image}
              />
            ) : (
              <div className="rarity-tool__placeholder-img">
                {
                  <div className="flex content-center h-full justify-center">
                    {loading && <Spinner size={SpinnerSize.LARGE} />}
                  </div>
                }
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
            {renderTraits()}
          </div>
        </div>
      </div>
    </>
  );
};

export default RarityTool;
