import React from 'react'
import './MinorProject.css'

export const MinorProject = ({ data }) => {
  return <div className='highlighted-project'>{data.name}</div>
}
