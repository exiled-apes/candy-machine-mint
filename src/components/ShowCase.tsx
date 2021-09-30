import React from "react";
import './showcase.scss';

export interface ShowcaseProps {
  backGroundImage: string;
}

const ShowCase = (props: ShowcaseProps) => {
  return (
      <div className="showcase"
           style={{
             backgroundImage: `url(${props.backGroundImage})`
           }}
      />
  );
}

export default ShowCase;