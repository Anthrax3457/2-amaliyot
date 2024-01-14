import React, { useState, useEffect } from "react";
import './style.css'


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className={`header fixed justify-center w-full ${scrolled
          ? "bg-[#fff]  transition ease-in duration-3000  shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]"
          : " transition ease-linear duration-3000"
          }`}
      >
        {scrolled ?
          (
            <div div className="head-content">
              <a href="/">
                <p className="head-name">Coming Soon</p>
              </a>
              <div className="head-items">
                <a href="#hero" onClick={() => { setActive('hero') }} className={`${active === 'hero' ? 'head-itemm' : 'head-item'}`}>
                  <p>HOME</p>
                </a>
                <a href="#about" onClick={() => { setActive('about') }} className={`${active === 'about' ? 'head-itemm' : 'head-item'}`}>
                  <p>ABOUT US</p>
                </a>
                <a href="#work" onClick={() => { setActive('work') }} className={`${active === 'work' ? 'head-itemm' : 'head-item'}`}>
                  <p>WORK</p>
                </a>
                <a href="#contact" onClick={() => { setActive('contact') }} className={`${active === 'contact' ? 'head-itemm' : 'head-item'}`}>
                  <p>CONTACT</p>
                </a>
              </div>
            </div>)

          : ''}
      </header >

      {/* FULL SCREEN SEARCH */}

    </div >
  )
}

export default Header