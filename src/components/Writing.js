import React, { useEffect } from 'react'
import './Writing.css'

export const Writing = ({ className }) => {
  useEffect(() => {
    window.mediumWidget()
  }, [])
  return (
    <div className={`${className}`}>
      <h4>Writing</h4>
      <div id='medium-widget'></div>
    </div>
  )
}
