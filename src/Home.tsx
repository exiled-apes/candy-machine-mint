import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { fff } from "./3d.js";
import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";


import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const aaa = fff();

const ConnectButton = styled(WalletDialogButton)`

  && {{
        background: transparent;
        color: #23dbb2;
        font-size: 25px;
        margin-top: 100%;
        position: absolute;
        font-family: 'blox2';
        letter-spacing: 3px;
        line-height: 100%;
       
     }}
`;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div`
  position: relative;
  margin-left: 45%;
  margin-right: 45%;
  margin-top: 15%;
  bottom: 10%;
  display: flex;
  justify-content: center;
  display: none;
  
`; // add your styles here


const MintButton = styled(Button)`
&& {{
  position: relative;
  font-family: 'blox2';
  font-size: 25px;
  letter-spacing: 3px;
  background: transparent;
  color: #23dbb2;
  text-shadow: 0.5px -0.5px #ffffff, -0.5px 0.5px #e709e7;}}
  bottom: 10%;

  &:hover {
    font-weight: bold;
    font-size: 30px;
}}
`; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);
  

  return (
    <main>
      {aaa}
      <div className="first">
          <div className="TopMenu">
            <a href="/#" className="homee"><p>home</p></a>
            <a href="/#faq1" className="homee"><p>faq</p></a>
            <a href="https://discord.gg/qy79dbWPxG" target="_blank" rel="noreferrer" className="homee"><p>dIscord</p></a>
            <a href="https://twitter.com/solboxersnft" target="_blank" rel="noreferrer" className="homee"><p>twItter</p></a>
          </div>
          <div className="Headp">
            <div className="sol">sol</div><div className="boxers">boxeRs</div>
          </div>
          <div className="cube1">
            <img src="cube1.png"  alt="Solana NFT"></img>
           </div>
          <div className="cube2">
            <img src="cube2.png"  alt="meebits"></img>
          </div>
        <div className="u">
          <h2 className="info"><p>First 160 of 499 sold out. Thanks for everyone who beleive in us.</p></h2>
        </div>
        
        {wallet && (
          <p>&nbsp;&nbsp;Wallet: {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
        )}

        {wallet && <p>&nbsp;&nbsp;Balance: {(balance || 0).toLocaleString()} SOL</p>}

        {wallet && <p>&nbsp;&nbsp;Total Available: {itemsAvailable}</p>}

        {wallet && <p>&nbsp;&nbsp;Redeemed: {itemsRedeemed}</p>}

        {wallet && <p>&nbsp;&nbsp;Remaining: {itemsRemaining}</p>}

        <MintContainer>
          {!wallet ? (
            <ConnectButton>Connect Wallet</ConnectButton>
          ) : (
            <MintButton
              disabled={isSoldOut || isMinting || !isActive}
              onClick={onMint}
              variant="contained"
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ? (
                isMinting ? (
                  <CircularProgress />
                ) : (
                  "MINT"
                )
              ) : (
                <Countdown
                  date={startDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              )}
            </MintButton>
          )}
        </MintContainer>
  
        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>

      </div>
           
      <footer>
       <div id={'faq1'} className="intro">
          <h2 className="info"><p>What is SOLBOXERS</p></h2>
          <p>A collection of 499 uniquely generated Boxer brief NFTs with proof of ownership stored on the Solana blockchain that will be giving you a strong sense of PRIDE in being an owner of 1 of the 499. </p>
          <p>Total supply is only 499, which makes SolBoxers one of the rarest NFT collectible on Solana Metaverse.
          </p>
          <p>We plan to divide our Collection to 4 pieces. We hope this approach can give our collectors more of "FASHION" type of feeling about our Solboxers NFT.</p>
          <p> &nbsp;&nbsp;&nbsp;- October 160✔️</p>
          <p> &nbsp;&nbsp;&nbsp;- November 160</p>
          <p> &nbsp;&nbsp;&nbsp;- December 160</p>
          <p> &nbsp;&nbsp;&nbsp;- Christmas 19</p>
          <p> &nbsp;&nbsp;&nbsp;- Total=499</p>
        </div>

       <div className="rarity">
       <h2 className="info"><p>Rarity</p></h2>
          <p>Unique, Algorithmically generated, also there are some cool, custom made rare types of Boxers</p>
          <img className="rare" max-height="100%" max-width="100%" src="rarity4.png"  alt="thugbirds"></img>
       </div>
       <div className="roadmap">
          <h2 className="info"><p>RoadMap</p></h2>
          <ul>
          <li>Submit listing requests on possible Secondary marketplaces such as Solanart, MagicEden, DigitalEyes and alpha.art.</li>
          <p> &nbsp;</p>
          <li>No initial royalty system, thus We will be able to be listed centralized NFT marketplaces such as FTX, Coinbase(as soon as they integrate Solana blockchain NFT's). Instead, Team will Create a Community wallet with 20% from sales for future Marketing activities that can increase Solboxers value.</li>
            <p> &nbsp;&nbsp;&nbsp;- Discord invite contest</p>
            <p> &nbsp;&nbsp;&nbsp;- Illustration art contest</p>
            <p> &nbsp;&nbsp;&nbsp;- Cross giveaways with other projects on Solana</p>
            <p> &nbsp;&nbsp;&nbsp;- Regular social media giveaways, campaign</p>
            <p> &nbsp;&nbsp;&nbsp;- Floor sweeping</p>
            <p> &nbsp;&nbsp;&nbsp;- Sending SOLBOXERS themed boxer-breif and bling-bling to person bought the most expensive SOLBOXER NFT from secondary markets.</p>
            <div className="merchant">
              <div className="trunk">
              <img src="Degen-ape.jpg"  height="180" width="190" alt="solsocks"></img>
              </div>
              <div className="bling">
              <img src="generative-nft.jpg" height="180" width="190" alt="socks on solana"></img>
            </div>
            </div>
            <li>"3D UNDERWEARS" &nbsp;&nbsp; As you can see in the header section of our web, there is 3D versions of Solboxers wearable in the Metaverse! Team will make 3D versions every Solboxer and distribute to owners. As drawing in 3d takes time this could take some time!</li>
            <p> &nbsp;</p>
            <li>Addresses which participated SOLBOXERS minting process will get free airdrop of STT(SOLBOXERS TEAM TOKEN).</li>
            <li>STT holders get Exclusive access to and 20% profit from future Decentralized projects that the team develops. (Sounds like a 🤥 promise hah? But anything could happen. Right?)</li>
            <p> &nbsp;</p>
            <li>"BIKINI"s &nbsp;&nbsp; Every minting address of 499 SolBoxers get free airdrop of Bikini themed NFT's that can make owner looks HOT😎. Those Bikinis will be created with similar design of Solboxers, So they can be paired up!</li>
          </ul>
         </div>

       <div className="team">
          <h2 className="info"><p>Team</p></h2>
          <div className="teamins">
            <div className="dev">
              <img src="4.png" width="" height="180" alt="solsocks"></img>
              <div className="teamtxt" >
                 <a href="https://twitter.com/enhgerel">DEV: ◎Gerel</a>
              </div>
            </div>
            <div className="flf">
              <img src="1.jpg" width="180" height="180" alt="socks on solana"></img>
              <div className="teamtxt">
                ART: (FLF)
              </div>
            </div>
          </div>
       </div>

       <div className="foot">
          <a href="https://discord.gg/ESYdRqGC" target="_blank" rel="noreferrer" className="discord"><p>DISCORD</p></a>

          <a href="https://twitter.com/solboxersnft" target="_blank" rel="noreferrer" className="twitter"><p>TWITTER</p></a>
       </div>
       <div className="mp">
       <a href="https://docs.metaplex.com/">powered by Metaplex 🍬 Machine.</a>
       </div>
      </footer>
    </main>

  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
