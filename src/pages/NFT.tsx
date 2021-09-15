import { RouteComponentProps } from "@reach/router";

import Nav from "../components/Nav";

import HeroCyborg from "../assets/nft/hero.png";

function NFT(props: RouteComponentProps) {
  return (
    <div className="relative">
      <Nav />
      <div
        className="bg-black text-white w-full h-screen px-30 py-40 relative bg-center bg-cover  grid grid-cols-2"
        id="nft-drop-hero"
      >
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-black italic text-7xl uppercase">
            <span className="text-primary-light glow">Gen-1 Cyborg</span>
            <br /> NFT drop
          </h1>
          <p className="uppercase font-black italic text-xl mt-7">
            first ip drop by sgf media house
          </p>
          <div className="mt-8 font-orb flex flex-wrap">
            <button className="btn-primary font-black mt-4 mr-3">
              ROADMAP
            </button>
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black mt-4"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
        <div className="grid items-center justify-center">
          <img src={HeroCyborg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NFT;
