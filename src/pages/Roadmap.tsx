import React from "react";
import { RouteComponentProps } from "@reach/router";
import Nav from "../components/Nav";

import Ship from "../assets/roadmap/ship.png";
import RoadmapImage from "../assets/roadmap/roadmap.png";

function Roadmap(props: RouteComponentProps) {
  return (
    <div style={{ background: "#101010" }} className="pb-30">
      <Nav />
      <div
        id="roadmap-hero"
        className="w-full h-screen py-40 relative bg-center bg-cover"
      >
        <h1 className="text-primary-light glow text-5xl uppercase font-black italic text-center">
          Roadmap
        </h1>
        <img src={Ship} alt="Super Cool Spaceship" className="mt-10 mx-auto" />
      </div>
      <div className="text-white mx-48 -mt-48 relative z-20">
        <div className="flex">
          <div className="h-6 w-6 rounded-full flex-shrink-0 mt-1 mr-10 flex relative">
            <div className="absolute bg-primary-dark rounded-full inset-0 filter  blur-sm"></div>
            <div className="h-4 w-4 bg-primary-light rounded-full m-auto relative z-10"></div>
          </div>
          <div>
            <h3 className="font-orb text-2xl font-medium uppercase">
              Q3 2021 - Force Formation
            </h3>
            <div className="mt-10 space-y-10">
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    Gen-1 Cyborg NFT drop (2000)
                  </h4>
                  <div className="flex space-x-3 text-sm">
                    <p>Mint: X</p>
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  First enlistment into the 5 forces start. <br />
                  Only the bravest souls are granted passage and take their
                  rightful place. <br />
                  Everything that may go wrong, will go wrong. <br />
                  Still they believe that all is not lost and want to give
                  humanity a fighting chance.
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    Gen-1 Cyborg NFT drop (2000)
                  </h4>
                  <div className="flex space-x-3 text-sm">
                    <p>Mint: X</p>
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  First enlistment into the 5 forces start. <br />
                  Only the bravest souls are granted passage and take their
                  rightful place. <br />
                  Everything that may go wrong, will go wrong. <br />
                  Still they believe that all is not lost and want to give
                  humanity a fighting chance.
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    Gen-1 Cyborg NFT drop (8000)
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  Second enlistment into the 5 forces start. <br />
                  Each force finally gets there 100 generals, 400 lietuants,
                  1500 soldiers. <br />
                  Generals start to coordinate to build out their factions whule
                  lietutants and soliders work together to setup garricks and
                  weapon machinery factories.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30 flex">
          <div className="h-6 w-6 rounded-full flex-shrink-0 mt-1 mr-10 flex relative">
            <div className="absolute bg-primary-dark rounded-full inset-0 filter  blur-sm"></div>
            <div className="h-4 w-4 bg-primary-light rounded-full m-auto relative z-10"></div>
          </div>
          <div>
            <h3 className="font-orb text-2xl font-medium uppercase">
              Q4 2021 - SGF TRIDENT DEPLOYED
            </h3>
            <div className="mt-10 space-y-10">
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    SGF ECOSYSTEM FUND ROLLS OUT GRANTS PROGRAM
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  Having blueprints from the future is not enough. <br />
                  SGF requires a healthy functioning economy to rapidly
                  accelerate humanity’s technological progress. <br />
                  A rolling grants program is initialized to fund enterprenures
                  and builders.
                  <br /> <br />
                  Grant’s mandate: build out the media network layer of the
                  media house. <br />
                  <br />
                  Grant levels planned: <br />
                  <br />
                  Level 1 proposals - {"<="} $1000 worth SOL, SPL-USDC <br />
                  Level 2 proposals - {"<="} $5000 worth SOL, SPL-USDC <br />
                  Level 3 proposals - {">="} $10,000 worth SOL, SPL-USDC
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    FLOOR SWEEPING 📈
                  </h4>
                  <div className="flex space-x-3 text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  SGF Media House starts sweeping Gen-1 NFT Cyborg collection
                  floor due to routine maintence. After enough stress testing
                  has been done, these are then brought back into the economy in
                  the form of giveaways to the most committed soldiers/factions
                  in SGF. <br />
                  <br />
                  This creates deflation in the short term as circulating supply
                  is reduced.
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    DONATION FOR DISABLED VETERANS
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  True Cyborgs = the people who served their country + had to
                  become a cyborg due to injuries from war. <br />
                  After all legal papework is finished, first tranch of donation
                  will be processed. <br />
                  Veterans join us on our galactic podcast to share their story.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30  flex">
          <div className="h-6 w-6 rounded-full flex-shrink-0 mt-1 mr-10 flex relative">
            <div className="absolute bg-primary-dark rounded-full inset-0 filter  blur-sm"></div>
            <div className="h-4 w-4 bg-primary-light rounded-full m-auto relative z-10"></div>
          </div>
          <div>
            <h3 className="font-orb text-2xl font-medium uppercase">Q1 2022</h3>
            <div className="mt-10 space-y-10">
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    GEN-2 AR COMPATIBLE 3D CYBORGS NFT LAUNCH
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  After rapid progress over the last quarter, it’s time to scale
                  the force with more troops. <br />
                  <br />
                  20k (subject to change) badass 3D Cyborgs will join SGF’s
                  media house. <br />
                  Owner of the NFT get’s access to asset pack that contains high
                  resolution render and T Pose OBJ file that can be imported
                  into standard 3D modelling/animation softwares. <br />
                  <br />
                  Imagine your Cyborg blazing guns in Augmented Reality. This is
                  it.
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    GEN-2 3D CYBORGS MARKETPLACE LISTING
                  </h4>
                  <div className="flex space-x-3 text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  3.5% of secondary royalties are disbursed pro-rata to Gen 1
                  holders.
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    NEURAL FUSION OF CYBORGS NFT
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  Fusing 2 Cyborgs together create 1 Special Cyborg which
                  inherit traits from both.
                  <br />
                  Fusing 2 Special Cyborgs create 1 Super Special Cyborg.
                  <br /> Fusing 2 Super Special Cyborg create 1 Cyborg.
                  <br />
                  <br />
                  You catch the drift.
                  <br /> Combined with floor sweeping, this measure further
                  creates deflationary pressures on the circulating supply.
                </p>
              </div>
              <div className="bg-gray-dark border border-gray-light rounded-md w-full p-10">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black italic uppercase text-xl">
                    SGF FLAGSHIP FIGHTER GAME DEMO LAUNCH
                  </h4>
                  <div className="text-sm">
                    <p>Date: TBD</p>
                  </div>
                </div>
                <p className="text-lg mt-5 font-medium text-gray">
                  After first and third party NFT drops, SGF Media House starts
                  arming itself with another IP drop.
                  <br />
                  <br /> What would a Tekken meets Aliens vs Predators game look
                  like? <br />
                  Come find out.
                  <br />
                  <br /> Pst. 0.05% of take rate of the game is pooled for
                  staking rewards for Gen 1 Cyborg holders. Read tokenomics page
                  for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1 mx-2.5 mt-2 rounded-full h-full absolute top-0 left-0 bg-primary-light z-0"></div>
      </div>
      <div className="mt-30">
        <img src={RoadmapImage} alt="roadmap" />
      </div>
      <div className="mt-8 font-orb flex flex-wrap justify-center items-center">
        <button className="btn-primary font-black mt-4 mr-3">FAQS</button>
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
  );
}

export default Roadmap;
