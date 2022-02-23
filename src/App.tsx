import * as anchor from "@project-serum/anchor";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { ThemeProvider } from "@material-ui/core";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import Home from "./Home";

import theme from './theme';

const txTimeout = 30000; // milliseconds (confirm this works for your project)
const rpcUrl = process.env.REACT_APP_SOLANA_RPC_HOST!;
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const candyMachineId = new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!);
const connection = new anchor.web3.Connection( rpcUrl ?? anchor.web3.clusterApiUrl("devnet"));

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

  return (
      <ThemeProvider theme={theme}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={true}>
            <WalletDialogProvider>
              <Home
                candyMachineId={candyMachineId}
                connection={connection}
                txTimeout={txTimeout}
                rpcUrl={rpcUrl}
              />
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>
  );
};

export default App;
