import { RouteComponentProps } from "@reach/router";

import Nav from "../components/Nav";

import HeroCyborg from "../assets/nft/hero.png";
import Cyborgs from "../assets/nft/cyborgs.png";
import General from "../assets/nft/general.png";
import Lieutenant from "../assets/nft/lieutenant.png";
import Soldier from "../assets/nft/soldier.png";
import CyborgBreakdown from "../assets/nft/cyborg-breakdown.png";
import Mercury from "../assets/nft/bg/mercury-bg.png";
import Earth from "../assets/nft/bg/earth-bg.png";
import Mars from "../assets/nft/bg/mars-bg.png";
import Jupiter from "../assets/nft/bg/jupiter-bg.png";
import Saturn from "../assets/nft/bg/saturn-bg.png";
import Uranus from "../assets/nft/bg/uranus-bg.png";
import Neptune from "../assets/nft/bg/neptune-bg.png";

function NFT(props: RouteComponentProps) {
  return (
    <div className="relative bg-black">
      <Nav />
      <div
        className=" text-white w-full h-screen px-30 py-40 relative bg-center bg-cover  grid grid-cols-2"
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
          <img src={HeroCyborg} alt="Cyborg hero" />
        </div>
      </div>
      <div className="py-14 px-48 uppercase">
        <h1 className="text-5xl text-primary-light glow font-black italic text-center">
          mint details
        </h1>
        <div className="grid grid-cols-3 text-white font-orb font-black text-center mt-16">
          <div className="grid grid-rows-2 space-y-5">
            <div className="text-5xl whitespace-nowrap truncate">10,000</div>
            <div className="text-3xl whitespace-nowrap truncate">
              gen-1 cyborgs
            </div>
          </div>
          <div className="grid grid-rows-2 space-y-5">
            <div className="text-5xl whitespace-nowrap truncate">0.99 SOL</div>
            <div className="text-3xl whitespace-nowrap truncate">
              mint price
            </div>
          </div>
          <div className="grid grid-rows-2 space-y-5">
            <div className="text-5xl whitespace-nowrap truncate">TBD</div>
            <div className="text-3xl whitespace-nowrap truncate">mint date</div>
          </div>
        </div>
      </div>
      <div className="py-14 px-36 mt-24">
        <h1 className="text-primary-light text-5xl text-center uppercase glow font-black italic">
          Rarities explained
        </h1>
        <p className="text-white uppercase font-orb font-black text-2xl mt-16 text-center">
          sgf cyborgs are divided into{" "}
          <span className="text-primary-dark">5 forces</span>
        </p>
        <img src={Cyborgs} alt="cyborgs" className="mt-14" />
        <div className="text-white font-orb  uppercase">
          <p className="text-2xl font-black text-center mt-28">
            further division comes across{" "}
            <span className="text-primary-dark">ranks</span>
          </p>
          <div className="grid grid-cols-3 text-center mt-16">
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <img src={General} alt="" />
              </div>
              <div className="mt-3 text-3xl font-medium">
                <p>General</p>
              </div>
              <div className="text-lg mt-2">
                <p>Lead from the front</p>
              </div>
            </div>
            <div className=" flex flex-col">
              <div className="flex items-center justify-center">
                <img src={Lieutenant} alt="" />
              </div>
              <div className="mt-3 text-3xl font-medium">
                <p>LIEUTENANT </p>
              </div>
              <div className="text-lg mt-2">
                <p>scale the impact</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <img src={Soldier} alt="" />
              </div>
              <div className="mt-3 text-3xl font-medium">
                <p>Soldier</p>
              </div>
              <div className="text-lg mt-2">
                <p>execute bravely</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-orb font-black text-white text-3xl mt-36 uppercase">
            Then each cyborg embraces unique set of{" "}
            <span className="text-primary-dark">traits</span>
          </h1>
          <img
            src={CyborgBreakdown}
            alt="cyborg-details"
            className="mx-auto mt-16"
          />
        </div>
        <div className="text-center mt-36 text-white uppercase font-orb">
          <h1 className="text-3xl font-black ">
            lastly <span className="text-primary-dark">bg</span> reflects
            cybgorg's space base posting
          </h1>
          <div className="mt-16 grid grid-cols-4 gap-14 text-lg font-medium">
            <div>
              <img src={Mercury} alt="" className="mx-auto" />
              <p className="mt-5">mercury</p>
            </div>
            <div>
              <img src={Earth} alt="" className="mx-auto" />
              <p className="mt-5">Earth</p>
            </div>
            <div>
              <img src={Mars} alt="" className="mx-auto" />
              <p className="mt-5">Mars</p>
            </div>
            <div>
              <img src={Jupiter} alt="" className="mx-auto" />
              <p className="mt-5">Jupiter</p>
            </div>
          </div>
          <div className="mt-10 mx-20 grid grid-cols-3 gap-14 text-lg font-medium">
            <div>
              <img src={Saturn} alt="" className="mx-auto" />
              <p className="mt-5">Saturn</p>
            </div>
            <div>
              <img src={Uranus} alt="" className="mx-auto" />
              <p className="mt-5">Uranus</p>
            </div>
            <div>
              <img src={Neptune} alt="" className="mx-auto" />
              <p className="mt-5">Neptune</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFT;
