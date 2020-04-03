import React from 'react'
import './App.css'
import { Introduction } from './components/Introduction.js'
import { Links } from './components/Links.js'
import { TechSkills } from './components/TechSkills.js'
import { Writing } from './components/Writing.js'
import { Projects } from './components/Projects.js'

const App = () => {
  return (
    <div className='portfolio-app'>
      <Introduction />

      <div className='info-boxes'>
        <Links className='info-box' />
        <Writing className='info-box' />
        <TechSkills className='info-box' />
      </div>

      {/* <Projects /> */}
    </div>
  )
}

export default App
