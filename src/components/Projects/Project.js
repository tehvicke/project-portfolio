import React from 'react'
import ModalImage from 'react-modal-image'
import './Project.css'

const getIconUrl = type => {
  switch (type) {
    case 'github':
      return '/icons/GitHub-Mark-Light-64px.png'
    case 'demo':
      return '/icons/demo.png'
    case 'app-store':
      return '/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
    default:
      return '...'
  }
}

const getLogoUrl = links => {
  return links.filter(link => {
    return link.type === 'demo' || link.type === 'app-store'
  })[0].url
}
export const Project = ({ data }) => {
  return (
    <div className='highlighted-project'>
      <div className='project-wrapper'>
        <div className='logo'>
          <a href={getLogoUrl(data.links)} target='_blank' rel='noopener noreferrer'>
            <img src={data.icon} alt='project logo' className='project-logo' />
          </a>
        </div>

        <div className='text-wrapper'>
          <div className='header-wrapper'>
            <h3>{data.name}</h3>
            <p>{data.date}</p>
          </div>
          <div className='content-wrapper'>
            <div className='left-content'>
              <div className='description'>
                <h6>Description</h6>
                <p>{data.description}</p>
              </div>
              <div className='project-images'>
                {data.images.map(img => {
                  return <ModalImage small={img} large={img} alt='Project image' className='project-image-small' />
                })}
              </div>
            </div>
            <div className='right-content'>
              <div className='technology'>
                <h6>Tech used</h6>
                {data.technology.map((tech, index) => (
                  <p key={index}>{tech}</p>
                ))}
              </div>

              <div className='project-links'>
                {data.links.map(link => {
                  return (
                    <a href={link.url} target='_blank' rel='noopener noreferrer'>
                      <img src={getIconUrl(link.type)} alt={link.text} />
                      <p>{link.text}</p>
                    </a>
                  )
                })}
              </div>
            </div>
            <div className='client'>
              {/* <h6>Client</h6> */}
              <p>{data.client}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
