import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { bioData } from './data'
import { MdClose, MdPhone } from 'react-icons/md'
import Contact from './Contact'
import About from './About'
import Services from './Services'



const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const menuRef = useRef(null)
  const [navVisible, setNavVisible] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)


  // menu open when clicks on bar 
  const menuOpenFunction = () => {
    setMenu(true)
  }

  const menuCloseFunction = () => {
    setMenu(false)
  }


  // menu closes when clicks outside the navbar
  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false)
      }
    }
    document.addEventListener("mousedown", closeMenu)
    return () => {
      document.removeEventListener("mousedown", closeMenu)
    }

  }, [])


  // menu closes and opens according to scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setNavVisible(false)
        setMenu(false)
      } else {
        setNavVisible(true)
        setMenu(false)

      }
      setLastScroll(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScroll])


  return (
    <>
      <main className={`sticky left-0 top-0 w-full bcgc z-10 transition-transform duration-300 ${navVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className={` lg:shadow-lg p-2 select-none relative ${menu ? "shadow-none" : "shadow-lg"}`}>
          {/* large device navbar section  */}
          <section className='flex lg:justify-around lg:items-center'>
            <img onClick={menuOpenFunction} src={bioData.logo} alt="logo.jpeg" className='ml-1 cursor-pointer lg:cursor-default border-[0.1rem] border-purple-600 rounded-full  w-[3.6rem] h-[3.6rem]' />
            <div className=' gap-3 hidden lg:block'>
              <div className='flex gap-[3rem]'>
                <a href='#about' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>About</a>
                <a href='#services' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Services</a>
                {/* <a href='#projects' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Projects</a>
              <a href='#education' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Education</a> */}
                {/* <a href='#contact' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Contact</a> */}
              </div>
            </div>
            <a  href='#contact' className='w-fit hidden lg:block '>
              <button className='flex items-center justify-center gap-2 w-full cursor-pointer  animate-pulse hover:bg-purple-700 bg-purple-600 text-white font-medium rounded-[3rem] px-4 py-2 '> <MdPhone size={20}/> Contact us</button>
            </a>
          </section>

          {/* mobile navbar section  */}
          <section
            ref={menuRef}
            className={`absolute  bcgc top-[3.8rem] shadow-lg left-0 w-full flex mt-3 lg:hidden flex-col items-center  gap-4 pl-4 pt-2 transition-all duration-500 ease-in-out transform origin-top 
  ${menu ? "scale-y-100 opacity-100 pb-4" : "scale-y-0 opacity-0 h-0 overflow-hidden"}`}>

            <a href='#about' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>About</a>
            <a href='#services' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Services</a>
            {/* <a href='#projects' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'></a>
          <a href='#education' className='text-[1.2rem] text-white font-semibold hover:text-blue-500'>Education</a> */}
            <a href='#contact' className='flex items-center justify-center text-white font-semibold hover:text-blue-500 w-full text-center'>
            <button className='flex items-center justify-center gap-2 w-[35%] lg:w-full text-nowrap cursor-pointer animate-pulse hover:bg-purple-700 bg-purple-600 text-white font-medium rounded-[3rem] px-3  py-2'>
              <MdPhone size={20}/> Contact us
            </button></a>

          </section>

          {/*menu bar icon div  */}
          <section className='lg:hidden '>
            {menu
              ?
              <span onClick={menuCloseFunction} className='text-white absolute top-[1.6rem] right-[0.8rem] cursor-pointer'>
                <MdClose size={25} />
              </span> :
              <span onClick={menuOpenFunction} className='text-white  absolute top-[1.6rem] right-[0.8rem] cursor-pointer'>
                <FaBars size={22} />
              </span>
            }

          </section>

        </div>
      </main>

      {/* other components  */}
      <div id="about" >
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

       <div id='contact'>
      <Contact />
    </div>

    </>
  )
}

export default Navbar