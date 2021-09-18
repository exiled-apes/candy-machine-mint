import React from 'react'

const FaqCard = ({question, answer}: {question: string, answer: string}) => {

  return (
    <div
      style={{
        padding: '24px 32px',
        background: '#25282c',
        minHeight: '100%',
        margin: '10px',
        width: '30%'
      }
    }>
    <p style={{borderBottom: '1px solid #33363a', paddingBottom: '15px'}}>{answer}</p>
    <span 
      style={{
        color:'white',
        borderTop: '#33363a',
        paddingTop: '10px',
        paddingBottom: '20px',
        fontSize: '18px'
      }}
      >
      {question}
    </span> 
    </div>
  )
}

export default FaqCard;
