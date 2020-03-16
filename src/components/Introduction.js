import React from 'react'
import './Introduction.css'

const name = 'Viktor Dahl'
const oneLiner = 'Software developer | Ex-Mgmt Consultant | Freelancer'

export const Introduction = () => {
  return (
    <div className='intro'>
      <img src='viktor.png' alt='Portrait' className='portrait' />
      <h1>{name}</h1>
      <h2>{oneLiner}</h2>
    </div>
  )
}
