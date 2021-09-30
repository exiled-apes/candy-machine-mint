import {Col} from "react-bootstrap";
import React from "react";
import './team.scss';

export interface TeamMemberProps {
  teamMemberImage: string;
  teamMemberName: string;
  teamMemberLink: string;
  teamMemberTitle: string;
  teamMemberDescription: string;
}

const TeamMember = (props: TeamMemberProps) => {
  return (
      <Col
          data-aos="fade-in"
          data-aos-duration="2000"
          lg="4"
          className=""
      >
        <div className="">
          <img
              className="img-fluid team-img"
              src={props.teamMemberImage}
              alt={""}
          />
          <h3 className="title mt-2">
            {props.teamMemberName}
          </h3>
          <p className="subtitle">
            <a
                href={props.teamMemberLink}
                target="_blank"
                rel={"noreferrer"}
            >
              {props.teamMemberTitle}
            </a>
            , {props.teamMemberDescription}
          </p>
        </div>
      </Col>
  );
}

export default TeamMember;