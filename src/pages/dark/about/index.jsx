import React from 'react'
import './style.css'
import Person from '../../../assets/Images/about-img.png'

const About = () => {
  return (
    <section id='about'>
      <div className='dark_about__container'>
        <div className='dark_about__texts'>
          <div>
            <p className='dark_about__name'>WEB DESIGN</p>
            <p className='dark_about__text mt-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.</p>
            <p className='dark_about__text mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
        <div className='dark_about__img'>
          <img className='w-[300px]' src={Person} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About