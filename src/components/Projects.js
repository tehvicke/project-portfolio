import React from 'react'
import { Project } from './Projects/Project.js'
import { MinorProject } from './Projects/MinorProject.js'
import './Projects.css'

import allProjects from '../data/projects.json'

export const Projects = () => {
  return (
    <div className='projects-wrapper-outer'>
      <div className='projects-wrapper'>
        <h4>Projects</h4>
        {allProjects.map((project, index) => {
          if (project.type === 'minor') {
            return <MinorProject key={index} data={project} />
          } else {
            return <Project key={index} data={project} />
          }
        })}
      </div>
    </div>
  )
}
