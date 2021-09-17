import { useState, useEffect, useRef } from "react";

import GLOBE from "vanta/dist/vanta.globe.min";
import Ticker from "react-ticker";
import { Link } from "@reach/router";

import Nav from "../components/Nav";

import Spaceship from "../assets/landing/spaceship.svg";
import Avatar from "../assets/landing/team-avatar.png";

function Landing(props) {
  const [effect, setEffect] = useState(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effect) {
      setEffect(
        GLOBE({
          el: effectRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          size: 0.75,
          color: 0xadf9ff,
          color2: 0xadf9ff,
          backgroundColor: 0x000,
        })
      );
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, [effect]);

  return (
    <div className="relative">
      <Nav />
      <div
        ref={effectRef}
        className="bg-black text-white w-full h-screen flex items-center px-30 py-40 relative"
      >
        <div className="max-w-5xl">
          <h1 className=" text-7xl font-black italic">
            1st COMMUNITY-OWNED{" "}
            <span className="text-primary-light relative glow">
              SCI-FI MEDIA HOUSE{" "}
            </span>{" "}
            🔭 BUILT ON SOLANA
          </h1>
          <div className="mt-10 space-x-5 font-orb">
            <Link to="/nft" className="btn-primary font-black">
              GEN-1 NFT DROP
            </Link>
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-primary-light text-black font-orb">
          <div className="absolute bg-primary-light -inset-1 z-0 opacity-80  rounded filter blur"></div>
          <Ticker>
            {() => (
              <div className="relative z-10 bg-primary-light py-3 ml-3 font-medium">
                {" "}
                * LAUNCHING ON 15TH SEPTEMBER * MINT PRICE 0.99 SOL * JOIN
                DISCORD *{" "}
              </div>
            )}
          </Ticker>
        </div>
      </div>
      <div
        className="h-screen bg-center bg-cover flex items-center px-30 relative bg-gray-dark"
        id="landing-section-2"
      >
        <div className="w-full">
          <h1 className="text-primary-light text-5xl font-black italic glow text-center">
            AHOY SPACE CADETS
          </h1>
          <div className="font-orb font-black text-3xl text-center text-white mt-10 space-y-2 uppercase">
            <p>
              Welcome To{" "}
              <span className="text-primary-dark glow">
                SGF’s Mission Control
              </span>{" "}
              room.
            </p>
            <p>
              Here <span className="font-medium">You</span> will{" "}
              <span className="font-medium">find</span> everything to{" "}
              <span className="font-medium">get started</span>.
            </p>
          </div>
        </div>
      </div>
      <div
        className="h-screen bg-center bg-cover relative  pb-28 pt-44 pl-36"
        id="vision"
      >
        <div className="grid grid-cols-2">
          <div className="text-white">
            <h1 className="text-primary-light glow text-5xl font-black italic uppercase">
              SGF's Vision
            </h1>
            <div className="uppercase font-orb text-3xl mt-10 font-black">
              <p>
                To build <br />
                the Sci-Fi media house <br />
                21'st century deserves. <br />
                <br />
                Community owned from the start.
              </p>
            </div>
          </div>
          <img
            src={Spaceship}
            alt="spaceship"
            className="justify-self-end w-5/6"
          />
        </div>
        <div>
          <p className="mt-10 text-white text-3xl font-orb uppercase font-black">
            Intellectual property DROPs planned:
            <br />
            <span className="text-primary-dark glow">
              GENSIS 10k Gen-1 CYBORG
            </span>
          </p>

          <div className="mt-10 space-x-3 font-orb">
            <Link to="/nft" className="btn-primary font-black">
              GEN-1 NFT DROP
            </Link>
            <a
              href="https://discord.com/invite/bBeHKHHSu5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </div>
      <div className="h-screen bg-center bg-cover pt-40 relative" id="team">
        <div className="bg-black bg-opacity-40 h-full absolute inset-0 z-0"></div>
        <div className="relative z-10">
          <h1 className="uppercase text-primary-light glow font-black italic text-5xl text-center">
            Stellar team
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 font-orb text-white mt-20">
              <div className="space-y-2">
                <img src={Avatar} alt="" className="mx-auto" />
                <p className="text-center">@kayden</p>
              </div>
              <div className="space-y-2">
                <img src={Avatar} alt="" className="mx-auto" />
                <p className="text-center">@nonfungibleprime</p>
              </div>
              <div className="space-y-2">
                <img src={Avatar} alt="" className="mx-auto" />
                <p className="text-center">@greywolf</p>
              </div>
            </div>
            <div className="grid grid-cols-2 font-orb text-white mt-16">
              <div className="space-y-2">
                <img src={Avatar} alt="" className="mx-auto" />
                <p className="text-center">@alphatron</p>
              </div>
              <div className="space-y-2">
                <img src={Avatar} alt="" className="mx-auto" />
                <p className="text-center">@skywalker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
