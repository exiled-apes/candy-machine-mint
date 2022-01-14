import {useEffect, useState} from "react";
import styled from "styled-components";
import 'roboto-regular';
import Countdown from "react-countdown";
import {Button, CircularProgress, Snackbar} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import {LAMPORTS_PER_SOL} from "@solana/web3.js";

import {useAnchorWallet} from "@solana/wallet-adapter-react";
import {WalletDialogButton} from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const Container = styled.div``; // add your styles here
const ConnectButton = styled(WalletDialogButton)``;
const CounterText = styled.span``; // add your styles here
const MintContainer = styled.div``; // add your styles here
const MintButton = styled(Button)``; // add your styles here

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
  const [itemsRemaining, setItemsRemaining] = useState(2222);

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

    <div className="header-banner bg-theme-dark has-ovm has-mask" id="home">
      <div className="nk-banner">
        <div className="banner banner-mask-fix banner-fs banner-single tc-light">
          <div className="banner-wrap ov-v">
            <div className="container">
              <div
                className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">

                <div className="col-lg-6">
                  <div className="banner-caption wide-auto text-center text-lg-left">
                    <div className="cpn-head mt-0">
                      <h1 className="title title-xl-2">Welcome to The Martian Army</h1>
                    </div>
                    <div className="cpn-text cpn-text-s1">
                      <p className="lead">
                        2,222 algorithmically generated Martian Soldiers from the 1st wave
                        of the return of the
                        Martian to Earth in the Solana blockchain.
                      </p>
                    </div>

                    <div id={"mint-box"} className={"cpn-btns"}>

                      <div
                        className={"token-status token-status-s5 bg-theme-alt round no-bd"}>
                        <p>
                          Be the first to Pre Mint our Martian Army!
                        </p>
                        {/*{wallet && ( <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p> )}*/}

                        {/*{wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}*/}

                        {/*{wallet && <p>Total Available: {itemsAvailable}</p>}*/}

                        {wallet && <p>Redeemed: {itemsRedeemed}</p>}

                        {wallet && <p>Remaining: {itemsRemaining}</p>}

                        <Container>
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
                                    date={startDate}
                                    onMount={({completed}) => completed && setIsActive(true)}
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
                            onClose={() => setAlertState({...alertState, open: false})}
                          >
                            <Alert
                              onClose={() => setAlertState({
                                ...alertState,
                                open: false
                              })}
                              severity={alertState.severity}
                            >
                              {alertState.message}
                            </Alert>
                          </Snackbar>

                        </Container>
                      </div
                      >
                    </div>

                  </div>
                </div>
                <div className="col-lg-5 col-sm-9">
                  <img src={'/images/martian-banner.gif'} ></img>
                </div>
                <div className="col-lg-12">
                  <br></br><br></br>
                  <div className="nk-block nk-block-token mgb-m30">
                    <div
                      className="row align-items-center justify-content-between gutter-vr-50px">
                      <div className="col-lg-12">
                        <div className="row gutter-vr-30px">
                          <div className="col-sm-4">
                            <div className="stage-info">
                              <h6 className="title title-s6 title-xs-s2">Minting
                                Begins</h6>
                              <p>
                                Feb 2 2022 09:00:00 GMT<br></br>
                              </p>
                              <a rel="nofollow"
                                 className="btn btn-sm btn-grad btn-round"
                                 href="https://savvytime.com/converter/gmt/Feb-2-2022/9-00am" target={"_blank"}>Convert
                                to your time</a>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="stage-info">
                              <h6 className="title title-s6 title-xs-s2">Remaining
                                Martians</h6>
                              <h2>{itemsRemaining}</h2>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="stage-info">
                              <h6 className="title title-s6 title-xs-s2">Price per
                                Mint</h6>
                              <h2>1 SOL</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({days, hours, minutes, seconds, completed}: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
