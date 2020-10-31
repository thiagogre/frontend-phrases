import React, { useState } from 'react'
import axios from 'axios'


export const Phrases = () => {
  const [quantity, setQuantity] = useState('')
  const [phrases, setPhrases] = useState('')
  const [frases, setFrases] = useState('')
  const phrase = async () => {
    const urlAllPhrases = 'https://phrases2frases.herokuapp.com/'
    const response = await axios.get(urlAllPhrases)
    const allPhrases = await response.data.body.map(phrase => phrase.phrase)
    if (quantity <= allPhrases.length) {
      const url = `https://phrases2frases.herokuapp.com/random?quantity=${quantity}`
      const response = await axios.get(url)
      const phrasesResponse = await response.data.body
      const phrases = phrasesResponse.map(phrase => phrase.phrase)
      const frases = phrasesResponse.map(frase => frase.frase)
      setPhrases(phrases)
      setFrases(frases)
    }
  }

  return (
    <div>
      <h1>Phrases2Frases</h1>
      <input className='input' type='text' placeholder='1' size='1' onChange={event => setQuantity(event.target.value)}></input>
      <input className='btn' type='button' value='Gerar' onClick={phrase}></input>
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