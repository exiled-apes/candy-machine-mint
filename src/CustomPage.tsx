import React from "react"
const CustomPage = (props:any) => {
 
  return (
    <div>
       <header>
    <div id="navbarCustom">
      <div className="iconPanel">
        <a href="https://twitter.com/gamekidznft">
          <span className="iconify" data-icon="akar-icons:twitter-fill"></span>
        </a>
        <a href="https://discord.gg/xkpvwkEX">
          <span className="iconify" data-icon="akar-icons:discord-fill"></span>
        </a>
        <span  style={{display:"inline-block"}}>
          <span className="iconify">{props.connectButton}</span>
        </span>
      </div>
    </div>
    <h1 className="display-2 fw-bold header-title text-center">Welcome To GameKidz</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 text-center span-bold"><b>Join GameKidz and take a trip down memory lane</b></p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="" target="_blank" className="btn btn-light btn-lg px-4 gap-3 disabled">Mint Now</a>
        <a href="https://discord.gg/xkpvwkEX" target="_blank" className="btn btn-secondary btn-lg px-4">Join the
          Discord</a>

      </div>
    </div>
  </header>
  <div className="container-fluid py-5 story mt-5">
    <img src="./images/robot/1.png" className="static" />
    <img src="./images/robot/2.png" className="static" />
    <img src="./images/robot/3.png" className="static" />
    <img src="./images/robot/4.png" className="static" />

    <div className="duckie-marquee">
      <div className="duckie-marquee__container">
        <img src="./images/slider/1.png" />
        <img src="./images/slider/2.png" />
        <img src="./images/slider/3.png" />
        <img src="./images/slider/4.png" />
        <img src="./images/slider/5.png" />
        <img src="./images/slider/6.png" />
        <img src="./images/slider/7.png" />
        <img src="./images/slider/8.png" />
        <img src="./images/slider/9.png" />
        <img src="./images/slider/10.png" />
        <img src="./images/slider/11.png" />
        <img src="./images/slider/12.png" />
        <img src="./images/slider/13.png" />
      </div>
    </div>
    <div className="container py-5">
      <div className="col-md-10 mx-auto">
        <div className="row mt-5">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img src="./images/a.png" style={{borderRadius: "1rem"}} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8">
            <h2 className="section-title">Story </h2>
            <div className="lead ">
              <strong className="text-white">
                <p> Game Kidz is a community born out of the fond memories of childhood gaming, as kids of the 80’s and
                  90’s, we all grew up playing the Iconic Gameboy and Gameboy Color for hours on end. Some of the most
                  era defining games found their beginnings here. Tetris, Zelda and Pokemon among others are all part of
                  Gameboys lasting legacy.
                </p>
                <p>
                  We kept reflecting on the more simpler times, using hot water to quickly recharge batteries, walking
                  through Viridian forest 4 times before learning how to save the game, the Zelda soundtrack playing
                  whilst doing the many side quests.
                </p>
                <p>
                  So we set about creating great art and a community around these shared memories. Let the nostalgia wave hit!
                </p>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-5 specification">
    <div className="container py-5">
      <div className="col-md-10 mx-auto">
        <div className="row">

          <div className="col-lg-8">
            <h2 className="section-title">Specifications</h2>
            <div className="lead ">
              <strong>
                <p>Game Kidz is a collection of 10,000 NFT's being unleashed on the Solana Blockchain.
                </p>
                <p>
                  Each Game Kid is unique and generated from memory using over 186 possible traits, including Headwear,
                  Case, Screen, Eye, Glass, Mouth, Arm, Footwear, and Background.
                </p>
                <p>
                  Pre-sale Price for each GameKidz will be 1 SOL, Public Sale Price TBA
                </p>
              </strong>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img src="./images/Sample5-01 (1).png" style={{borderRadius: "1rem"}} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-5 roadmap">
    <div className="container">
      <div className="row">
        <div className="col-md-11 mx-auto">
          <h1 className="display-1 text-uppercase mb-5" style={{fontFamily:  'Charybdis'}}><b>Roadmap</b></h1>
          <ul className="roadmap mt-5">
             
            <li className="roadmap__item">
                <span style={{verticalAlign: "inherit"}}>✔</span>
              <div className="inner">
                Launch 10,000 GameKidz on Solana
              </div>
            </li>
            <li className="roadmap__item">   
                  <span style={{verticalAlign: "inherit"}}>✔</span>
              <div className="inner">
                Get Gamekidz listed on Digital Eyes and other secondary markets
              </div>
            </li>
            <li className="roadmap__item">
                  <span style={{verticalAlign: "inherit"}}>✔</span>
              <div className="inner">
                Create gamekidz twitter and discord sales bot to track all your secondary sales.
              </div>
            </li>
            <li className="roadmap__item">
                  <span style={{verticalAlign: "inherit"}}>✔</span>
              <div className="inner"> Improve the lives of less abled and less fortunate children and kids through games and
                toys by donating to charity organisations like https://childsplay charity.Org/ and
                https://www.Extra-life.Org/</div>
            </li>
            <li className="roadmap__item">
                  <span style={{verticalAlign: "inherit"}}>✔</span>
              <div className="inner">
                Unleash the 3d game kidz airdrop collection. Each game kidz holder will be able to claim one for free
              </div>
            </li>
            <li className="roadmap__item">
                  <span style={{verticalAlign: "inherit"}}>✔</span>
              <div className="inner">
                Create game kidz treasury. To give back to our community through raffles and giveaways. And provide
                technical artistic support to the artists and devs that want to create their own solana projects
              </div>
            </li>
            <li className="roadmap__item">
                  <span style={{verticalAlign: "inherit"}}>✔</span>
              <div className="inner">
                Open the exclusive game kidz merch store (hoodies. T-shirts. Socks and hats)
              </div>
            </li>
            <li className="roadmap__item">
                  <span style={{verticalAlign: "inherit"}}>✔</span> 
              <div className="inner">
                Kids will vote on the theme of our second nft nostalzia project, all holder will receive one for free
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row section dark py-5">
      <h2 className="display-6 fw-bold section-title  text-white text-center titlecreators my-5">The GameKidz Team</h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="row mt-3">
            <div className="col-lg-4 text-center text-white"><img className="img-fluid creators" alt=""
                src="./images/1.png" />
              <h3 className="title mt-4 white fs30 text-uppercase">Jamie Kid</h3>
                <p className="lead white px-5 text-capitalize"> The main creator, creating all the dope art and development
                </p>
            </div>
            <div className="col-lg-4 text-center text-white"><img className="img-fluid creators" alt=""
                src="./images/2.png" />
              <h3 className="title mt-4 white text-uppercase">M3Y Kid</h3>
                <p className="lead white px-5 text-capitalize">In charge of marketing, partnerships and custom Game Kidz</p>
            </div>
            <div className="col-lg-4 text-center text-white"><img className="img-fluid creators" alt=""
                src="./images/3.png" />
              <h3 className="title mt-4 white text-uppercase"> John Kid</h3>
                <p className="lead white px-5 text-capitalize">Handling Website design and Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <p className="copyright">2021 Copyrights © GameKidz. All rights reserverd.</p>
  </footer>



    </div>
  );
};



export default CustomPage;
