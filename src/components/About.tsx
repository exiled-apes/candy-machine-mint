import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import './about.scss';

export interface AboutProps {
  name: string;
  image: string;
  text: string;
}

const About = (props: AboutProps) => {
  return (
      <div id="about" className="about">
        <Container className=" h-100">
          <Row className=" h-100">
            <Col
                lg="6"
                className="d-flex align-items-center justify-content-center"
                data-aos="fade-right"
                data-aos-duration="2000"
            >
              <div className="aboutimg">
                <img className="img-fluid about-img" src={props.image} alt=""/>
              </div>
            </Col>
            <Col
                lg="6"
                className="d-flex align-items-center"
                data-aos="fade-left"
                data-aos-duration="2000"
            >
              <div className="about-text">
                <h1 className="title text-uppercase">
                  What is {props.name}?
                </h1>
                <p className="mt-3 subtitle">
                  {props.text}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default About;