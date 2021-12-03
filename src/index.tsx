import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, NavLink } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <header>
        <div className="limited flex flex-justify">
          <div className="socials flex-center">
            <a target="_blank" href="https://twitter.com/SOLCOINS_IO">
              <img src="/assets/images/socials/twitter.svg" alt="Solcoins NFT Twitter" />
            </a>
            <a target="_blank" href="https://discord.com/invite/45XTxdHzzB">
              <img src="/assets/images/socials/discord.svg" alt="Solcoins NFT Discord" />
            </a>
          </div>
          <div className="menu flex-center">
            <NavLink to="/">
              {/* alt="Home" */}
              Home
            </NavLink>
            <NavLink to="/mint">
              {/* alt="Home" */}
              Mint
            </NavLink>
            <a href="https://gleam.io/1z5FH/solcoins-treasure-hunt">
              {/* alt="Solcoins Play-To-Earn Treasure Hunt" */}
              Treasure Hunt
            </a>
          </div>
        </div>
      </header>

      <App />

      <footer>
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Solcoins Logo play-to-earn" />
        </div>
        <div className="limited flex flex-justify">
          <div className="menu flex-center">
            <span id="copyright">© 2021 Solcoins</span>
          </div>
          <div className="socials flex">
            <a target="_blank" href="https://twitter.com/SOLCOINS_IO">
              <img src="/assets/images/socials/twitter.svg" alt="solcoins twitter" />
            </a>
            <a target="_blank" href="https://discord.com/invite/45XTxdHzzB">
              <img src="/assets/images/socials/discord.svg" alt="solcoins discord" />
            </a>
          </div>
        </div>
      </footer>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
