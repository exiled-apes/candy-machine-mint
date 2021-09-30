import React from "react";
import "./footer.scss";
import { Col, Container, Row } from "react-bootstrap";
import Config from '../config/Config';
import FooterLink from "./FooterLink";

export interface FooterProps {
  footerText: string;
}

const Footer = (props: FooterProps) => {
  return (
      <div className="footer p-3">
        <Container className="">
          <Row>
            {
              Config.footerLinks.map((item, index) => {
                return <FooterLink
                  key={index}
                  image={item.image}
                  link={item.link}
                  />
              })
            }
            <Col lg="4" className="mb-4">
              <div className="mbc h-100 d-flex justify-content-center align-items-center">
                <div className="">
                <span className="font-weight-bold">
                  © {new Date().getFullYear()} . All rights reserved.
                </span>
                  <br />
                    {props.footerText}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Footer;
