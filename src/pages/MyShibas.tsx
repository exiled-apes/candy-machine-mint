import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/common.module.css";
import RarityDistribution from "../assets/avatars/RarityDistribution.png";
import blankmint from "../assets/avatars/blankmint.png";
import sollamaslogodark from "../assets/avatars/sollamaslogodark.png";
import hbtn2 from "../assets/buttons/hbtn2.png";


const MyShibas = () => {
  return (
    <div className="rootColor">
      <Container>
        <Row style={{ padding: "40px" }}>
          <div className="main">
            <h1>
              <strong>Attributes, Items and Backdrops</strong>
              <br />
              <strong>
                <br />
              </strong>
            </h1>

            <p>
              Your Shiba! Your Shiba! Your Shiba! Your Shiba! Your Shiba! Your
              Shiba! Your Shiba! Your Shiba!Your Shiba!&nbsp; <br />
              YourShiba!&nbsp;Your Shiba!&nbsp;Your Shiba!&nbsp;Your
              Shiba!&nbsp;Your Shiba!
            </p>
          </div>
        </Row>
        ​
        <Row style={{ padding: "40px" }}>
          <Col md={12}>
            <img
              src={RarityDistribution}
              alt=""
              height="100%"
              width="100%"
            ></img>
          </Col>
        </Row>
        <Row style={{ padding: "40px" }}>
          <Col md={12}>
            <div style={{ paddingTop: "100px" }}>
              <img src={blankmint} alt="" height="80%" width="60%"></img>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <img src={hbtn2} alt="" height="50" width="150"></img>
            </div>
          </Col>
        </Row>
        ​
        <Row style={{ padding: "40px" }}>
          ​ ​
          <div>
            <div>
              <img src={sollamaslogodark} alt="" width="50%"></img>
            </div>
            <div>
              <p>
                Your Shiba! Your Shiba! Your Shiba! Your Shiba! Your Shiba! Your
                Shiba! Your Shiba! Your Shiba!Your Shiba! Your Shiba! <br />
                Your Shiba! Your Shiba! Your Shiba! Your Shiba!
              </p>
            </div>
            ​
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyShibas;
