import React  from 'react'
import './style.css'
import { FaDribbble } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Work = () => {
  return (
    <div id='work' className='dark_work__container border-[2px] bg-[#101010]  md:px-[20%] border-[#111111] shadow-sm shadow-[#191919]  mt-[50px]'>
      <p className='dark_work__name mt-[90px]'>OUR WORK</p>
      <p className='dark_work__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
      </p>
     <div className='dark_work__items-content  mt-20  '>
     <div className='dark_work__content'>
        <div className='dark_work__items border-r md:border-b border-[#191919]'>
          <div className='dark_work__items  md:mr-[7%] '  >
            <div className='grid justify-center items-center border-[3px]   border-[#fd9426]  w-[80px] h-[80px] text-[24px] text-[#fd9426] rounded-[50px] mr-auto ml-auto'><FaDribbble /></div>
            <p className='dark_work__items-title'>WEBSITE</p>
            <p className='dark_work__items-text '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
      <div className='dark_work__content' >
        <div className='dark_work__items border-t md:border-none  border-[#191919]'>
          <div className='dark_work__items md:ml-[7%]' >
            <div className='grid justify-center items-center border-[3px]   border-[#fd9426]  w-[80px] h-[80px] text-[24px] text-[#fd9426] rounded-[50px] mr-auto ml-auto'><FaLink /></div>
            <p className='dark_work__items-title'>MOBILE APP </p>
            <p className='dark_work__items-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
      <div className='dark_work__content' >
        <div className='dark_work__items border-t border-r  border-[#191919]'>
          <div className='dark_work__items md:mr-[7%]' >
            <div className='grid justify-center items-center border-[3px]   border-[#fd9426]  w-[80px] h-[80px] text-[24px] text-[#fd9426] rounded-[50px] mr-auto ml-auto'><FaMobileScreenButton /></div>
            <p className='dark_work__items-title'>UX DESIGN </p>
            <p className='dark_work__items-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
      <div className='dark_work__content' >
        <div className='dark_work__items  md:border-t  md:border-l   border-[#191919]'>
          <div className='dark_work__items md:ml-[7%]' >
            <div className='grid justify-center items-center border-[3px]   border-[#fd9426]  w-[80px] h-[80px] text-[24px] text-[#fd9426] rounded-[50px] mr-auto ml-auto'><FaCloud /></div>
            <p className='dark_work__items-title'>SOCIAL MEDIA </p>
            <p className='dark_work__items-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
      <p className='h-[60px]'></p>
     </div>
    </div>
  )
}

export default Work