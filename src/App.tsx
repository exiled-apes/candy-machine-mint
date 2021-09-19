import "./App.css";
import { useMemo } from "react";
import NavBar from "./navBar/navBar";
import Home from "./Home";
import FaqCard from "./shared/FaqCard";
import placeHolderImage from './media/image-placeholder.jpeg'
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import TextAndImage from "./shared/TextAndImage";
import Footer from "./shared/Footer";
import { createTheme, ThemeProvider } from "@material-ui/core";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );

  const FreeText = () => {
    return (
    <div style={{borderTop: '1px solid #25282c', ...container, width: '50%', marginBottom: '30px'}} className='flex-column'>
      <h2 style={{paddingTop: '30px'}}>Generic Second Header</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
    </div>
    )
  }

  const container = {
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={{background: 'black'}}>
      <NavBar />
      <div style={{...container, }} className='flex-column'>
        <div style={{marginBottom: '30px'}}>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletDialogProvider>
              ` <Home
                candyMachineId={candyMachineId}
                config={config}
                connection={connection}
                startDate={startDateSeed}
                treasury={treasury}
                txTimeout={txTimeout}
              />`
              </WalletDialogProvider>
            </WalletProvider>
          </ConnectionProvider>
        </div>
        <FreeText />
        <TextAndImage
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          image={placeHolderImage}  
        />
        <TextAndImage reversed
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          image={placeHolderImage}
        />
        <TextAndImage 
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          image={placeHolderImage}
        />
        
        <div className='flex-column' 
          style={{
            borderTop: '1px solid #25282c',
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '50px', 
            paddingBottom: '50px',
            marginTop: '40px'
          }}>
          <h2 style={{marginBottom: '40px'}}>Frequently Asked Questions</h2>
          <div className='frow'>
            <FaqCard
              answer='We are a team a developers from around the world passionate about NFTs and the Solana ecosystem. We want to generate NFTs that are not only fun, but also have utility. Join our Discord to learn more about the team.'
              question='Who is behind ProjectName'
            />
            <FaqCard
              answer='Once the minting process starts, one of the available SolPenguins will be sent to you. SolPenguins use the Metaplex protocol, which is the premier NFT protocol on Solana. This means that you will be able to view your NFT in any wallet/application supporting Metaplex.'
              question='Who is behind ProjectName'
            />
            <FaqCard
              answer='We are a team a developers from around the world passionate about NFTs and the Solana ecosystem. We want to generate NFTs that are not only fun, but also have utility. Join our Discord to learn more about the team.'
              question='Who is behind ProjectName'
            />
          </div>
        </div>
        <Footer 
          image={placeHolderImage}
          disclaimer='this is a generic disclaimer statement'
          roadmapLink='https://www.solpenguins.com/'
          faqLink='https://www.solpenguins.com/'
        />
      </div>
    </div>
    );
};

export default App;
