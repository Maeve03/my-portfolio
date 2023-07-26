import React from 'react'
import dp from '../mitsuri.jpg'
import css from '../css.png'
import html from '../html.png'
import js from '../js.png'
import python from '../python.png'
import reactIcon from '../react.png'
import reduxIcon from '../redux.png'
import linkedin from '../linkedin.png'
import instagram from '../instagram.png'
import mail from '../mail.png'
import materialui from '../materialui.png'
import bootstrap from '../bootstrap.png'
import github from '../github.png'
import './MobilePage.css'

function MobilePage() {
  return (
    <div>
        <div className='avatar'>
          <img src={dp} alt='arpita'/>
        </div>
        <div className='title'>
          <h1>Arpita Nanda</h1>
        </div>
        <div className='description'>
          <h3>Software Developer , Traveller</h3>
        </div>
        <div className='Contact'>
        <button onClick={()=> window.location = 'mailto:elkyie0309@gmail.com' }><img src={mail} alt='mail' ></img></button>
          <a href='https://www.linkedin.com/in/arpita-nanda/'><img src={linkedin} alt='linkedin'></img></a>
          <a href='https://www.instagram.com/ar._naa/'><img src={instagram} alt='instagram'></img></a>
          <a href='https://github.com/Maeve03'><img src={github} alt='github'></img></a>  
        </div>
        <div className='about'>
          <h3>{`~ About`}</h3>
          <p>I am currently working at Dell Technologies. My role is to design , develop & optimize performance of Applications that provide KPIs for Business Analysis. I also mentor interns. </p>
          <p>I have worked extensively on Javascript Framework (React).</p>
          <a href='Arpita Resume.pdf' download>Download Resume</a>
        </div>
        <div className='skills'>
          <h3>{`~ Skills`}</h3>
          <p>
            <img src={reactIcon} alt='reacticon'/>
            <img src={reduxIcon} alt='reduxIcon'/>
            <img src={python} alt='python'/>
            <img src={js} alt='js'/>
            <img src={html} alt='html'/>
            <img src={css} alt='css'/>
            <img src={materialui} alt='materialui'/>
            <img src={bootstrap} alt='bootstrap'/>
          </p>
          <p>React, Redux, HTML, CSS, Javascript, Python, MaterialUI, Bootstrap, Git</p>
        </div>
        <div className='Experience'>
          <h3>{`~ Experience`}</h3>
          <p className='Company'>Dell Technologies</p>
          <p className='Role'>Software Development Engineer</p>
          <p className='Work'>
            <ul>
              <li>Collaborated through Product Model (Product Management, Design and Engineering) and maintained 4+ applications frontend development.</li>
              <li>Participated in stakeholder meetings and reviews to introduce new features and increase ease of use.</li>
              <li>Re-built a 5 yr old application in React with a complete new user experience design and released its MVP in 7 months. </li>
              <li>Built Scalable ,reusable UI components for future use.</li>
              <li>Maintained and improved CI/CD Maturity Score for applications.</li>
            </ul>
          </p>
        </div>
        
    </div>
  )
}

export default MobilePage