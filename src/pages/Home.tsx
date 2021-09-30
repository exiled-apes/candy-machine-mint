import React from "react";
import "./home.scss";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import * as anchor from "@project-serum/anchor";
import Config from '../config/Config';
import RoadMapContainer from "../components/RoadMapContainer";
import TeamContainer from "../components/TeamContainer";
import Story from "../components/Story";
import About from "../components/About";
import ShowCase from "../components/ShowCase";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  return (
      <div id={"home"} className="root home">
        <NavBar
            logo={Config.navbar.logo}
            candyMachineId={props.candyMachineId}
            config={props.config}
            connection={props.connection}
            startDate={props.startDate}
            treasury={props.treasury}
            txTimeout={props.txTimeout}
        />
        <ShowCase backGroundImage={Config.showcaseMain.backGroundImage}/>
        <About name={Config.about.name} image={Config.about.image} text={Config.about.text}/>
        <ShowCase backGroundImage={Config.showcaseSecondary.backGroundImage}/>
        <Story title={Config.story.title} text={Config.story.text}/>
        <RoadMapContainer roadMapTitle={'Roadmap'}/>
        <TeamContainer teamName={'Team Name'} teamTitle={'Team Title'}/>
        <Footer footerText={'Project Name'}/>
      </div>
  );
}

export default Home;
