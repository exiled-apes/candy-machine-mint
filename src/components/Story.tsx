import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import './story.scss';

export interface StoryProps {
  title: string;
  text: string;
}

const Story = (props: StoryProps) => {
  return (
      <div id="story" className="story">
        <Container
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-5 h-100"
        >
          <Row className="h-100">
            <Col lg="12" className="">
              <div className="">
                <h1 className="title">
                  {props.title}
                </h1>
                <p className="subtitle">
                  {props.text}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Story;