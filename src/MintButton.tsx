import styled from 'styled-components';
import Countdown from "react-countdown";
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import { useEffect, useMemo, useState } from 'react';
import { GatewayStatus, useGateway } from '@civic/solana-gateway-react';

import { anchorBigNumberToDate } from './utils';
import { CandyMachineAccount } from './candy-machine';

type Props = {
  onMint: () => Promise<void>;
  candyMachine?: CandyMachineAccount;
  isMinting: boolean;
};

const MintButton = (props: Props) => {
  const {onMint, candyMachine, isMinting } = props;

  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [clicked, setClicked] = useState(false);

  const startDate = useMemo(() => {
    if (candyMachine) {

      if (candyMachine.state.goLiveDate) {
        return anchorBigNumberToDate(candyMachine.state.goLiveDate);
      } else if (candyMachine.state.isPresale) {
        return new Date();
      } else {
        return;
      }
    }

    return;
}, [candyMachine])

  useEffect(() => {
    if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);

  const getMintButtonContent = () => {
    if (!candyMachine?.state.isActive) {
      <Countdown
        date={startDate}
        renderer={renderCounter}
      />
    } else if (candyMachine?.state.isSoldOut) {
      return 'SOLD OUT';
    } else if (isMinting) {
      return <CircularProgress />;
    } else if (candyMachine?.state.isPresale) {
      return 'PRESALE MINT';
    }

    return 'MINT';
  };

  return (
    <CTAButton
      disabled={
        candyMachine?.state.isSoldOut ||
        isMinting ||
        !candyMachine?.state.isActive
      }
      onClick={async () => {
        setClicked(true);
        if (candyMachine?.state.isActive && candyMachine?.state.gatekeeper) {
          if (gatewayStatus === GatewayStatus.ACTIVE) {
            setClicked(true);
          } else {
            await requestGatewayToken();
          }
        } else {
          await onMint();
          setClicked(false);
        }
      }}
      variant="contained"
    >
      {getMintButtonContent()}
    </CTAButton>
  );
};

const CTAButton = styled(Button)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const CounterText = styled.span``; // add your styles here

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default MintButton;