import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/common.module.css";
import roadmap1 from "../assets/roadmap/roadmap1.png";
import blankmint from "../assets/avatars/blankmint.png";
import hbtn2 from "../assets/buttons/hbtn2.png";

const Roadmap = () => {
  return (
    <div className="rootColor">
      <Container>
        <Row className="justify-content-md-center">
          <div className="main">
            <h3>ENDANGERED Club NFT Roadmap</h3>
          </div>
        </Row>

        <div
          id="border-1"
          className="d-flex justify-content-center
"
        >
          <div className="bdr"></div>
          <div>
            <div className="roadmap-img">
              <img className="img-1" id="border" src={roadmap1} />

              <p className="rd-text1">
                <strong>01- First generation of Solba.</strong>
                <br></br> Launch all 10,000 algorithmically generated, Solba to
                our Endengered club.
              </p>
            </div>
            <div className="roadmap-img">
              <img className="img-1" id="border" src={roadmap1} />
              <p className="rd-text1">
                <strong> 02- Membership.</strong>
                <br></br>
                First Solba collection become the highest ranking membership for
                the Endangered clud ecosystem.
              </p>
            </div>
            <div className="roadmap-img">
              <img className="img-1" id="border" src={roadmap1} />
              <p className="rd-text1">
                <strong> 03- Endengered club token.</strong>
                <br></br>
                Exclusive Airdop END token to Solba holder. Let Solba holder be
                the first to enjoy verious benefits in the ecosystem.
              </p>
            </div>
            <div className="roadmap-img">
              <img className="img-1" id="border" src={roadmap1} />
              <p className="rd-text1">
                <strong>04-Marketplace integration.</strong>
                <br></br>
                Solba buy back system. Launching second collection.
              </p>
            </div>
            <div className="roadmap-img">
              <img className="img-1" id="border" src={roadmap1} />
              <p className="rd-text1">
                <strong>05- Exclusive Airdrop for all Gen2 holders.</strong>
                <br></br>
                Launch all 10,000 algorithmically generated,<br></br> Solba to
                our Endengered club.
              </p>
            </div>

            <div className="roadmap-img">
              <img className="img-1" id="border" src={roadmap1} />
              <p className="rd-text1">
                <strong> 06- Memefi ecosystem.</strong>
                <br></br>
                coming soon..
              </p>
            </div>
          </div>
        </div>

        <Row style={{ paddingTop: "60px", paddingBottom: "20px" }}>
          <Col md={12}>
            <img src={blankmint} height="70%" width="50%" />
            <div className="mainPad10">
              <img src={hbtn2} height="40" width="150" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Roadmap;
