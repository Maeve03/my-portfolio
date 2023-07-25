import React from 'react'
import dp from '../profilepic.jpeg'
import css from '../css.png'
import html from '../html.png'
import js from '../js.png'
import python from '../python.png'
import reactIcon from '../react.png'
import reduxIcon from '../redux.png'
import './MobilePage.css'

function MobilePage() {
  return (
    <div>
        <div className='avatar'>
          <img src={dp} alt='arpita'/>
        </div>
        <div className='title'>
          <h2>Arpita Nanda</h2>
        </div>
        <div className='description'>
          <h4>Software Developer</h4>
        </div>
        <div className='about'>
          <h3>{`<About/>`}</h3>
          <p>I am currently working at Dell Technologies. My role is to design & debug </p>
          <a href='Arpita Resume.pdf' download>Download Resume</a>
        </div>
        <div className='skills'>
          <h3>{`<Skills/>`}</h3>
          <p>
            <img src={reactIcon} alt='reacticon'/>
            <img src={reduxIcon} alt='reduxIcon'/>
            <img src={python} alt='python'/>
            <img src={js} alt='js'/>
            <img src={html} alt='html'/>
            <img src={css} alt='css'/>
          </p>
        </div>
        <div className='Experience'>
          <h3>{`<Experience/>`}</h3>
          <p className='Company'>Dell Technologies</p>
          <p className='Role'>Software Development Engineer</p>
          <p className='Work'>Dell Technologies</p>
        </div>
        <div className='Contact'>
          <h3>{`<Contact/>`}</h3>
          <p>I am currently working at Dell Technologies. My role is to design & debug </p>
        </div>
    </div>
  )
}

export default MobilePage