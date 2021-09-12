import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import Ticker from "react-ticker";

function Landing() {
  const [effect, setEffect] = useState(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effect) {
      setEffect(
        GLOBE({
          el: effectRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
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
    <div>
      <div
        ref={effectRef}
        className="bg-black text-white w-full h-screen flex items-center px-30 py-40 relative"
      >
        <div>
          <h1 className=" text-7xl font-black italic">
            1st COMMUNITY-OWNED{" "}
            <span className="text-primary-dark relative glow">
              SCI-FI MEDIA HOUSE{" "}
            </span>{" "}
            🔭 BUILT ON SOLANA
          </h1>
          <div className="mt-10 space-x-5 font-orb">
            <button className="btn-primary font-black">GEN-1 NFT DROP</button>
            <a href="#" className="btn-secondary font-black">
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
      <div className="h-screen bg-red-700"></div>
    </div>
  );
}

export default Landing;
