import Alert from "@material-ui/lab/Alert";
import {Snackbar} from "@material-ui/core";
import AlertState from "./CandyAlertState";
import React from "react";

export interface CandyCounterProps {
  setAlertState: React.Dispatch<React.SetStateAction<AlertState>>;
  alertState: AlertState
}

const CandyCounter = (props: CandyCounterProps) => {
  return (
      <Snackbar
          open={props.alertState.open}
          autoHideDuration={6000}
          onClose={() => props.setAlertState({...props.alertState, open: false})}
      >
        <Alert
            onClose={() => props.setAlertState({...props.alertState, open: false})}
            severity={props.alertState.severity}
        >
          {props.alertState.message}
        </Alert>
      </Snackbar>
  );
}

export default CandyCounter;