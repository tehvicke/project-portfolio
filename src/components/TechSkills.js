import React, { useState } from 'react'
import allSkills from '../data/skills.json'
import './TechSkills.css'

const maxRating = 5
const minRatingToShow = 3

const drawCategory = category => {
  let letter
  switch (category) {
    case 'language':
      letter = 'L'
      break
    case 'framework':
      letter = 'F'
      break
    case 'technology':
      letter = 'T'
      break
    default:
      letter = 'X'
  }
  return <span className='category'>{letter}</span>
}
const drawRating = rating => {
  const circle = (fill, index) => <div key={index} className={`circle ${fill && 'filled'}`}></div>
  const halfCircle = index => (
    <div key={index} className='circle'>
      <div className='half-circle-left-outer'>
        <div className='half-circle-left-inner'></div>
      </div>
    </div>
  )

  let drawing = []
  for (let i = 0; i < maxRating; i++) {
    if (rating - i === 0.5) {
      drawing.push(halfCircle(i))
    } else {
      drawing.push(circle(i < rating, i))
    }
  }
  return drawing
}

const renderSkills = (skills, showAll) => {
  if (!skills) return

  skills.sort((a, b) => b.rating - a.rating)
  return skills.map((skill, index) => {
    if (!showAll && skill.rating < minRatingToShow) return

    return (
      <li key={index}>
        <span>
          {drawCategory(skill.category)}
          <p>{skill.name}</p>
        </span>
        <div className='rating'>{drawRating(skill.rating)}</div>
      </li>
    )
  })
}

export const TechSkills = ({ className }) => {
  const [showAll, setShowAll] = useState(true)

  return (
    <div className={`${className} tech-skills`} onClick={() => setShowAll(!showAll)}>
      <h4>Tech skills</h4>
      <h5>Web</h5>
      <ul>{renderSkills(allSkills.web, showAll)}</ul>
      <h5>Mobile</h5>
      <ul>{renderSkills(allSkills.mobile, showAll)}</ul>
      <h5>Other</h5>
      <ul>{renderSkills(allSkills.other, showAll)}</ul>
    </div>
  )
}
