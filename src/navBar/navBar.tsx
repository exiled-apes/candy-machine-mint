import React from 'react';
import navImage from '../media/instagram.png'
import { Button, CircularProgress, Snackbar } from "@material-ui/core";

const navBar = () => {

  const frowBetween = {
    display: 'flex',
    flexDirection: 'row' as any,
    justifyContent: 'space-between',
  }

  const frowCenter = {
    display: 'flex',
    flexDirection: 'row' as any,
    justifyContent: 'center',
    paddingTop: '50px',
  }


  return (
    <div style={frowCenter}>
      <div style={{...frowBetween, width: '70%'}}>
        <div>
          <a href=''>
            <img src={navImage} style={{width: '30px'}}/>
          </a>  
        </div>
        <div style={{...frowBetween, width: '20%'}}>
          <Button style={{color: 'white'}}>Twitter</Button>
          <Button style={{background: '#6163ff', color: 'white'}}>Discord</Button>
        </div>

      </div>
    </div>
  )
}

export default navBar;