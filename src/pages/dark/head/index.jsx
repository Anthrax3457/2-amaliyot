import React, { useState, useEffect } from "react";
import './style.css'

const Head = () => {
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
        className={`header fixed w-full ${scrolled
          ? "bg-[#101010] transition ease-in duration-3000  shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]"
          : " transition ease-linear duration-3000"
          }`}
      >
        {scrolled ?
          (
            <div className="dark__head-content">
              <a href="/">
                <p className="dark__head-name">Coming Soon</p>
              </a>
              <div className="dark__head-items">
                <a href="#hero" onClick={()=>{setActive('hero')}} className={`${active === 'hero' ? 'dark__head-itemm' : 'dark__head-item'}`}>
                  <p>HOME</p>
                </a>
                <a href="#about" onClick={()=>{setActive('about')}} className={`${active === 'about' ? 'dark__head-itemm' : 'dark__head-item'}`}>
                  <p>ABOUT US</p>
                </a>
                <a href="#work" onClick={()=>{setActive('work')}} className={`${active === 'work' ? 'dark__head-itemm' : 'dark__head-item'}`}>
                  <p>WORK</p>
                </a>
                <a href="#contact" onClick={()=>{setActive('contact')}} className={`${active === 'contact' ? 'dark__head-itemm' : 'dark__head-item'}`}>
                  <p>CONTACT</p>
                </a>
              </div>
            </div>
          )
          : ''}
      </header>

      {/* FULL SCREEN SEARCH */}

    </div>
  )
}

export default Head