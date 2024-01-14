import React from 'react'
import Dark from '../assets/Images/dark-img.jpg'
import Light from '../assets/Images/light-img.jpg'
import './style.css'
import { useNavigate } from 'react-router-dom'
const Pages = () => {
    const navigate =useNavigate()
    const dark =()=>{
        navigate('/dark')
    }
    const light =()=>{
        navigate('/light')
    }
    return (
        <div className='pages__container'>
            <p className='pages__name'>COMING SOON</p>
            <p className='pages__title'>RESPONSIVE MOBILE WEB TEMPLATE</p>
            <div className='pages__content justify-center '>
                <p className='pages__text'>This is an easy way to launch a coming soon page for your business. This is clean, creative design, very easy to customize and based on HTML5 & CSS3 and Bootstrap 3.3.5 and much more.</p>

            </div><div className='pages__versoin'>
                <div className='dark__container ' onClick={()=>{dark()}}>
                    <p className='dark__name text-[20px] md:text-[18px] drop-shadow-lg text-white'>DARK VERSION</p>
                    <img className='dark__image' src={Dark} alt="" />
                </div>
                <div className='light__container ' onClick={()=>{light()}}>
                    <p className='light__name text-[20px] md:text-[18px] drop-shadow-lg text-white'>LIGHT VERSOIN</p>
                    <img className='light__image' src={Light} alt="" />
                </div>
            </div>
            <p className='md:h-16'></p>
        </div>
    )
}

export default Pages