import React, { useState } from 'react'
import './HighlightedProject.css'

export const HighlightedProject = ({ data }) => {
  const [minimized, setMinimized] = useState(true)

  return (
    <div className='highlighted-project'>
      <div className='project-wrapper'>
        <div className='image-wrapper'>
          {data.images.map((image, index) => (
            <img key={index} src={image} />
          ))}
        </div>

        <div className='text-wrapper'>
          <div className='header-wrapper'>
            <h3>{data.name}</h3>
            <p>{data.date}</p>
          </div>
          <div className='content-wrapper'>
            <div className='description'>
              <h6>Description</h6>
              <p>{data.description}</p>
            </div>

            <div className='technology'>
              <h6>Tech used</h6>
              {data.technology.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
            <div className='client'>
              <h6>Client</h6>
              <p>{data.client}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
