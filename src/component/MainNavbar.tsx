import React from "react";
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap";
import { AiOutlineWallet } from "react-icons/ai";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

// import "../styles/common.module.css";
import logo from "../assets/avatars/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import "./MainNavbar.css";
import styled from "styled-components";
import { AnchorWallet } from "@solana/wallet-adapter-react";
const ConnectButton = styled(WalletDialogButton)`
  white-space: nowrap;
`;

const MainNavbar = ({ wallet, onMint,isSoldOut,isMinting,isActive }: any) => {
  return (
    <Navbar
      expand={"xl"}
      style={{ backgroundColor: "#0b2e56" }}
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/" style={{ marginLeft: "auto" }}>
          <img
            alt=""
            src={logo}
            width="300"
            height="50"
            // className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ marginRight: "auto" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Col>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Col>
            {/* <Col>
              <LinkContainer to="/attributes">
                <Nav.Link>Attributes</Nav.Link>
              </LinkContainer>
            </Col> */}
            <Col style={{ whiteSpace: "nowrap" }}>
              <LinkContainer to="/">
                <Nav.Link>My Solbas</Nav.Link>
              </LinkContainer>
            </Col>
            <Col>
              <LinkContainer to="/roadmap">
                <Nav.Link>Roadmap</Nav.Link>
              </LinkContainer>
            </Col>
            <Col>
              <LinkContainer to="/faq">
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>
            </Col>
            <Col
              md="auto"
              style={{ marginRight: "auto" }}
              className="secondaryCollapse"
            >
              <Container fluid>
                <Row>
                  <Col>
                    <Button
                      variant="info"
                      disabled={isSoldOut || isMinting || !isActive}
                      onClick={onMint}
                      style={{ whiteSpace: "nowrap", padding: "12px 16px" }}
                    >
                      Buy Solba
                    </Button>
                  </Col>
                  <Col>
                    {!wallet ? (
                      <ConnectButton>
                        <AiOutlineWallet /> &nbsp; Connect
                      </ConnectButton>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
