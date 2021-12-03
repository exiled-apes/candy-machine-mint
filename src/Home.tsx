import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    // define variables
    const items = document.querySelectorAll('.timeline li, .scroll-in-animate')

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el: any) {
      var rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add('in-view')
        }
      }
    }

    // listen for events
    window.addEventListener('load', callbackFunc)
    window.addEventListener('resize', callbackFunc)
    window.addEventListener('scroll', callbackFunc)
  }, [])

  return (
    <main>
      <section className="intro fancy circle-in">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Solcoins Solanart NFT Logo play to earn " />
        </div>
        <div className="limited flex flex-justify">
          <div className="info">
            <h1>FIND YOUR SOLCOIN</h1>
            <p className="medium">
              You may be wondering if it’s art or money? It’s Solcoin. 4501 exist... only on the Solana blockchain.
            </p>
            <div className="fp-email">
              <div>
                <a href="https://gleam.io/1z5FH/solcoins-treasure-hunt">
                  <button type="button" className="go-home-btn">
                    CLICK HERE TO DIG FOR TREASURE
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="example hop-in">
            <img src="/assets/images/examples/main.png" alt="Solcoins Solana art NFT Sol coins not solchicks" />
          </div>

          <div className="banner flex-center flex-justify">
            <p className="medium">See how it all began...</p>
            <button onClick={() => "window.location.href='/assets/origin-story.pdf#zoom=300'"}>
              Read the Origin Story
            </button>
          </div>
        </div>
      </section>

      {/* <section className="about">
      <div className="limited flex-center flex-justify flex">
        <div className="info">
          <h2>About Solcoins</h2>
          <p className="medium">Solcoins are handcrafted with love from the engulfing flames of Solana. Only 4501 Solcoins can
            possibly exist.</p>
        </div>
        <div className="example">
          <img src="/assets/images/examples/1.png" alt="Solana Crypto NFT Solcoins Example" />
        </div>
      </div>
      </div>
    </section> */}
      <section className="about">
        <div className="limited flex-center flex-justify flex-revert">
          <div className="info">
            <h2>ABOUT SOLCOINS</h2>
            <p className="medium">
              Solcoins are a uniquely honest collection of artistic NFTs on the Solana Blockchain. Forged in the
              engulfing flames of Solana, 4501 will exist but they’ll have to be dug up (minted) by you, the community.
              1000 SOL goes to the Solcoins community. Solcoins is designed to be taken over by the community.
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img src="/assets/images/examples/4.png" alt="Solcoins Solana art NFT Sol coins not solchicks" />
          </div>
        </div>
      </section>
      <section className="who-are-we">
        <div className="limited flex-center flex-justify flex">
          <div className="info">
            <h2>WHO ARE WE?</h2>
            <p className="medium">
              A rowdy group of storytellers, gamers, artists, coders, traders and nerds who have been experimenting in
              the crypto space since 2017. We’ve worked on projects like Panda Dynasty, Republic, and Enjin (among many
              others) and have a diverse range of experience working with legendary companies like Riot Games and
              Tencent. Some of us have worked on startups, others at major tech companies; some have worked on Wall
              Street and one of us has only ever worked in their mom's basement (no shame). <br /> <br />
              What brought us all together is simple: the Metaverse is coming fast, and we want to be part of it. We
              want to meet other people who feel the same way. We want to network with anyone who wants to be part of
              building the future. Solcoins is just the beginning for us.
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img src="/assets/images/examples/1.png" alt="Solcoins Solana art NFT Sol coin not solchicks" />
          </div>
        </div>
      </section>
      <section className="prizing">
        <div className="limited flex-center flex-justify flex-revert">
          <div className="info">
            <h2>WHAT DO WE WANT?</h2>
            <p className="medium">
              To build a community of crypto-enthusiasts and NFT lovers who are psyched about the Metaverse and who want
              to meet other like-minded folk so that together they can learn, grow, and hopefully do more than just
              stand on the side-lines watching the future being built. We want to build the future. If that sounds like
              you, then we want to hear your story. Join us in discord and be part of the revolution. If you want to be
              part of what comes next, then sharpen your shovels and get ready to dig for Solcoins, because it’s going
              to be up to you to decide what these are worth, and what comes next.
            </p>
            <br />
            <p className="medium">
              We’re not here to convince you that Solcoins has invented the next crazy groundbreaking utility token or
              technology; we’re not here to promise you a 300 feature, 5 year roadmap; we’re not going to make insane
              claims like “Solcoins is a guaranteed win, you’re going to 10X on day 1!” or “Solcoins are going to be
              used as the universal currency of Coachella, Burning Man, Solchicks AND THE ENTIRE METAVERSE” (although
              that would be pretty cool and if enough people want it to happen it probably could). There are enough
              projects trying to shill their fantasies to you and that is not what we are here to do. Solcoins are art
              and Solcoins are money.{' '}
            </p>
            <br />
            <p className="medium">
              <strong>Nothing more</strong> <u>for now</u>, <strong>nothing less</strong> <u>forever.</u> <br />
              We’re letting the community take over Solcoins!
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img src="/assets/images/examples/6.png" alt="Solana Crypto NFT Solcoins Sol coins not solchicks" />
          </div>
        </div>
      </section>
      <section className="treasure-hunt">
        <div className="limited flex-center flex-justify flex">
          <div className="info">
            <h2>I HEARD THERE'S A TREASURE HUNT?</h2>
            <p className="medium">
              You’re damn right there’s a treasure hunt! A community treasure hunt! We’re giving 1000 SOL back to the
              community <strong>immediately</strong>. Each Solcoin that you mint has a chance to be dug up by our
              community of diggers. If your Solcoin is dug up, you will win 20 SOL.
              <strong>
                What’s even crazier is that if you mint the Genesis Coin (Solcoin#1) then YOU’LL WIN 400 SOL!
              </strong>
            </p>
            <br />
            <p className="medium">
              Anyone is eligible to dig, but <strong>only minters are eligible to win. </strong>
              To join the treasure hunt and get yourself a nice sharp shovel all you have to do is engage with the
              community.
              <a href="https://discord.gg/45XTxdHzzB"> Click here to get yourself some digs </a>
            </p>
            <br />
            <p className="medium">
              For each task you complete on Gleam, you will earn 1 treasure dig. Each dig will give you the chance to
              uncover a winning Solcoin. All digging will take place on our discord server using our Discord bot. We
              will add new batches of diggers with each milestone throughout the sale (more info on the roadmap below).
            </p>
            <br />
            <p className="medium">
              25 random treasure hunters will dig up a Solcoin and win. Each of the 25 hunters will win 8 SOL (200 SOL
              total) for uncovering a Solcoin. Here comes the fun part! Each Solcoin that is dug up will also give the
              Solcoin NFT owner a prize of 20 SOL (25 winners).
            </p>
            <br />
            <p className="medium">
              <strong>
                This means that if you dig up a Solcoin that you minted, you’ll win 28 SOL, that’s more than triple the
                prize for just digging one up!
              </strong>
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img
              src="/assets/images/examples/8.png"
              alt="Solana play to earn play-to-earn Crypto NFT Solcoins Example Stillnot Solchicks"
            />
          </div>
        </div>
      </section>
      <section className="how-much">
        <div className="limited flex-center flex-justify flex-revert">
          <div className="info">
            <h2>HOW MUCH?</h2>
            <p className="medium">
              During minting each Solcoin will cost 0.6 SOL. After minting, Solcoins will cost what the community
              decides they will cost. We’re committed to making Solcoins available on several different marketplaces,
              we’re also committed to reinvesting revenue from the sale into marketing and partnerships. The rest is up
              to you, tell your friends and tell your family. If people talk about it and they want the value to go up,
              then the value will go up, it’s that simple. What you see is what you get.
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img src="/assets/images/examples/7.png" alt="Solana Crypto NFT Solcoins Sol coins solchiks Example" />
            {/* <!--NEED NEW IMAGE--> */}
          </div>
        </div>
      </section>
      <section className="when">
        <div className="limited flex-center flex-justify flex">
          <div className="info">
            <h2>WHEN?</h2>
            <p className="medium">
              Minting will be directly on the website and will open later this week. Minting will continue until 4501
              Solcoins have been discovered, or until the community decides enough is enough, whichever comes first.
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img src="/assets/images/examples/9.png" alt="Solana Crypto NFT Solcoins Example" />
            {/* <!--NEED NEW IMAGE--> */}
          </div>
        </div>
      </section>
      <section className="where">
        <div className="limited flex-center flex-justify flex-revert">
          <div className="info">
            <h2>WHERE?</h2>
            <p className="medium">
              Minting will take place directly on solcoins.io and nowhere else. After minting, the collection will be
              listed on several marketplaces starting with Digital Eyes and Magic Eden.
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img src="/assets/images/examples/5.png" alt="NFT Art Solcoins Solanart" />
          </div>
        </div>
      </section>
      <section className="roadmap">
        <div className="limited flex-center flex-justify flex">
          <div className="info">
            <h2>COMMUNITY ROADMAP</h2>
          </div>
        </div>
      </section>
      <section className="timeline parallax">
        <ul>
          <li>
            <div>
              <time>10%</time>
              <p className="medium">• Airdrop NFTs to the top 10 most engaged community members on our discord</p>
              <p className="medium">• Listing on Rarity Tools and other NFT calendars</p>
            </div>
          </li>
          <li>
            <div>
              <time>25%</time>
              <p className="medium">• Ramp up marketing with two new project collabs</p>
              <p className="medium">• Second wave of diggers added</p>
            </div>
          </li>
          <li>
            <div>
              <time>50%</time>
              <p className="medium">• Shovel sharpening</p>
              <p className="medium">• Third wave of diggers added</p>
              <p className="medium">• 5 lucky holders will be airdropped a Solcoin NFT</p>
            </div>
          </li>
          <li>
            <div>
              <time>75%</time>
              <p className="medium">• Final round of diggers added</p>
              <p className="medium">• Dig acquisition closes</p>
            </div>
          </li>
          <li>
            <div>
              <time>100%</time>
              <p className="medium">• Prizes distributed to all winners</p>
              <p className="medium">• Private channel created for holders</p>
              <p className="medium">• Surprise SOL drop</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="prizing">
        <div className="limited flex-center flex-justify flex-revert">
          <div className="info">
            <h2>Prizing</h2>
            <p className="medium">
              <ol>
                <li>300 SOL will be sent to the minter of the 1 of 1 Genesis Solcoin!</li>
                <li>200 SOL (8 SOL each) will be sent to the 25 winning Solcoin treasure diggers!</li>
                <li>500 SOL (20 SOL each) will be sent to the 25 Solcoin owners of the winning treasure digs!</li>
              </ol>
            </p>
            <p className="medium">
              Note: Prizing is based on the assumption that all 4501 Solcoins are minted. If less than 4501 Solcoins are
              minted, then prizing will be prorated based on the number of minted Solcoins. Example: If only 4000 of
              4501 Solcoins are minted (88.8%) then total prizing will be 88.8% of the amounts listed above.
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img src="/assets/images/examples/2.png" alt="Solana Crypto NFT Solcoins Example" />
          </div>
        </div>
      </section>

      <section className="layers">
        <div className="limited flex-center flex-justify flex">
          <div className="info">
            <h2>LAYERS</h2>
            <p className="medium">
              Each Solcoin has between 6 and 14 layers. Solcoins are generated from 240 attributes. Some attributes will
              only be available on 1 Solcoin. <strong>The rest is a secret, get excited!</strong>
            </p>
          </div>
          <div className="example scroll-in-animate envelope-in">
            <img src="/assets/images/examples/3.png" alt="Solcoins Solana NFT Art Example" />
          </div>
          <div className="banner flex-center flex-justify">
            <p className="medium">Want to dig for treasure?</p>
            <a href="https://gleam.io/1z5FH/solcoins-treasure-hunt">
              <button type="button">Dig for Treasure</button>
            </a>
          </div>
        </div>
      </section>
      <section className="gleam">
        <div className="flex-justify">
          <a className="e-widget no-button" href="https://gleam.io/1z5FH/solcoins-treasure-hunt" rel="nofollow">
            Solcoins Treasure Hunt
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
