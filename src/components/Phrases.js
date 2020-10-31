import React from 'react'


export const Phrases = () => {
  return (
    <div>
      <h1>Phrases2Frases</h1>
      <input className='input' type='text' placeholder='1' size='1'></input>
      <input className='btn' type='button' value='Gerar'></input>
      <div className='content'>
        <div className='english'>
          <img src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-united-states_1f1fa-1f1f8.png'} alt='USA' />
          <p>Phrase</p>
        </div>
        <div className='portuguese'>
          <img src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-brazil_1f1e7-1f1f7.png'} alt='BRA' />
          <p>Frase</p>
        </div>
      </div>
    </div>
  )
}