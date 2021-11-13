import { Col, Container, Row, Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div>
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ paddingTop: "40px" }}
        >
          <div className="main">
            <h3>How can we help you?</h3>
            <p>Everything you need to know to in the world of solbas.</p>
          </div>
        </Row>
        <Row>
          <Col md={12} style={{ textAlign: "left" }}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is Solbas NFT?</Accordion.Header>
                <Accordion.Body className="faqBody">
                  Solbas are 10,000 algorithmically generated, unique, cute and
                  collectible Shiba Inu with proof of ownership stored on the
                  Solana blockchain!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How do I purchase a Solba?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  Purchasing a Solba is super simple. Connect your Solana
                  wallet and follow the buy prompts. <br />
                  1. Download the Phantom or Sollet wallet extension for your
                  browser(Google Chrome recommended). <br />
                  2. Buy Solana(SOL) on an exchange like FTX, Binance, Coinbase
                  etc and send it to your Phantom or Sollet wallet Public
                  Address. <br />
                  3. Connect your Wallet to our website by clicking on the
                  Connect button.
                  <br />
                  4. Click the “Buy” button on https://www.solba.io and approve
                  the transaction in your Wallet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Where does my NFT go after I purchase a Solba?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  Your Solba NFT artwork will be sent to the wallet you
                  purchased via in a matter of minutes.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  What art do I receive as the NFT?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  You can download your Solba NFT artwork in the My Solbas
                  page. In addition to your 576*576 NFT artwork, you will also
                  find profile picture cutouts and the Rarity collectible cards
                  (display purposes only... for now) in your
                  https://www.solba.io/ .
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  What artwork can I download?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  You can download your Solba NFT artwork in the My Solbas
                  page. In addition to your 576*576px NFT artwork, you will also
                  find profile picture cutouts and the Rarity collectible cards
                  (display purposes only) in your https://www.solba.io/ .
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  What Solana wallets can I use?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  At launch we will be allowing purchases and management through
                  two of Solana’s main wallets; Phantom and Sollet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  What can I do with my Solba NFT?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  You are free to do anything with your Solbas under a
                  non-exclusive license.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  How were the Solbas generated?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  All individual pieces of the Solba world have been created
                  by hand and algorithmically generated using custom code. There
                  are 165 attributes across 18 categories: These categories
                  include background, body, type, pattern, tail, expression,
                  mouth, eyes, skin, glasses, facial hair, hat/hair, mouth
                  accessories, earring, neck, blankets, flags and best of all,
                  poop.
                  <br /> <br />
                  With these combined, it gives a total mathematical combination
                  of millions of unique Solbas - but with only 10,000 being
                  minted, some are more unique and rare than others.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Who is behind Solbas NFT?</Accordion.Header>
                <Accordion.Body className="faqBody">
                  The Solbas NFT team are a small group of friends with the
                  same vision and goal. Our core principles have always been to
                  deliver the best possible NFT user experience from launch as
                  well as creating collectible art with utility.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Are you affiliated with any other projects on the Solana
                  network?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  No, we are not affiliated with any other projects on Solana or
                  in the crypto space. We are an independent team with one focus
                  - Solbas NFT.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  Will there be resale royalties?
                </Accordion.Header>
                <Accordion.Body className="faqBody">
                  5% royalties will be applied to all Llama resales. We will be
                  using these funds for future development.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Get in touch with us</Accordion.Header>
                <Accordion.Body className="faqBody">
                  Feel free to get in touch with us on Twitter @SolbasNFT or
                  on discord https://www.discord.gg/Solbasnft
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
