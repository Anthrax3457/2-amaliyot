import React, { useEffect, useState } from 'react'
import Card from './card/index'
import About from './about/index'
import './style.css'
import Work from './work'
import Home from './home'
import Footer from './footer'
import Loader from '.././loader'
import Header from './head/'

const Dark = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // "loading" holatini o'chiramiz
    }, 3000); // 3000 millik (3 sekund) kezakicha o'zgaruvchan vaqt
    return () => clearTimeout(timer); // Komponent bekor qilinganda timer ni bekor qilamiz
  }, []);
  return (
    <div>
      {loading ?
        (
          <div className='w-[100%] h-screen bg-[black]'>
            <Loader />
          </div>
        ) : (
          <div className='bg-[#101010]'>
            <Header />
            <Home />
            <div className='dark__site-container  ml-auto mr-auto grid justify-center items-center'>
              <Card />
              <About />
              <Work />
            </div>
            <Footer />
            <div className='h-[75px] xl:px-[280px] lg:justify-start lg:px-[60px] text-[#6E6E6E] px-4 grid justify-center items-center'>
              <p className='w-[100%] text-[16px0] text-start'>Copyright © 2018 Company Name | Design: <span className='text-[#247AB7]'>templatemo</span > | Images by <span className='text-[#247AB7]'> Pixabay</span></p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Dark