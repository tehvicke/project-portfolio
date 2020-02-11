import React from 'react'
import './App.css'

function App() {
  return (
    <div className='portfolio-app'>
      <img src='viktor.png' alt='Portrait of Viktor' className='portrait' />
      <h1>Viktor Dahl</h1>
      <h3>Full-stack developer | Ex-Mgmt Consultant | Freelancer</h3>
      <br />
      <div className='info-box'>
        <div className='links'>
          <a href='https://github.com/tehvicke' target='_blank' rel='noopener noreferrer'>
            <img src='/icons/GitHub-Mark-Light-64px.png' alt='Github logo' />
            <p>Github</p>
          </a>
          <a href='https://www.linkedin.com/in/viktordahl/' target='_blank' rel='noopener noreferrer'>
            <img src='/icons/LinkedIn.png' alt='LinkedIn logo' />
            <p>LinkedIn</p>
          </a>
          <a href='https://www.facebook.com/tehvicke' target='_blank' rel='noopener noreferrer'>
            <img src='/icons/facebook-3-64.png' alt='Facebook logo' />
            <p>Facebook</p>
          </a>
          <a href='https://medium.com/@tehvicke' target='_blank' rel='noopener noreferrer'>
            <img src='/icons/medium.png' alt='Medium logo' />
            <p>Medium</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
