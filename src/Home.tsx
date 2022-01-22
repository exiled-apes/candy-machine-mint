import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

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

import tableImage from './assets/images/table.jpg';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  min-height: 85vh;
  background-color: #000;
  position: relative;
`;

const ConnectButton = styled(WalletDialogButton)`
  z-index: 200;
  display: block;
  width: fit-content;
  background: #870101 !important;
  font-size: 36px !important;
  line-height: 1.2;
  padding: 10px 20px !important;
  font-family: "Corleone" !important;
  font-weight: 300 !important;
`;

const CounterText = styled.span``;

const MintContainer = styled.div`
  z-index: 200;
  width: fit-content;
  margin: 20px auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  @media (min-width: 600px){
  bottom: 380px;}
  @media (min-width: 920px){
  bottom: 460px;}
  @media (min-width: 1440px){
  bottom: 510px;}
`;

const MintButton = styled(Button)`
  display: block;
  z-index: 200;
  width: fit-content;
  background: #870101 !important;
  font-size: 36px !important;
  line-height: 1.2;
  padding: 10px 20px !important;
  font-family: "Corleone" !important;
  font-weight: 300 !important;
  span {
    color: #fff;
    font-size: 36px !important;
    line-height: 1.2;
    padding: 10px 20px !important;
    font-family: "Corleone" !important;
    font-weight: 300 !important;
    letter-spacing: 4px;
    text-transform: none;
}
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px auto;
  color: #870101;
  font-size: 3rem;
  font-family: "Corleone";
  font-weight: 300;
  letter-spacing: 4px;
  @media (min-width: 768px){
  font-size: 6rem;}
`;

const Image = styled.img`
  display: block;
  margin: 20px auto;
  max-width: 100%
`;
const InfoBoard = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: -55px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 30px;
  z-index: 100;
  @media (min-width: 768px){
  top: 520px;}
  @media (min-width: 920px){
    top: 610px;
  }
  @media (min-width: 1440px){
    top: 630px;
  }
  p {
    margin: 0;
    font-family: "Corleone";
    font-size: 1rem;
    font-width: 100;
    letter-spacing: 3px;
    line-height: 1.5;
    text-align: center;
  }
`;

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
    <Main>
      <InfoBoard>

        {wallet && (
          <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
        )}

        {wallet && <p>Your Wallet Balance: {(balance || 0).toLocaleString()} SOL</p>}

        {/* {wallet && <p>Total Left: {itemsAvailable}</p>} */}

        {wallet && <p>Minted: {itemsRedeemed} / {itemsAvailable}</p>}

        {/* {wallet && <p>Left to Mint: {itemsRemaining}</p>} */}

      </InfoBoard>

      <Title>La Famiglia<br /> Minting Ceremony</Title>

      <Image src={tableImage} alt="mafia accessories" />

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
              "Sold Out"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "Mint"
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
    </Main>
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
