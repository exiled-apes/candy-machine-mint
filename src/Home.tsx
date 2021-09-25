import { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Snackbar } from "@material-ui/core";
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

import logo from "../src/images/logo.png";
import "./Home.scss";

const countdownRenderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return (
      <div className="has-text-white has-background-primary home__countdown has-text-centered mt-3 py-1">
        <span className="is-size-5">Minting LIVE!!</span>
      </div>
    );
  } else {
    return (
      <div className="is-size-4 home__countdown has-text-centered mt-3 py-1 has-background-frost-grey">
        <span className="has-text-light">
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>{" "}
        {"until minting begins!"}
      </div>
    );
  }
};

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
  const [itemsTotal, setItemsTotal] = useState<number>(0);
  const [itemsRemaining, setItemsRemaining] = useState<number | null>(null);
  const [isMinting, setIsMinting] = useState(true);
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  // FOR TESTING
  // const [startDate, setStartDate] = useState<number>(Date.now() + 10000);
  const [startDate, setStartDate] = useState<number>(props.startDate * 1000);
  const [countdownComplete, setCountdownComplete] = useState<boolean>(
    Date.now() >= startDate
  );
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const wallet = useWallet();

  const onMint = async () => {
    setIsMinting(true);
    try {
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
            message: "Congratulations! Mint successful!",
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
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
          setItemsRemaining(0);
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setItemsRemaining(0);
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
      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;
      const { itemsRemaining } = await getCandyMachineState(
        anchorWallet,
        props.candyMachineId,
        props.connection
      );
      setItemsRemaining(itemsRemaining);
      setIsMinting(false);
    }
  };

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
      const { candyMachine, goLiveDate, itemsRemaining, itemsAvailable } =
        await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );
      setStartDate(goLiveDate);
      setItemsTotal(itemsAvailable);
      setCandyMachine(candyMachine);
      setItemsRemaining(itemsRemaining);
      setIsMinting(false);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  const isSoldOut = itemsRemaining === 0;
  const isActive = Date.now() >= startDate || countdownComplete;

  return (
    <section className="home">
      <div className="pb-4" />
      <div className="home__mosaic" />
      {/* {!isSoldOut && (
        <div>
          <Countdown
            daysInHours
            className="home__countdown-timer"
            date={startDate}
            onComplete={() => setCountdownComplete(true)}
            renderer={countdownRenderer}
          />
        </div>
      )} */}
      <section className="hero">
        <div className="hero-body columns is-vcentered">
          <div className="container column pr-6">
            <p className="is-size-4 has-text-white mb-5">
              Mint an Irrelevant for 0.2 SOL
            </p>
            <p className="has-text-white">
              INITIATE: WAVE 1<br />
              {"{{ 606 // 4848 }} "}
            </p>
            <div className="content has-text-white mt-5 is-size-6">
              <p className="mb-6">
                Mint 1-of-606 Artificial Irrelevants collectibles in Wave 1.
                <br />
                Each robot is illustrated by hand and generated by code.
                <br /> There will only ever be a maximum of 4848 robots in
                existence.
                <br /> Each collectible is one-of-a kind and will be stored
                indefinitely on the Solana blockchain.
              </p>
              <p className="is-italic">
                “The first wave dove into the abyss head first. Uncertain about
                what the future might hold, they took a brave first step into a
                new frontier. With bullish strength, they were destined to leave
                a mark on history. All great things comes from modest
                beginnings.”
              </p>
              <p className="mt-6 is-italic">The legacy begins.</p>
            </div>
          </div>
          <div className="container column">
            <div className="home__mint-machine-card">
              <div className="mb-5">
                <WalletModalProvider logo={logo}>
                  <WalletMultiButton className="home__connect-button" />
                </WalletModalProvider>
              </div>
              <div className="has-text-centered">
                <img
                  className="home__vending-machine"
                  src={vendingMachine}
                  alt="vending-machine"
                />
              </div>
              {isMinting ? (
                <progress className="my-4 home__progress-bar is-danger progress" />
              ) : (
                <progress
                  className="my-4 home__progress-bar is-danger progress"
                  value={itemsRemaining + ""}
                  max={itemsTotal}
                />
              )}
              <div className="home__mint-machine has-text-centered mt-5">
                <button
                  disabled={!isActive || isSoldOut || isMinting}
                  className={cx("button home__mint-button has-text-white", {
                    "is-loading": isMinting,
                    "is-invisible": !wallet.connected,
                    "home__mint-button--sold-out": isSoldOut,
                  })}
                  onClick={onMint}
                >
                  {!isSoldOut ? "Mint Now" : "Sold Out"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Snackbar
        open={alertState.open}
        // autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
          // severity="success"
        >
          <div className={cx("home__snackbar", {})}>
            {/* <img className='' src={logo} alt="success-mint-logo" /> */}
            {alertState.message}
          </div>
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Home;
