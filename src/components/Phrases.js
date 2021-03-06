import React, { useState } from 'react'
import axios from 'axios'
import { Phrase } from './Phrases.styles'


export const Phrases = () => {
  const [quantity, setQuantity] = useState('')
  const [phrases, setPhrases] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const phrase = async () => {
    try {
      setLoading(true)
      const urlAllPhrases = 'https://phrases2frases.herokuapp.com/'
      const response = await axios.get(urlAllPhrases)
      const allPhrases = await response.data.body.map(phrase => phrase.phrase)
      if (quantity <= allPhrases.length) {
        const url = `https://phrases2frases.herokuapp.com/random?quantity=${quantity}`
        const response = await axios.get(url)
        const phrasesResponse = await response.data.body
        setPhrases(phrasesResponse)
        setError('')
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Phrase>
      {error ? <h1 className='error'>Digite uma quantidade menor de frases!!!</h1> : null}
      <h1>Phrases2Frases</h1>
      <input className='input' type='text' placeholder='1' size='1' onChange={event => setQuantity(event.target.value)}></input>
      <input className='btn' type='button' value='Gerar' onClick={phrase}></input>
      {loading ? <h1 className='loading'>Carregando...</h1> : null}
      {!loading && !error &&(
        <div className='content'>
        <div className='english'>
          <img src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-united-states_1f1fa-1f1f8.png'} alt='USA' />
          {Object.values(phrases).map(phrases => <p><em>{phrases.phrase}</em></p>)}
        </div>
        <div className='portuguese'>
          <img src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-brazil_1f1e7-1f1f7.png'} alt='BRA' />
          {Object.values(phrases).map(phrases => <p>{phrases.frase}</p>)}
        </div>
      </div>
      )}
    </Phrase>
  )
}