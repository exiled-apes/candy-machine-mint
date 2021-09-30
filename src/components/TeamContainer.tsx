import {Container, Row} from "react-bootstrap";
import React from "react";
import Config from '../config/Config';
import TeamMember from "./TeamMember";
import './team.scss';

export interface TeamContainerProps {
  teamTitle: string;
  teamName: string;
}

const TeamContainer = (props: TeamContainerProps) => {
  return (
      <div id="team" className="team">
        <Container className=" h-100">
          <div className="">
            <h1 data-aos="fade-in" data-aos-duration="2000" className="title">
              {props.teamTitle}
            </h1>
            <span className="sub">
              {props.teamName}
            </span>
          </div>
          <Row className="h-100 mt-5">
            {
              Config.teamMembers.map((item, index) => {
                return <TeamMember
                    key={index}
                    teamMemberImage={item.teamMemberImage}
                    teamMemberName={item.teamMemberName}
                    teamMemberLink={item.teamMemberLink}
                    teamMemberTitle={item.teamMemberTitle}
                    teamMemberDescription={item.teamMemberDescription}
                />
              })
            }
          </Row>
        </Container>
      </div>
  );
}

export default TeamContainer;