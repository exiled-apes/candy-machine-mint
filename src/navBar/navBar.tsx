import React from 'react';
import placeHolderImage from '../media/image-placeholder.jpeg'
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
            <img src={placeHolderImage} style={{width: '30px'}}/>
          </a>  
        </div>
        <div style={{...frowBetween, width: '25%'}}>
          <Button style={{color: 'white'}} href='https://discord.com/'>Discord</Button>
          <Button style={{background: '#6163ff', color: 'white'}} href='https://twitter.com/'>Twitter</Button>
        </div>

      </div>
    </div>
  )
}

export default navBar;