import React from 'react'
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
import git from '../git.png'
import arrow from '../arrow.png'
import './PortfolioPage.css'

function DesktopPage() {
  return (
    <div>
        <div className='navbar'>
        <ul>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        </ul>
        </div>
        <div className='about' id='about'>
           <p>Hello .</p>
           <p>I am Arpita ,</p>
           <p>Software Developer .</p>
           <div className='resume' >
            <a href='Arpita Resume.pdf' target='_blank' >See My Resume<img className='arrow1' src={arrow} alt='arrow' ></img> </a>
           </div>
           <div className='description'>
            <p>I currently work at Dell Technologies. My role is to design , create & maintain Applications that provide KPIs for Business Analysis. I collaborate with cross-functional teams , participate in code reviews and also interact with stakeholders to gather feedback and understand requirements . I also help interns starting out in their endeavours. </p>
           </div>
        </div>
        <div className='skills' id='skills'>
            <p>SOME TECHNOLOGIES I HAVE WORKED WITH : </p>
            <p className='skillsIcon'>
            <img src={reactIcon} alt='reacticon'/>
            <img src={reduxIcon} alt='reduxIcon'/>
            <img src={python} alt='python'/>
            <img src={js} alt='js'/>
            <img src={html} alt='html'/>
            <img src={css} alt='css'/>
            <img src={materialui} alt='materialui'/>
            <img src={bootstrap} alt='bootstrap'/>
            <img src={git} alt='git'/>
          </p>
        </div>
        <div className='experience' id='experience'>
            <p>EXPERIENCE : </p>
            <h3>
                <span>Software Development Engineer </span>
                <span className='company'><a href='https://www.dell.com/en-in'>@ Dell Technologies</a></span>
            </h3>
            <ul className='items'>
              <li>Collaborated through Product Model (Product Management, Design and Engineering) and maintained 4+ applications frontend development.</li>
              <li>Participated in stakeholder meetings and reviews to introduce new features and increase ease of use.</li>
              <li>Re-built a 5 yr old application in React with a complete new user experience design and released its MVP in 7 months. </li>
              <li>Built Scalable ,reusable UI components for future use.</li>
              <li>Maintained and improved CI/CD Maturity Score for applications.</li>
            </ul>
        </div>
        <div className='footer'>
            <p>Get in Touch with Me</p>
            <div className='button'>
            <button onClick={()=>window.location = 'mailto:elkyie0309@gmail.com'}>Say Hello</button>
            </div>
            <div className='links'>
            <a href='https://www.linkedin.com/in/arpita-nanda/'><img src={linkedin} alt='linkedin'></img></a>
            <a href='https://www.instagram.com/ar._naa/'><img src={instagram} alt='instagram'></img></a>
            <a href='https://github.com/Maeve03'><img src={github} alt='github'></img></a> 
           </div>
        </div>
    </div>
  )
}

export default DesktopPage