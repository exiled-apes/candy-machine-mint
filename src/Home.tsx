import * as anchor from '@project-serum/anchor';
import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { useWallet } from '@solana/wallet-adapter-react';
import { GatewayProvider } from '@civic/solana-gateway-react';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';

import MintButton from './MintButton';

import { AlertState } from './utils';
import {
  CandyMachineAccount,
  awaitTransactionSignatureConfirmation,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from './candy-machine';

type Props = {
  candyMachineId: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcUrl: string;
};

const Home = (props: Props) => {
  const { candyMachineId, connection, txTimeout, rpcUrl } = props;

  const wallet = useWallet();
  const [balance, setBalance] = useState<number>();
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  });

  const anchorWallet = useMemo(() => {
    if (!wallet || !wallet.publicKey || !wallet.signAllTransactions || !wallet.signTransaction) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const refreshCandyMachineState = useCallback(async () => {
    if (!anchorWallet) {
      return;
    }

    try {
      const cndy = await getCandyMachineState(anchorWallet, candyMachineId, connection);
      setCandyMachine(cndy);
    } catch (e) {
      console.log('There was a problem fetching Candy Machine state');
      console.log(e);
    }
  }, [anchorWallet, candyMachineId, connection]);

  const onMint = async () => {
    try {
      setIsUserMinting(true);
      document.getElementById('#identity')?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (await mintOneToken(candyMachine, wallet.publicKey))[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(mintTxId, txTimeout, connection, true);
        }

        if (status && !status.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          });
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          });
        }
      }
    } catch (error: any) {
      let message = error.msg || 'Minting failed! Please try again!';
      if (!error.msg) {
        if (!error.message) {
          message = 'Transaction Timeout! Please try again.';
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      setIsUserMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet && wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  useEffect(() => {
    refreshCandyMachineState();
  }, [anchorWallet, candyMachineId, connection, refreshCandyMachineState]);

  return (
    <main>
      {wallet && wallet.publicKey && <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || '')}</p>}

      {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}

      {candyMachine && wallet && (
        <>
          <p>Total Available: {candyMachine.state.itemsAvailable}</p>
          <p>Redeemed: {candyMachine.state.itemsRedeemed}</p>
          <p>Remaining: {candyMachine.state.itemsRemaining}</p>
        </>
      )}

      <MintContainer>
        {!wallet ? (
          <ConnectButton>Connect Wallet</ConnectButton>
        ) : candyMachine?.state.isActive &&
          candyMachine?.state.gatekeeper &&
          wallet.publicKey &&
          wallet.signTransaction ? (
          <GatewayProvider
            wallet={{
              publicKey: wallet.publicKey || new PublicKey(CANDY_MACHINE_PROGRAM),
              //@ts-ignore
              signTransaction: wallet.signTransaction,
            }}
            gatekeeperNetwork={candyMachine?.state?.gatekeeper?.gatekeeperNetwork}
            clusterUrl={rpcUrl}
            options={{ autoShowModal: false }}
          >
            <MintButton candyMachine={candyMachine} isMinting={isUserMinting} onMint={onMint} />
          </GatewayProvider>
        ) : (
          <MintButton candyMachine={candyMachine} isMinting={isUserMinting} onMint={onMint} />
        )}
      </MintContainer>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert onClose={() => setAlertState({ ...alertState, open: false })} severity={alertState.severity}>
          {alertState.message}
        </Alert>
      </Snackbar>
    </main>
  );
};

const ConnectButton = styled(WalletDialogButton)``; // add your styles here

const MintContainer = styled.div``; // add your styles here

export default Home;
