import React from 'react'
import './Links.css'

export const Links = ({ className }) => {
  return (
    <div className={className}>
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
  )
}
