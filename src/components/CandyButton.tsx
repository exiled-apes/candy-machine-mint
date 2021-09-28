import {
  awaitTransactionSignatureConfirmation,
  CandyMachine,
  getCandyMachineState,
  mintOneToken,
  shortenAddress
} from "../candy-machine";
import {Button, CircularProgress} from "@material-ui/core";
import Countdown from "react-countdown";
import styled from "styled-components";
import {WalletDialogButton} from "@solana/wallet-adapter-material-ui";
import * as anchor from "@project-serum/anchor";
import React, {useEffect, useState} from "react";
import {useAnchorWallet} from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL} from "@solana/web3.js";
import AlertState from "./CandyAlertState";

const ConnectButton = styled(WalletDialogButton)``;
const CounterText = styled.span``; // add your styles here
const MintContainer = styled.div``; // add your styles here
const MintButton = styled(Button)``; // add your styles here

export interface CandyButtonProps {
  setAlertState: React.Dispatch<React.SetStateAction<AlertState>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  alertState: AlertState;
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: Date;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}


const CandyButton = (props: CandyButtonProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

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
          props.setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          props.setAlertState({
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

      props.setAlertState({
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

  useEffect(() => {
    (async () => {
      if (!wallet) return;

      const {candyMachine, goLiveDate, itemsRemaining} =
          await getCandyMachineState(
              wallet as anchor.Wallet,
              props.candyMachineId,
              props.connection
          );

      setIsSoldOut(itemsRemaining === 0);
      props.setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  return (
      <div>
        {wallet && (<p>Address: {shortenAddress(wallet.publicKey.toBase58() || "")}</p>)}
        {
          wallet && (
              <p>Balance: {(balance || 0).toLocaleString()} SOL</p>
          )
        }

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
                        <CircularProgress/>
                    ) : (
                        "MINT"
                    )
                ) : (
                    <Countdown
                        date={props.startDate}
                        onMount={({completed}) => completed && setIsActive(true)}
                        onComplete={() => setIsActive(true)}
                        renderer={renderCounter}
                    />
                )}
              </MintButton>
          )}
        </MintContainer>
      </div>
  );
}

const renderCounter = ({days, hours, minutes, seconds, completed}: any) => {
  return (
      <CounterText>
        {hours} hours, {minutes} minutes, {seconds} seconds
      </CounterText>
  );
};

export default CandyButton;