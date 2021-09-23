import { Alignment, Button, Navbar } from "@blueprintjs/core";
import React from "react";
import banner from "../src/images/irrelevant_banner.jpg";

import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Artificial Irrelevants</Navbar.Heading>
          <Navbar.Divider />
          <a
            className="header__nav-link is-size-7"
            href="https://www.irrelevants.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bp3-minimal" icon="home" text="Home" />
          </a>
          <a
            className="header__nav-link is-size-7"
            href="https://www.irrelevants.com/schedule-copy"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bp3-minimal" icon="map" text="Roadmap" />
          </a>
          <a
            className="header__nav-link is-size-7"
            href="https://discord.gg/REC4VYpJKw"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bp3-minimal" icon="chat" text="Discord" />
          </a>
        </Navbar.Group>
      </Navbar>
      <div className="header__banner">
        <img src={banner} alt="irrelevant-banner" />
      </div>
    </section>
  );
}
