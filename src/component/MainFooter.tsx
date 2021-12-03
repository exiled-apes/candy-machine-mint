import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import sollamaslogodark from "../assets/avatars/logow.png";
import joinus from "../assets/avatars/joinus.png";
import discords from "../assets/buttons/discords.png";
import { Link } from "react-router-dom";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

const MainFooter = () => {
  return (
    <footer className="">
      <Container fluid>
        <Row style={{ paddingTop: "40px", paddingBottom: "20px" }}>
          <Col md={6}>
            <a href="https://endangeredclub.com/">
              <img src={sollamaslogodark} height="80" width="300" />
            </a>
            <div style={{ padding: "20px" }}>
              <p>
                Connect us on Twitter and discord for airdrop of Solba,
                <br /> keep on track with Endangered Club’s development
              </p>
            </div>
            <div style={{ float: "left", padding: "20px" }}>
              <a href="https://twitter.com/SolbaNFT">
                <img src={joinus} alt="" height="50" width="150" />
              </a>

              {/* <div className="icons">
                <div className="icon">
                  <AiFillTwitterSquare />
                </div>
                <div className="icon">
                  <AiOutlineInstagram />
                </div>
                <div className="icon">
                  <BsDiscord />
                </div>
              </div> */}
            </div>

            <div style={{ float: "left", padding: "16px 0px 0px 30px" }}>
              <a href="https://discord.gg/sWVvKXKX">
                <img src={discords} alt="" height="60" width="60" />
              </a>
            </div>
          </Col>

          <Col md={6}>
            <Container>
              <Row>
                <Col md={6} style={{ textAlign: "left" }}>
                  <h4 style={{ color: "#5bef5b" }}>ENDANGERED CLUB</h4>
                  <Nav style={{ textAlign: "left" }}>
                    <Link
                      className="col-md-12 col-sm-12 footlink"
                      to="/"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Solaba Home
                    </Link>

                    <a
                      href="https://endangeredclub.com/"
                      className="col-md-12 col-sm-12 footlink"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Endangered Club Home
                    </a>

                    <Link
                      className="col-md-12 col-sm-12 footlink"
                      to="/roadmap"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Roadmap
                    </Link>
                    <Link
                      className="col-md-12 footlink"
                      to="/"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Buy a Solba
                    </Link>
                  </Nav>
                </Col>
                <Col md={6} style={{ textAlign: "left" }}>
                  <h4 style={{ color: "#5bef5b" }}>SUPPORT</h4>
                  <Nav style={{ textAlign: "left" }}>
                    <Nav.Link
                      href="/"
                      className="col-md-12"
                      style={{ color: "#FFF" }}
                    >
                      FAQ
                    </Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MainFooter;
