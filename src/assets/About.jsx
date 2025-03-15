import React, { useEffect, useState } from 'react'
import { bioData, contactUs } from './data'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { MdPhone } from 'react-icons/md'


const About = () => {


  return (
    <>
      <motion.main initial={{ y: 50, scale: 0.8, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false }} className='p-3 w-full flex  justify-around flex-wrap mt-[3rem] gap-5'>
        {/* image card  */}
        <div className='w-full order-1 lg:order-2 lg:w-[36%] lg:h-[50vh] p-2'>
          <img src={bioData.servicesImg} alt="venugopal-image" className='border-2 border-purple-500 rounded-full w-full h-fit' />
        </div>

        {/* bio data and description section */}
        <div className='w-full lg:w-[50%] order-1 lg:order-1 p-2 text-center lg:text-start  '>
          <span className='text-4xl text-white flex flex-col gap-3 font-medium'>
            Hello, Welcome to
            <h1>
              {bioData.name}
            </h1>

          </span>
          <p className='my-4 text-[#9ea2a3] text-[1.11rem] '>{bioData.subTitle}</p>
          <h5 className='text-white text-2xl lg:text-3xl font-medium'>We do services regarding⚡
          </h5>
          <h6 className='text-purple-600 text-2xl lg:text-3xl my-4 font-medium'>
            <Typewriter
              words={bioData.services}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h6>
          <p className='text-[#9ea2a3] lg:text-justify  text-[1.11rem]'>{bioData.description}</p>
        <div className='flex justify-center  w-full'>

          <a className='cursor-pointer w-[60%]' href={`tel:+91${contactUs.mobile}`}><button className='rounded-full w-full cursor-pointer text-[1.2rem] h-[3rem] mt-5 text-white font-medium bg-gradient-to-r from-pink-500  to-purple-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center gap-2 justify-center'><MdPhone size={23}/>Contact us</button>
          </a>
        </div>
        </div>

      </motion.main>

    </>
  )
}

export default About