import React from 'react'
import './App.css'
import { Introduction } from './components/Introduction.js'
import { Links } from './components/Links.js'
import { TechSkills } from './components/TechSkills.js'
import { Writing } from './components/Writing.js'

const App = () => {
  return (
    <div className='portfolio-app'>
      <Introduction />

      <Links className='info-box' />
      <Writing className='info-box' />
      <TechSkills className='info-box' />
    </div>
  )
}

export default App
