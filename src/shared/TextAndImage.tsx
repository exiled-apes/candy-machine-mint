import React from 'react'

const TextAndImage = ({reversed, image, text}: {reversed?: boolean, image: string, text: string}) => {

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
      <p>{text}</p> 
    </div>
    <div>
      <img  style={{width: '400px'}} src={image}/>
    </div>
  </div>
  )
}

TextAndImage.defaultProps = {
  reversed: false,
}

export default TextAndImage;