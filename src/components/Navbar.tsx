import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.scss";
import ConnectionMintButton from "./ConnectionMintButton";
import * as anchor from "@project-serum/anchor";

export interface NavBarProps {
  logo: string;
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const NavBar = (props: NavBarProps) => {
  return (
      <div>
        <Container>
          <Navbar className="cus-nav" variant="dark" expand="lg">
            <Navbar.Brand href="#top" className="font-weight-bold text-uppercase">
              <img
                  className="img-fluid nav-logo"
                  src={props.logo}
                  alt={""}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#about" className="link-style linkh">
                  About
                </Nav.Link>
                <Nav.Link href="#story" className="link-style linkh">
                  The Story
                </Nav.Link>
                <Nav.Link href="#team" className="link-style linkh">
                  The Team
                </Nav.Link>
                <Nav.Link className="link-style btn btn-outline-warning">
                  {<ConnectionMintButton
                        candyMachineId={props.candyMachineId}
                        config={props.config}
                        connection={props.connection}
                        startDate={props.startDate}
                        treasury={props.treasury}
                        txTimeout={props.txTimeout}
                    />
                   }
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
  );
}

export default NavBar;
