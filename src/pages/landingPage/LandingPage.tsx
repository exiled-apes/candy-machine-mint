import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./landingPage.css";
import header_image from "../../assets/header_image.jpg";
import header_image_wb from "../../assets/header_image_wb.jpg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import nft from "../../assets/products/nft.jpg";
import mm from "../../assets/products/mm.jpg";
import ap from "../../assets/products/ap.jpg";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="header">
        <picture>
            <source srcSet={header_image} media="(max-width: 768px)"/>
        <img src={header_image_wb} alt="" className="header-title" />
        </picture>
      </div>
      <div className="section">
        <h1 className="section-title">
          End is the Beginning of
          <br /> a new era - a new vibe of
          <br /> the digital work
        </h1>
        <p className="section-text">
          Endangered Club (END) is a crypto pop brand inspired by endangered
          spacies on the earth.
          <br />
          END is an NFT & MEME-oriented project, with comprehensive ecosystem{" "}
          <br />
          consists of NFT, apparel store and MemeFi. <br />
          Enter the new digital lifestyle by holding on the END NFT and END
          token.
        </p>
      </div>
      <Container>
        <Row>
          <Col lg={4} className="cards d-flex align-items-stretch">
            <div className="card">
              <img src={nft} alt="" className="img" />
              <p className="card-text">
                Cros-chain unique digital collections created by talented
                arttsts. END NFT's are membership access to all benefits from
                the END ecosystem. <br />
                The initial collections are tickets to get rare NFT's in the
                future-inspired by endangered species and crypto meme culture.{" "}
                <br />
              </p>
            </div>
          </Col>
          <Col lg={4} className="cards d-flex align-items-stretch">
            <div className="card">
              <img src={ap} alt="" className="img" />
              <p className="card-text">
                Endangered club created this designer brand to support
                endangered spacies, and give back to nature, a lifestyle of you
                are what you love. <br />
                Our ecosystem is dedicated to the designing a long-term benefits
                for END NFT and token holders. <br />
              </p>
            </div>
          </Col>
          <Col lg={4} className="cards d-flex align-items-stretch">
            <div className="card">
              <img src={mm} alt="" className="img" />
              <p className="card-text">
                Meme is the digital world's pop culture-MemeFi, a unique
                function created by END which brings the MEME idea to Gamefi and
                Defi world. <br />
                Futhermore, endangered club is implementing the play-to-earn
                concept based on END NFT holder to boost the digital world pop
                culture in the near future.
                <br />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <div className="icons">
          <div className="icon">
            <AiFillTwitterSquare />
          </div>
          <div className="icon">
            <AiOutlineInstagram />
          </div>
          <div className="icon">
            <BsDiscord />
          </div>
        </div>
        <p className="footer-text">@ 2022 ENDANGERED CLUB ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default LandingPage;
