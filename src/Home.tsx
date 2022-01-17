import { useEffect, useMemo, useState, useCallback } from 'react';
import * as anchor from '@project-serum/anchor';

import styled from 'styled-components';
import 'roboto-regular';
import {Container, Snackbar} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
} from './candy-machine';
import { AlertState } from './utils';
import { Header } from './Header';
import { MintButton } from './MintButton';
import { GatewayProvider } from '@civic/solana-gateway-react';

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const MintContainer = styled.div`
  
`; // add your owns styles here

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  });

  const rpcUrl = props.rpcHost;
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const refreshCandyMachineState = useCallback(async () => {
    if (!anchorWallet) {
      return;
    }

    if (props.candyMachineId) {
      try {
        const cndy = await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection,
        );
        setCandyMachine(cndy);
      } catch (e) {
        console.log('There was a problem fetching Candy Machine state');
        console.log(e);
      }
    }
  }, [anchorWallet, props.candyMachineId, props.connection]);

  const onMint = async () => {
    try {
      setIsUserMinting(true);
      document.getElementById('#identity')?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            true,
          );
        }

        if (status && !status.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          });
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          });
        }
      }
    } catch (error: any) {
      let message = error.msg || 'Minting failed! Please try again!';
      if (!error.msg) {
        if (!error.message) {
          message = 'Transaction Timeout! Please try again.';
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      setIsUserMinting(false);
    }
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
    refreshCandyMachineState,
  ]);

  return (
    <div>
      <header className="nk-header page-header is-transparent is-sticky is-shrink is-dark has-fixed" id="header">

        <div className="header-main">
          <div className="header-container container">
            <div className="header-wrap">
              <div className="header-logo logo">
                <a href="/#" className="logo-link">
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
                    <li className="menu-item"><a target="_blank" href="https://discord.gg/" rel="noreferrer"><em
                      className="fab fa-discord"></em></a></li>
                    <li className="menu-item"><a target="_blank" href="https://twitter.com/" rel="noreferrer"><em
                      className="fab fa-twitter"></em></a></li>
                    <li className="menu-item"><a target="_blank" href="https://www.instagram.com/" rel="noreferrer"><em
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
                    className="row align-items-center justify-content-center justify-content-lg-between">

                    <div className="col-lg-6" style={{padding: 0}}>
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
                            className={"token-status bg-theme-alt round no-bd"}>
                            <p>
                              Be the first to Pre Mint our Martian Army!
                            </p>
                            <Container >
                              <Container maxWidth="xs" style={{ position: 'relative' }}>
                                <Paper
                                  style={{ padding: 15, backgroundColor: '#151A1F', borderRadius: 6 }}
                                >
                                  {!wallet.connected ? (
                                    <ConnectButton>Connect Wallet</ConnectButton>
                                  ) : (
                                    <>
                                      <Header candyMachine={candyMachine} />
                                      <MintContainer>
                                        {candyMachine?.state.isActive &&
                                        candyMachine?.state.gatekeeper &&
                                        wallet.publicKey &&
                                        wallet.signTransaction ? (
                                          <GatewayProvider
                                            wallet={{
                                              publicKey:
                                                wallet.publicKey ||
                                                new PublicKey(CANDY_MACHINE_PROGRAM),
                                              //@ts-ignore
                                              signTransaction: wallet.signTransaction,
                                            }}
                                            gatekeeperNetwork={
                                              candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                                            }
                                            clusterUrl={rpcUrl}
                                            options={{ autoShowModal: false }}
                                          >
                                            <MintButton
                                              candyMachine={candyMachine}
                                              isMinting={isUserMinting}
                                              onMint={onMint}
                                            />
                                          </GatewayProvider>
                                        ) : (
                                          <MintButton
                                            candyMachine={candyMachine}
                                            isMinting={isUserMinting}
                                            onMint={onMint}
                                          />
                                        )}
                                      </MintContainer>
                                    </>
                                  )}
                                </Paper>
                              </Container>

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
                            </Container>


                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-lg-5 col-sm-9">
                      <img src={'/images/martian-banner.gif'} alt="Martian banner for front page" width='110%'></img>
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
                                  <a  rel="noreferrer"
                                     className="btn btn-sm btn-grad btn-round"
                                     href="https://savvytime.com/converter/gmt/Feb-2-2022/9-00am" target={"_blank"}>Convert
                                    to your time</a>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="stage-info">
                                  <h6 className="title title-s6 title-xs-s2">Remaining
                                    Martians</h6>
                                  <h2>2222</h2>
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
                    <img src="/images/martian-banner.gif" width="500px" height="500px" alt="martian banner for pre minting"/>
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
                      <li><a target="_blank" href="https://discord.gg/zBBaT3kbNN"  rel="noreferrer"><em
                        className="social-icon fab fa-discord"></em></a></li>
                      <li><a target="_blank" href="https://twitter.com/MonkeyKingdom_"  rel="noreferrer"><em
                        className="social-icon fab fa-twitter"></em></a></li>
                      <li><a target="_blank" href="https://www.instagram.com/monkeykingdom_/"  rel="noreferrer"><em
                        className="social-icon fab fa-instagram"></em></a></li>
                    </ul>
                    <div className="copyright-text copyright-text-s3 pdt-m">
                      <p><span className="d-sm-block">Copyright © 2022, Martian Army ☁️. </span>All
                        trademarks and copyrights belong to their respective owners.</p>
                      <p>
                        <a href="https://solana.com/" target="_blank" rel="noreferrer">
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

export default Home;
