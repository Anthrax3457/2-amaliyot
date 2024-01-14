import React from 'react'
import './style.css'

const Card = () => {
  return (
    <section className='dark_card__container '>
      <div className='dark_content shadow-sm shadow-[#202020]'>
        <div className=''>
          <p className='dark_card__name'>NEW WEBSITE IS COMING UP!</p>
          <p className='dark_card__title'>WE ARE ALMOST READY TO LAUNCH</p>
          <p className='dark_card__text'>This responsive template is brought to you by templatemo website. Feel free to download and use this layout. You can set the countdown date and time in <span>init.js</span> file inside <span>js</span> folder.</p>
          <div className='dark_times__conatiner'>
            <div className='dark_time__content'>
              <p className='dark_time__num'>180</p>
              <p className='dark_time_text'>DAYS</p>
            </div>
            <div className='dark_time__content'>
              <p className='dark_time__num'>10</p>
              <p className='dark_time_text'>HOURS</p>
            </div>
            <div className='dark_time__content'>
              <p className='dark_time__num'>20</p>
              <p className='dark_time_text'> MINUTES</p>
            </div>
            <div className='dark_time__content'>
              <p className='dark_time__num'>30</p>
              <p className='dark_time_text'>SECONDS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card