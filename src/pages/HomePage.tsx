import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import hbtn1 from "../assets/buttons/hbtn1.png";
import hbtn2 from "../assets/buttons/hbtn2.png";
import hbtn3 from "../assets/buttons/hbtn3.png";
import cardsingle_nft from "../assets/avatars/cardsingle-nft.png";
import cardpack from "../assets/avatars/cardpack.png";
import prettyface from "../assets/avatars/prettyface.png";
import attributes from "../assets/avatars/attributes.png";
import rareboiz from "../assets/avatars/rareboiz.png";
import sollanallama from "../assets/avatars/sollanallama.png";
import blankmint from "../assets/avatars/blankmint.png";
import MainNavbar from "../component/MainNavbar";
import MainFooter from "../component/MainFooter";
import smp from "../assets/avatars/smp.jpg";
const HomePage = () => {
  return (
    <>
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ paddingTop: "60px" }}
        >
          <div className="main">
            <h1>What are Solba !</h1>
            <p>
              Shiba Inu has risen in the endangered world! There are 10,000
              uniquely generated Shiba Inu (“Solba”) on Solana blockchain.
              <br />
              Have a Solba will bring you membership of Endangered Club (“END”),
              <br />
              which is a new era crypto pop culture brand
              <br />
            </p>
          </div>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ paddingBottom: "20px" }}
        >
          <Col md={6}>
            <img
              src={hbtn2}
              height="40"
              width="150"
              style={{ padding: "inherit" }}
            ></img>
            <img
              src={hbtn3}
              height="40"
              width="150"
              style={{ padding: "inherit" }}
            ></img>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ overflowX: "hidden" }}>
        <Row>
          <div className="slider centeredItem">
            <div
              className="sliderRow"
              // style={{ backgroundImage: `url("${smp}")` }}
            >
              <img src={smp} alt="" height="200" />
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <div>
          <Row style={{ paddingTop: "60px", paddingBottom: "20px" }}>
            <Col md={12}>
              <div className="main">
                <h1>Mint a Solba</h1>
                <p>
                  Shiba Inu is a friendly and cute doggie. They come to Solana
                  Blockchain as Solba. <br />
                  Mint a Solba by connecting your Phantom, Sollet or other
                  wallets.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={8} className="centeredItem">
            <img src={cardsingle_nft} height="60%" width="60%" />
            <h2 style={{ fontWeight: "bold", color: "yellow" }}>Your Solba!</h2>
            <p style={{ fontSize: "large" }}>
              1x Shiba NFT <br></br>4 SOL{" "}
              <span>
                <img src={hbtn1} alt="" height="20px" width="20px" />
              </span>
              <br></br>= 4 SOL per NFT
            </p>
          </Col>          
        </Row>
        <Row style={{ paddingTop: "60px" }}>
          <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="main">
              <h1>More than Shiba</h1>
              <p>
                All Solba are equal but has different rarities ranging.
                <br /> From the ultra-rare 'Artifact' to 'Unusual', every Solba
                are the best collectable on Solana. <br />
                Hold on to Shiba, hold onto a ticket to become a member of
                Endangered club.
              </p>
            </div>
          </Col>
          <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
            <img src={prettyface} height="90%" width="90%" max-height="750px" />
          </Col>
        </Row>
        <Row style={{ paddingTop: "60px" }}>
          <Col md={6}>
            <img src={attributes} height="90%" width="90%" max-height="750px" />
          </Col>
          <Col md={6}>
            <div className="main">
              <h1>Unique Solba</h1>
              <p>
                The backgrounds, side items, body pattern, tails is unique and
                programmatically generated ,<br /> and other attributes make
                each Solba unique and different from other NFTs you have seen.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "60px", paddingBottom: "20px" }}>
          <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
            <div className="main">
              <h1>Solba in the Endangered world</h1>
              <p>
                The well designed backgrounds and side items designed by our
                talented artists give life to each uniquely created Solba.
              </p>
            </div>
          </Col>
          <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 1 }}>
            <img src={rareboiz} height="100%" width="90%" />
          </Col>
        </Row>
        <Row style={{ paddingTop: "60px", paddingBottom: "20px" }}>
          <Col md={6}>
            <img src={sollanallama} height="90%" width="80%" />
          </Col>
          <Col md={6}>
            <div className="main">
              <h1>Solba on Solana</h1>
              <p>
                You like Shiba Inu? Come to Solana! <br />
                Solba take place of the Shiba Inu collection with high
                collective value
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "60px", paddingBottom: "20px" }}>
          <Col md={12}>
            <img src={blankmint} height="70%" width="50%" />
            <div className="mainPad10">
              <img src={hbtn2} height="40" width="150" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
