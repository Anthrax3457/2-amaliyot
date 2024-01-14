import React from 'react'
import './style.css'

const Card = () => {
  return (
    <section className='card__container'>
      <div className='content'>
        <div className='md:shadow-md  md:shadow-[#f1f1f1]'>
          <p className='card__name'>NEW WEBSITE IS COMING UP!</p>
          <p className='card__title'>WE ARE ALMOST READY TO LAUNCH</p>
          <p className='card__text'>This responsive template is brought to you by templatemo website. Feel free to download and use this layout. You can set the countdown date and time in <span>init.js</span> file inside <span>js</span> folder.</p>
          <div className='times__conatiner'>
            <div className='time__content'>
              <p className='time__num'>180</p>
              <p className='time_text'>DAYS</p>
            </div>
            <div className='time__content'>
              <p className='time__num'>10</p>
              <p className='time_text'>HOURS</p>
            </div>
            <div className='time__content'>
              <p className='time__num'>20</p>
              <p className='time_text'> MINUTES</p>
            </div>
            <div className='time__content'>
              <p className='time__num'>30</p>
              <p className='time_text'>SECONDS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card