import React from 'react'
import './style.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import { HiMiniGlobeEuropeAfrica } from "react-icons/hi2";
import { BiSolidPhone } from "react-icons/bi";



const Footer = () => {
  return (
    <div id='contact' className='bg-[#191919] h-[100%] min-[920px]: gap-[40px] md:justify-center mt-[-100px]  pt-[200px] grid px-[20px] text-[#6E6E6E]'>
      <div className='grid lg:gap-[90px] xl:gap-[155px] gap-5 md:flex'>
        <div className='md:w-[200px] lg:w-[100%]'>
          <p className='dark_footer__title sm:text-[25px] '>OUR OFFICE</p>
          <div className='flex items-center mt-[24px] gap-2'>
            <p className='text-[16px]'><BiSolidPhone /></p>
            <p className='text-[14px]'> Tel: 010-020-0340 | 090-080-0760</p>
          </div>
          <div className='flex items-center mt-[8px] gap-2'>
            <p className='text-[16px]'><HiMiniGlobeEuropeAfrica /></p>
            <p className='text-[14px]'>URL: www.company.com</p>
          </div>
          <div className='flex items-center mt-[8px] gap-2'>
            <p className='text-[16px]'><MdOutlineMailOutline /></p>
            <p className='text-[14px]'> Email: info@company.com</p>
          </div>
        </div>
        <div>
          <p className='dark_footer__title sm:text-[25px] lg:w-[150px]'> SOCIAL MEDIA</p>
          <div className='flex  md:grid  min-[420px]:grid-cols-4 min-[420px]:justify-start min-[320px]:grid  min-[420px]:w-[300px]  sm:flex  sm:w-full   min-[320px]:grid-cols-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-[250px]  md:w-[110px] gap-2 justify-start items-center mt-[24px]'>
            <div className='w-[50px] bg-[#202020] min-[320px]:w-[55px] min-[320px]:h-[55px] lg:w-[60px] lg:h-[60px] ease-in duration-700 sm:text-[18px] hover:bg-[#FD9426] hover:text-[black] h-[50px] grid items-center justify-center text-center '><FaFacebookF /></div>
            <div className='w-[50px] bg-[#202020] min-[320px]:w-[55px] min-[320px]:h-[55px] lg:w-[60px] lg:h-[60px] ease-in duration-700 sm:text-[18px] hover:bg-[#FD9426] hover:text-[black] h-[50px] grid items-center justify-center text-center '><FaTwitter /></div>
            <div className='w-[50px] bg-[#202020] min-[320px]:w-[55px] min-[320px]:h-[55px] lg:w-[60px] lg:h-[60px] ease-in duration-700 sm:text-[18px] hover:bg-[#FD9426] hover:text-[black] h-[50px] grid items-center justify-center text-center '><FaDribbble /></div>
            <div className='w-[50px] bg-[#202020] min-[320px]:w-[55px] min-[320px]:h-[55px] lg:w-[60px] lg:h-[60px] ease-in duration-700 sm:text-[18px] hover:bg-[#FD9426] hover:text-[black] h-[50px] grid items-center justify-center text-center '><ImPinterest2 /></div>
            <div className='w-[50px] bg-[#202020] min-[320px]:w-[55px] min-[320px]:h-[55px] lg:w-[60px] lg:h-[60px] ease-in duration-700 sm:text-[18px] hover:bg-[#FD9426] hover:text-[black] h-[50px] grid items-center justify-center text-center '><FaBehance /></div>
            <div className='w-[50px] bg-[#202020] min-[320px]:w-[55px] min-[320px]:h-[55px] lg:w-[60px] lg:h-[60px] ease-in duration-700 sm:text-[18px] hover:bg-[#FD9426] hover:text-[black] h-[50px] grid items-center justify-center text-center '><FaGithub /></div>
          </div>
        </div>
        <div className='grid'>
          <p className='dark_footer__title sm:text-[25px] md:w-[150px lg:w-[180px]'>SUBSCRIBE NOW</p>
          <p className='text-[15px] leading-5 mt-[24px] md:w-[200px] lg:w-[250px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </p>
          <input className='w-[270px] bg-[#202020] lg:w-[280px] lg:h-[50px] md:w-[200px] md:h-[43px] mt-5 sm:mt-6 placeholder:text-[#6E6E6E] px-[16px]  h-[50px]' placeholder='Your Email' type="text" name="" id="" />
          <button className='w-[270px] bg-[#202020] md:w-[200px]  lg:w-[280px] lg:h-[50px] md:h-[43px] md:mt-4 mt-7 placeholder:text-[#6E6E6E]  px-[16px]  h-[50px]'>submit</button>
          <p className='h-[50px]'></p>
        </div>
      </div>

    </div>
  )
}

export default Footer