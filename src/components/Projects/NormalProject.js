import React from 'react'
import './NormalProject.css'

export const NormalProject = ({ data }) => {
  return <div className='highlighted-project'>{data.name}</div>
}
