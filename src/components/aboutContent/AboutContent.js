import './AboutContent.css'
import { Link } from 'react-router-dom'
import React2 from '../../assets/react2.webp'
import React1 from '../../assets/react1.jpg'
import pdf from '../../assets/Mateo cv ingles.pdf'
import pdf2 from '../../assets/MATEO CAVA cv español.pdf'




import React from 'react'
// import DescargarCurriculum from '../curriculum/Curriculum'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I'm a full stack web developer. I feel attracted to everything related to technology. I am looking foward to adquire more experience.</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
            <div className='resume'>
            {/* <button className='btn'>
      <a href={pdf2} target="_blank" rel="noopener noreferrer" download="MATEO CAVA cv español.pdf"> 
      Download my resume(spanish) 
      </a>
    </button> */}
    <button className='btn'>
      <a href={pdf} target="_blank" rel="noopener noreferrer" download="Curriculum Mateo English 423.pdf"> 
      Download my resume 
      </a>
    </button>
            </div>        
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt='true' />
                </div>
                <div className='img-stack bottom'>
                    <img src={React2} className='img' alt='true' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent