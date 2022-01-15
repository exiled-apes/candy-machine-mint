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

// const main =require('./html-sections/main.html');
// <div dangerouslySetInnerHTML={{ __html: htmlText }} ></div>

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
    <div>
      <header className="nk-header page-header is-transparent is-sticky is-shrink is-dark has-fixed" id="header">

        <div className="header-main">
          <div className="header-container container">
            <div className="header-wrap">
              <div className="header-logo logo">
                <a href="#" className="logo-link">
                  <img className="logo-light" src="/images/logo.png" alt="logo"></img>
                </a>
              </div>
              <div className="header-nav-toggle">
                <a href="/#" className="navbar-toggle" data-menu-toggle="example-menu-04">
                  <div className="toggle-line">
                    <span></span>
                  </div>
                </a>
              </div>
              <div className="header-navbar header-navbar-s1">
                <nav className="header-menu" id="example-menu-04">
                  <ul className="menu menu-s2">
                    <li className="menu-item"><a className="menu-link nav-link" href="#home">Pre-Mint</a></li>
                    <li className="menu-item"><a className="menu-link nav-link" href="#about">About</a></li>
                    <li className="menu-item"><a className="menu-link nav-link" href="#roadmap">Roadmap</a></li>
                    <li className="menu-item"><a className="menu-link nav-link" href="#team">Team</a></li>
                    <li className="menu-item"><a className="menu-link nav-link" href="#faq">FAQ</a></li>
                    <li className="menu-item"><a target="_blank" href="https://discord.gg/"><em
                      className="fab fa-discord"></em></a></li>
                    <li className="menu-item"><a target="_blank" href="https://twitter.com/"><em
                      className="fab fa-twitter"></em></a></li>
                    <li className="menu-item"><a target="_blank" href="https://www.instagram.com/"><em
                      className="fab fa-instagram"></em></a></li>
                  </ul>
                </nav>
                <div className="header-navbar-overlay"></div>
              </div>
            </div>
          </div>
        </div>

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
                                  <ConnectButton className={"btn btn-md btn-grad btn-round"}>Connect Wallet</ConnectButton>
                                ) : (
                                  <button
                                    disabled={isSoldOut || isMinting || !isActive}
                                    onClick={onMint}
                                    variant="contained"
                                    className={"btn btn-md btn-grad btn-round"}
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
                                  </button>
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
                      <img src={'/images/martian-banner.gif'}></img>
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
                                  <h6 className="title title-s6 title-xs-s2">Price Pre-Mint</h6>
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
      </header>
      <main className="nk-pages">
        <section id="about" className="section bg-white py-0 ov-h">
          <div className="container">
            <div className="nk-block nk-block-features-2">
              <div className="row align-items-center gutter-vr-30px justify-content-center justify-content-md-between">
                <div className="col-mb-9 col-sm-7 col-md-6 col-lg-5">
                  <div className="gfx py-4">
                    <img src="/images/martian-banner.gif" width="500px" height="500px"/>
                  </div>
                </div>
                <div className="        col-sm-10 col-md-6 text-center text-md-left">
                  <div className="nk-block-text">
                    <h4 className="title title-lg">About The Martian Army?</h4>
                    <p className="lead text-uppercase"><b>Who are the Martians?</b></p>
                    <p className="lead">
                      In 2033 comet E-Hele Kaua flew dangerously close to the planet of Mars depositing Sigma radiation
                      and
                      massive deposits of the rare mineral, <b>hardtofindium</b> . With the discovery of hardtofindium
                      deposits, humans of the World descended upon the apparently desolate planet of Mars seeking the
                      prized
                      material. The potential wealth attracted thousands of prospectors from the World and as they
                      scattered
                      throughout the Martian landscape, they found unimaginable horrors.
                    </p>
                    <p className="lead">
                      Somewhere on the Martian surface, someone carelessly drilled too deeply into a cavern that was
                      never
                      meant to be opened. And upon its finding, the ancient and horrifying creatures within spilled
                      forth.
                      The Martian hordes poured from the cavity in the millions, a people long lost to time and space.
                      It
                      was true, Mars had been inhabited by intelligent life. And now their home world was under invasion
                      by
                      disgusting creatures from another world.
                    </p>
                    <p className="lead">
                      Martians gathered in ancient spaceships, long kept dormant and they departed for the World. When
                      they
                      arrived, President of the World, Johnny Manchego did everything he could to negotiate a peaceful
                      conclusion to the sleight, but the Martians could not be reasoned with.
                    </p>
                    <p className="lead">
                      And so began the invasion of the Martian Army.
                    </p>

                    <p className="lead text-uppercase"><b>What are Martian's weapons?</b></p>
                    <p className="lead">
                      The Martian Army first wave possesses many weapons and uniforms the first army sent to
                      scout are made of 2,222 unique different versions.
                    </p>

                    <p className="lead text-uppercase"><b>What is The Martion Army?</b></p>
                    <p className="lead">
                      The Martian Army is a collection of 2,222 randomly generated 512x512
                      pixels NFTs on the Solana Blockchain. Each Martian is unique and comes with different
                      traits and attributes varying in rarity.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="economics" className="section section-tokensale tc-light bg-theme">
          <div className="container">
            <div className="section-head text-center wide-auto">
              <h3 className="title title-s4"
                  title=" Create an exclusive community to support the return of the Martians, Which side are you?">
                Create an exclusive community to support the return of the Martians</h3>
              <p className="p1">
                <b>What will permanently drive up a collections value?</b></p>
              <p className="p1">
                <b>We believe there are three types of NFT buyers:</b></p>

              <table cellSpacing="0" cellPadding="0" className="t1">
                <tbody>
                <tr>
                  <td valign="top" className="td1">
                    <p className="p1">
                      <b>Type</b></p></td>
                  <td valign="top" className="td1">
                    <p className="p1">
                      <b>Reason for purchase</b></p></td>
                  <td valign="top" className="td1">
                    <p className="p1">
                      <b>Investment duration</b></p></td>
                </tr>
                <tr>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Collectors</p></td>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Buy cause we like the art - we are never selling</p></td>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Infinite
                      <span className="s1">♾</span><span
                      className="Apple-converted-space">&nbsp;</span></p></td>
                </tr>
                <tr>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Investors<span className="Apple-converted-space">&nbsp;</span></p></td>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Buy with the intent to eventually sell for profit</p></td>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Short or Long term<span className="Apple-converted-space">&nbsp;</span></p></td>
                </tr>
                <tr>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Flippers</p></td>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Buy with the intent to flip to pay next months rent<span
                      className="Apple-converted-space">&nbsp;</span></p></td>
                  <td valign="top" className="td1">
                    <p className="p1">
                      Guaranteed short term<span className="Apple-converted-space">&nbsp;</span></p></td>
                </tr>
                </tbody>
              </table>


            </div>

          </div>
        </section>

        <section id="roadmap" className="section section-roadmap bg-theme tc-light">
          <div className="container">

            <div className="section-head text-center wide-auto">
              <h2 className="title title-s4">Our Roadmap</h2>
            </div>
            <div className="nk-block nk-block-roadmap">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="roadmap-wrap">
                    <div className="roadmap-line"></div>
                    <div className="roadmap roadmap-right ">
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">February 2022</span>
                          <span className="roadmap-title">Launch Martian Army</span>
                        </div>
                        <p>Launch 2,222 martians to the community for pre-sale..
                        </p></div>
                    </div>
                    <div className="roadmap roadmap-left">
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">March 2022</span>
                          <span className="roadmap-title">Listing on Secondary Markets</span>
                        </div>
                        <p>We will list on Alpha.art and Magic Eden and others.</p></div>
                    </div>
                    <div className="roadmap roadmap-right">
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">April 2022</span>
                          <span
                            className="roadmap-title">Create a verified Martians holder channel - The Martians</span>
                        </div>
                        <p>A discord channel dedicated&nbsp;to floor discussion, networking, education,
                          meet-ups, exclusive holder events etc.<br></br></p></div>
                    </div>
                    <div className="roadmap roadmap-left">
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">May 2022</span>
                          <span className="roadmap-title">Launch Rarity on website</span>
                        </div>
                        <p>Rarity:
                        </p>
                        <p> To be determined by random Algorithm</p>
                      </div>
                    </div>
                    <div className="roadmap roadmap-right ">
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">June 2022</span>
                          <span className="roadmap-title">Martian Army Stargate Launch</span>
                        </div>
                        <ul>
                          <li>- Stargate Web 3.0</li>
                          <li>- Exclusive access to Stargate web if you own at least 1 Martian </li>
                          <li>- Vote for the releases</li>
                          <li>- Early access to future collections</li>
                        </ul>
                      </div>
                    </div>
                    <div className="roadmap roadmap-left ">
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">July 2022</span>
                          <span className="roadmap-title">Metaverse Stargate launch</span>
                        </div>
                        <ul>
                          <li>- Metaverse launch</li>
                          <li>- Merch drop!</li>
                        </ul>
                      </div>
                    </div>
                    <div className="roadmap roadmap-right ">
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">Q3 2022</span>
                          <span className="roadmap-title">It’s time for the Martian Army to evolve</span>
                        </div>
                        <p><br></br></p></div>
                    </div>
                    <div className="roadmap roadmap-left ">
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">Q4 2022</span>
                          <span className="roadmap-title">The 2nd wave of the Martian Army is Arriving</span>
                        </div>
                        <p><br></br></p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="team" className="section bg-theme tc-light ov-h">
          <div className="container">
            <div className="section-head section-head-sm text-center wide-auto-sm">
              <h2 className="title title-s4" title="Our Team">Our Team</h2>
            </div>
            <div className="nk-block nk-block-team-list team-list">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-mb-6">
                  <div className="team team-s3 team-s3-alt">
                    <div className="team-photo round-full team-photo-bg">
                      <img src="/images/martian_army/0.png" alt="" className="round-full"></img>
                    </div>
                    <h5 className="team-name title title-sm">Lord Martian</h5>
                    <span className="team-position">Founder</span>
                  </div>
                </div>
                <div className="col-lg-3 col-mb-6">
                  <div className="team team-s3 team-s3-alt">
                    <div className="team-photo round-full team-photo-bg">
                      <img src="/images/martian_army/1.png" alt="" className="round-full"></img>
                    </div>
                    <h5 className="team-name title title-sm">Dr Ordep</h5>
                    <span className="team-position">Chief Technical Officer</span>
                  </div>
                </div>
                <div className="col-lg-3 col-mb-6">
                  <div className="team team-s3 team-s3-alt">
                    <div className="team-photo round-full team-photo-bg">
                      <img src="/images/martian_army/2.png" alt="" className="round-full"></img>
                    </div>
                    <h5 className="team-name title title-sm">Lord Tranton</h5>
                    <span className="team-position">Chief Marketing Officer</span>
                  </div>
                </div>
                <div className="col-lg-3 col-mb-6">
                  <div className="team team-s3 team-s3-alt">
                    <div className="team-photo round-full team-photo-bg">
                      <img src="/images/martian_army/3.png" alt="" className="round-full"></img>
                    </div>
                    <h5 className="team-name title title-sm">Sir Masanoni</h5>
                    <span className="team-position">Metaverse Architect</span>
                  </div>
                </div>
                <div className="col-lg-3 col-mb-6">
                  <div className="team team-s3 team-s3-alt">
                    <div className="team-photo round-full team-photo-bg">
                      <img src="/images/martian_army/4.png" alt="" className="round-full"></img>
                    </div>
                    <h5 className="team-name title title-sm">Ms PeKrung</h5>
                    <span className="team-position">Moderator</span>
                  </div>
                </div>
                <div className="col-lg-3 col-mb-6">
                  <div className="team team-s3 team-s3-alt">
                    <div className="team-photo round-full team-photo-bg">
                      <img src="/images/martian_army/5.png" alt="" className="round-full"></img>
                    </div>
                    <h5 className="team-name title title-sm">Mr Iniflolis</h5>
                    <span className="team-position">Moderator</span>
                  </div>
                </div>
                <div className="col-lg-3 col-mb-6">
                  <div className="team team-s3 team-s3-alt">
                    <div className="team-photo round-full team-photo-bg">
                      <img src="/images/martian_army/6.png" alt="" className="round-full"></img>
                    </div>
                    <h5 className="team-name title title-sm">Grekoporis</h5>
                    <span className="team-position">Moderator</span>
                  </div>
                </div>
                <div className="col-lg-3 col-mb-6">
                  <div className="team team-s3 team-s3-alt">
                    <div className="team-photo round-full team-photo-bg">
                      <img src="/images/martian_army/7.png" alt="" className="round-full"></img>
                    </div>
                    <h5 className="team-name title title-sm">Hiposume</h5>
                    <span className="team-position">Moderator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="nk-footer bg-theme-alt">
        <div id="footer" className="section section-m pb-0 tc-light ov-h has-ovm">
          <div className="container py-4">
            <div className="nk-block pb-lg-5">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6 col-md-9">
                  <div className="wide-auto-sm section-head section-head-sm pdb-r">
                    <h4 className="title title-md">Stay up to date with our project</h4>
                  </div>
                  <p>Join our communities.</p></div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="wgs wgs-text text-center mb-3">
                    <ul className="social pdb-m justify-content-center">
                      <li><a target="_blank" href="https://discord.gg/zBBaT3kbNN"><em
                        className="social-icon fab fa-discord"></em></a></li>
                      <li><a target="_blank" href="https://twitter.com/MonkeyKingdom_"><em
                        className="social-icon fab fa-twitter"></em></a></li>
                      <li><a target="_blank" href="https://www.instagram.com/monkeykingdom_/"><em
                        className="social-icon fab fa-instagram"></em></a></li>
                    </ul>
                    <div className="copyright-text copyright-text-s3 pdt-m">
                      <p><span className="d-sm-block">Copyright © 2022, Martian Army ☁️. </span>All
                        trademarks and copyrights belong to their respective owners.</p>
                      <p>
                        <a href="https://solana.com/" target="_blank" >
                          Built on the <img alt="" src="solana-sol-logo.svg" className={"solanaimg"}></img>
                          Solanablockchain.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = (
  {
    days, hours, minutes, seconds, completed
  }
    : any) => {
    return (
      <CounterText>
        {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
      </CounterText>
    );
  }
;

export default Home;
