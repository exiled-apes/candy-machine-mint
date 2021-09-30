import {Col} from "react-bootstrap";
import React from "react";

export interface FooterLinkProps {
  image: string;
  link: string;
}

const FooterLink = (props: FooterLinkProps) => {
  return (
      <Col lg="4" className="mb-4">
          <div className="mbc social-logo h-100 d-flex justify-content-around align-items-center text-center">

          <a
              href={props.link}
              target={"_blank"}
              rel="noreferrer"
          >
            <img
                className="footer-social img-fluid"
                src={props.image}
                alt={""}
            />
          </a>
        </div>
      </Col>
  );
}

export default FooterLink;