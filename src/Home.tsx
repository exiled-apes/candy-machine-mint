import React, {useState} from "react";
import * as anchor from "@project-serum/anchor";
import AlertState from "./components/CandyAlertState";
import CandyButton from './components/CandyButton';
import CandyCounter from "./components/CandyCounter";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  return (
      <main>
        <CandyButton
            setAlertState={setAlertState}
            setStartDate={setStartDate}
            alertState={alertState}
            candyMachineId={props.candyMachineId}
            config={props.config}
            connection={props.connection}
            startDate={startDate}
            treasury={props.treasury}
            txTimeout={props.txTimeout}
        />
        <CandyCounter
            setAlertState={setAlertState}
            alertState={alertState}
        />
      </main>
  );
};


export default Home;
