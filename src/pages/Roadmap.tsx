import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/common.module.css";
import roadmap from "../assets/roadmap/rdmp1.png";


const Roadmap = () => {
  return (
    <div className="rootColor">
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ paddingTop: "40px" }}
        >
          <div className="main">
            <h3>ENDANGERED Club NFT Roadmap</h3>
            {/* 
            <p>
              Your Shiba! Your Shiba! Your Shiba! Your Shiba!Your Shiba! Your
              Shiba! Your Shiba! Your Shiba! <br></br>
              Your Shiba! Your Shiba! Your Shiba! Your Shiba!
            </p> 
            
            
            

            */}
          </div>
        </Row>
        <Row>
          <Col className="rdmp1" md={6} sm={12}>
            <h1>ENDANGERED CLUB</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Roadmap;
