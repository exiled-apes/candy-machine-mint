import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import * as anchor from "@project-serum/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
} from "./candy-machine";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import vendingMachine from "../src/images/vending-machine.svg";
import cx from "classnames";

import "./Home.scss";

const CounterText = styled.span``; // add your styles here

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [itemsRemaining, setItemsRemaining] = useState<number | null>(null);
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);
  console.log("items remaining", itemsRemaining);
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });
  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const wallet = useWallet();

  console.log("wallet", wallet);

  const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
      <CounterText>
        {hours} hours, {minutes} minutes, {seconds} seconds
      </CounterText>
    );
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
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
      // if (wallet?.publicKey) {
      //   const balance = await props.connection.getBalance(wallet?.publicKey);
      //   setBalance(balance / LAMPORTS_PER_SOL);
      // }
      setIsMinting(false);
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     if (wallet?.publicKey) {
  //       const balance = await props.connection.getBalance(wallet.publicKey);
  //       setBalance(balance / LAMPORTS_PER_SOL);
  //     }
  //   })();
  // }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );
      console.log("go live date", goLiveDate);

      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
      setItemsRemaining(itemsRemaining);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  return (
    <section className="home">
      <section className="hero">
        <div className="hero-body columns is-vcentered">
          <div className="container column">
            <p className="title">Minting!</p>
            <div className="content">
              <p>
                Only 10,000 Cow Crew Villagers will be minted, ever!
                <br /> Every cow will be completely unique and algorithmically
                generated. Each cow will possess one of many attributes ranging
                from common to mythic rarity.
              </p>
              <p>
                The cows minted in this series will be the only Cows in
                SolanaValley and the only way to obtain them after the initial
                mint will be through the various Solana NFT marketplaces!
              </p>
              <p>We will not be generating any more of this series.</p>
            </div>
          </div>
          <div className="container column">
            <div className="home__mint-machine-card">
              <div className="mb-5">
                <WalletModalProvider>
                  <WalletMultiButton />
                </WalletModalProvider>
              </div>
              <div className="has-text-centered">
                <img
                  className="home__vending-machine"
                  src={vendingMachine}
                  alt="vending-machine"
                />
              </div>
              <div className="home__mint-machine has-text-centered mt-5">
                <button
                  className={cx("button home__mint-button has-text-white", {
                    "is-loading": isMinting,
                    "is-invisible": !wallet.connected,
                  })}
                  onClick={onMint}
                >
                  Mint Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </section>
  );
};

export default Home;
