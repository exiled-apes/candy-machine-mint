import React from 'react'
import placeHolderImage from '../media/image-placeholder.jpeg'

const TextAndImage = ({reversed}: {reversed: boolean}) => {

  return (
    <div className='frow' 
    style={{
      width: '60%',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'opacity 0.5s',
      opacity: '1',
      flexDirection: reversed ? 'row-reverse' : 'row',
      margin: '30px'
    }}>
    <div style={{width: '50%'}}>
      <h3 style={{marginBottom: '12px', color: 'white'}}>Text Header</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
      </p> 
    </div>
    <div>
      <img  style={{width: '400px'}} src={placeHolderImage}/>
    </div>
  </div>
  )
}

TextAndImage.defaultProps = {
  reversed: false,
}

export default TextAndImage;