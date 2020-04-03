import React from 'react'
import { HighlightedProject } from './Projects/HighlightedProject.js'
import { NormalProject } from './Projects/NormalProject.js'
import './Projects.css'

import allProjects from '../data/projects.json'

export const Projects = () => {
  return (
    <div className='projects-wrapper-outer'>
      <div className='projects-wrapper'>
        <h4>Projects</h4>
        {allProjects.map((project, index) => {
          if (project.type === 'highlighted') {
            return <HighlightedProject key={index} data={project} />
          } else if (project.type === 'normal') {
            return <NormalProject key={index} data={project} />
          }
        })}
      </div>
    </div>
  )
}
