import Config from '../config/Config';
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import RoadMapElement from "./RoadMapElement";
import './roadmap.scss';

export interface RoadMapContainerProps {
  roadMapTitle: string;
}

const RoadMapContainer = (props: RoadMapContainerProps) => {

  return (
      <div id="roadmap" className="roadmap">
        <Container className=" h-100">
          <Row className=" h-100">
            <Col lg="12" className="">
              <div className="">
                <h1
                    data-aos="fade-in"
                    data-aos-duration="2000"
                    className="title text-uppercase"
                >
                  {props.roadMapTitle}
                </h1>
                {
                  Config.roadMap.map((item, index) => {
                    return <RoadMapElement
                        key={index}
                        textLeft={item.textLeft}
                        textRight={item.textRight}
                    />
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default RoadMapContainer;