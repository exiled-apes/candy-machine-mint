import axios from "axios";
import { useState } from "react";
import { string } from "yargs";

type BotType = {
  name: string;
  attributes: {
    trait_types: string;
    value: string;
  }[];
  image: string;
};

const BotCard = ({ url }: { url: string }) => {
  const [botData, setBotData] = useState<null | BotType>(null);
  axios
    .get(url)
    .then((response) => {
      console.log("response", response);
      setBotData(response.data);
    })
    .catch((err) => console.log(err));
  if (!botData) {
    return <div>Loading</div>;
  }
  console.log("bd", botData);
  return (
    <div className="bot-card">{<img src={botData?.image} alt="bot-img" />}</div>
  );
};

export default BotCard;
