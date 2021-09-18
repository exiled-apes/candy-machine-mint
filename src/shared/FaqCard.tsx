import React from 'react'

const FaqCard = ({question, answer}: {question: string, answer: string}) => {

  return (
    <div
      style={{
        padding: '24px 32px',
        background: '#25282c',
        height: '100%',
        margin: '10px'
      }
    }>
    <p>{answer}</p>
    <span style={{color:'white', borderTop: '#33363a'}}>{question}</span> 
    </div>
  )
}

export default FaqCard;
