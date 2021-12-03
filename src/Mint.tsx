import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Countdown from 'react-countdown'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import * as anchor from '@project-serum/anchor'

import { LAMPORTS_PER_SOL } from '@solana/web3.js'

import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui'

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from './candy-machine'

const ConnectButton = styled(WalletDialogButton)``

const CounterText = styled.span`` // add your styles here

const MintContainer = styled.div`
  text-align: center;
` // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey
  config: anchor.web3.PublicKey
  connection: anchor.web3.Connection
  startDate: number
  treasury: anchor.web3.PublicKey
  txTimeout: number
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>()
  const [isActive, setIsActive] = useState(false) // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false) // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false) // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0)
  const [itemsRedeemed, setItemsRedeemed] = useState(0)
  const [itemsRemaining, setItemsRemaining] = useState(0)

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  })

  const [startDate, setStartDate] = useState(new Date(props.startDate))

  const wallet = useAnchorWallet()
  const [candyMachine, setCandyMachine] = useState<CandyMachine>()

  const refreshCandyMachineState = () => {
    ;(async () => {
      if (!wallet) return

      const { candyMachine, goLiveDate, itemsAvailable, itemsRemaining, itemsRedeemed } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      )

      setItemsAvailable(itemsAvailable)
      setItemsRemaining(itemsRemaining)
      setItemsRedeemed(itemsRedeemed)

      setIsSoldOut(itemsRemaining === 0)
      setStartDate(goLiveDate)
      setCandyMachine(candyMachine)
    })()
  }

  const onMint = async () => {
    try {
      setIsMinting(true)
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(candyMachine, props.config, wallet.publicKey, props.treasury)

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          'singleGossip',
          false
        )

        if (!status?.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          })
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          })
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!'
      if (!error.msg) {
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`
          setIsSoldOut(true)
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      })
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
      setIsMinting(false)
      refreshCandyMachineState()
    }
  }

  useEffect(() => {
    ;(async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
    })()
  }, [wallet, props.connection])

  useEffect(refreshCandyMachineState, [wallet, props.candyMachineId, props.connection])

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
    <section className="intro fancy circle-in">
      <div className="logo">
        <img src="/assets/images/logo.png" alt="Solcoins Solanart NFT Logo" />
      </div>
      <div className="limited flex flex-justify">
        <div className="info">
          <h1>4501 Solcoins!</h1>

          {wallet && (
            <div className="mint-info">
              <div>
                Wallet: <span>{shortenAddress(wallet.publicKey.toBase58() || '')}</span>
              </div>

              <div>
                Balance: <span>{(balance || 0).toLocaleString()} SOL</span>
              </div>

              <div>
                Total Available: <span>{itemsAvailable}</span>
              </div>

              <div>
                Redeemed: <span>{itemsRedeemed}</span>
              </div>

              <div>
                Remaining: <span>{itemsRemaining}</span>
              </div>
            </div>
          )}

          <ConnectButton id="wallet-connect">Connect Wallet</ConnectButton>

          <MintContainer>
            {!wallet ? (
              <button tabIndex={0} type="button" onClick={() => document.getElementById('wallet-connect')?.click()}>
                Connect Wallet
              </button>
            ) : (
              <button disabled={isSoldOut || isMinting || !isActive} onClick={onMint} id="mint-nft">
                {isSoldOut ? (
                  'SOLD OUT'
                ) : isActive ? (
                  isMinting ? (
                    'WAIT...'
                  ) : (
                    'MINT'
                  )
                ) : (
                  <Countdown
                    date={startDate}
                    onMount={({ completed }) => completed && setIsActive(true)}
                    onComplete={() => setIsActive(true)}
                    renderer={renderCounter}
                  />
                )}
              </button>
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
        </div>
        <div className="example hop-in">
          <img src="/assets/images/examples/main.png" alt="Solcoins Solana art NFT Example" />
        </div>
      </div>
    </section>
  )
}

interface AlertState {
  open: boolean
  message: string
  severity: 'success' | 'info' | 'warning' | 'error' | undefined
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  )
}

export default Home
