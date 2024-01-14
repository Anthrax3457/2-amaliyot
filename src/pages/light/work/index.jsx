import React  from 'react'
import './style.css'
import { FaDribbble } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Work = () => {
  return (
    <div id='work' className='work__container bg-[#fff]  md:px-[20%]  border-[2px] border-[#f7f7f7]  mt-[50px]'>
      <p className='work__name mt-[90px]'>OUR WORK</p>
      <p className='work__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
      </p>
     <div className='work__items-content  mt-20  '>
     <div className='work__content'>
        <div className='work__items border-r md:border-b border-[#f6f6f6]'>
          <div className='work__items  md:mr-[7%] '  >
            <div className='grid justify-center items-center border-[3px]   border-[#fd9426]  w-[80px] h-[80px] text-[24px] text-[#fd9426] rounded-[50px] mr-auto ml-auto'><FaDribbble /></div>
            <p className='work__items-title'>WEBSITE</p>
            <p className='work__items-text '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
      <div className='work__content' >
        <div className='work__items border-t md:border-none  border-[#f6f6f6]'>
          <div className='work__items md:ml-[7%]' >
            <div className='grid justify-center items-center border-[3px]   border-[#fd9426]  w-[80px] h-[80px] text-[24px] text-[#fd9426] rounded-[50px] mr-auto ml-auto'><FaLink /></div>
            <p className='work__items-title'>MOBILE APP </p>
            <p className='work__items-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
      <div className='work__content' >
        <div className='work__items border-t border-r  border-[#f6f6f6]'>
          <div className='work__items md:mr-[7%]' >
            <div className='grid justify-center items-center border-[3px]   border-[#fd9426]  w-[80px] h-[80px] text-[24px] text-[#fd9426] rounded-[50px] mr-auto ml-auto'><FaMobileScreenButton /></div>
            <p className='work__items-title'>UX DESIGN </p>
            <p className='work__items-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
      <div className='work__content' >
        <div className='work__items  md:border-t  md:border-l   border-[#f6f6f6]'>
          <div className='work__items md:ml-[7%]' >
            <div className='grid justify-center items-center border-[3px]   border-[#fd9426]  w-[80px] h-[80px] text-[24px] text-[#fd9426] rounded-[50px] mr-auto ml-auto'><FaCloud /></div>
            <p className='work__items-title'>SOCIAL MEDIA </p>
            <p className='work__items-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
      </div>
      <p className='h-[60px]'></p>
     </div>
    </div>
  )
}

export default Work