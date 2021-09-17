import { Link, RouteComponentProps } from '@reach/router';
import Nav from '../components/Nav';

import RevenueShare from '../assets/tokenomics/revenue-share.svg';
import Summary from '../assets/tokenomics/summary-illustration.svg';

function Tokenomics(props: RouteComponentProps) {
  return (
    <div className="min-h-screen pb-30" style={{ background: '#101010' }}>
      <Nav />
      <main>
        {/* Hero section */}
        <div
          className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center pt-56 pb-44"
          id="tokenomics-hero"
        >
          <h1 className="text-center text-white font-black italic text-7xl">
            WHERE NFT-FI ⛓<br />
            MEETS <span className="text-primary-light glow">SCI-FI</span>
          </h1>
        </div>
        <div className="mt-24">
          <h2 className="text-5xl font-black italic text-primary-light glow uppercase text-center">
            Let's get started
          </h2>
          <div>
            <p className="text-center text-white font-orb font-black text-3xl uppercase mt-20">
              💸 <br />
              30% of
              <br />{' '}
              <span className="text-primary-dark">secondary royalties</span>
              <br /> from GEN 1 CYBORG SALES
              <br /> DIRECTLY INVESTED INTO THE COMMUNITY
            </p>
            <img
              src={RevenueShare}
              alt="Revenue split"
              className="mt-10 mx-auto"
            />
            <p className="text-center text-white font-orb font-black text-3xl uppercase mt-24">
              💸
              <br /> 3.5% of
              <br />{' '}
              <span className="text-primary-dark">secondary royalties</span>
              <br /> FROM all future NFT drops sales
              <br /> disbursed pro-rata
              <br /> to{' '}
              <span className="text-primary-dark">GEN 1 CYBORG HOLDERS</span>
            </p>
            <div className="grid grid-cols-3 font-orb font-black text-lg text-white uppercase mt-16 max-w-7xl mx-auto">
              <div className="text-center">
                <p>drop 1</p>
                <p className="text-primary-dark">
                  AR compatible gen-2
                  <br /> 3d cyborgs
                </p>
              </div>
              <div className="text-center">
                <p>drop 2</p>
                <p className="text-primary-dark">
                  SGF ECOSYSTEM
                  <br /> FUNDED ARTIST DROP
                </p>
              </div>
              <div className="text-center">
                <p>drop 3</p>
                <p className="text-primary-dark">
                  SGF ECOSYSTEM
                  <br /> FUNDED TEAM DROP
                </p>
              </div>
            </div>
            <p className="text-center mt-36 text-white font-orb font-black text-3xl uppercase mx-auto max-w-5xl">
              💸
              <br /> 0.5% of
              <br /> <span className="text-primary-dark">taKE RATE</span> FROM
              <br /> SGF’s FLAGSHIP FIGHTER GENRE GAME
              <br /> IS ALLOCATED TO{' '}
              <span className="text-primary-dark">
                EARLY BELEIVERS STAKE POOL
              </span>
              <br />
              <br /> STAKING{' '}
              <span className="text-primary-dark">GEN-1 CYBORG</span> to the
              above POOL ACCRUES <br />
              <span className="text-primary-dark">
                PRO-RATA STAKING REWARDS
              </span>
            </p>
            <div className="mt-44">
              <h3 className="text-5xl font-black italic text-primary-light glow uppercase ml-40">
                Summary
              </h3>
              <img src={Summary} alt="Summary" className="-mt-10 w-full" />
            </div>
          </div>
        </div>
      </main>
      <div className="mt-8 font-orb flex flex-wrap justify-center items-center">
        <Link to="/roadmap" className="btn-primary font-black mt-4 mr-3">
          ROADMAP
        </Link>
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

export default Tokenomics;
