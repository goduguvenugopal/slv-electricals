import React from 'react'
import { contactUs } from './data'
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md'
import { FaInstagram, FaTelegram } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const ConnectUs = () => {
    return (
        <>
            <div className="flex flex-col items-center  text-gray-300 p-3 ">

                <p className="mb-6 text-[#a2f25c] font-medium text-center">Feel free to reach out through any platform.</p>

                <div className="w-full max-w-md flex flex-col gap-6">
                    <a
                        href={`mailto:${contactUs.email}`}
                        rel="noopener noreferrer"
                        className='flex items-center gap-2  hover:text-white   text-[1.1rem] p-4 rounded-lg transition-colors duration-300 bg-gray-900 hover:bg-blue-600 hover:border-blue-600 border border-gray-300'
                    >
                        <span className=" text-xl">
                            <MdEmail size={22} />
                        </span>
                        {contactUs.email}
                    </a>

                    <a
                        href={`tel:+91${contactUs.mobile}`}
                        rel="noopener noreferrer"
                        className='flex items-center gap-2  hover:text-white   text-[1.1rem] p-4 rounded-lg transition-colors duration-300 bg-gray-900 hover:bg-blue-600 hover:border-none border border-gray-300'
                    >
                        <span className=" text-xl">
                            <MdPhone size={22} />
                        </span>
                        {contactUs.mobile}
                    </a>
                    <a
                        href={contactUs.instagram}
                        rel="noopener noreferrer"
                        className='flex items-center gap-2  hover:text-white   text-[1.1rem] p-4 rounded-lg transition-colors duration-300 bg-gray-900 hover:bg-blue-600 hover:border-none border border-gray-300'
                    >
                        <span className=" text-xl">
                            <FaInstagram size={22} />
                        </span>
                        {contactUs.instagramName}
                    </a>
                    <a
                        href={`https://wa.me/91${contactUs.mobile}`}
                        rel="noopener noreferrer"
                        className='flex items-center gap-2  hover:text-white   text-[1.1rem] p-4 rounded-lg transition-colors duration-300 bg-gray-900 hover:bg-blue-600 hover:border-none border border-gray-300'
                    >
                        <span className=" text-xl">
                            <MdWhatsapp size={22} />
                        </span>
                        {contactUs.mobile}
                    </a>
                    <a
                        href={`https://t.me/+91${contactUs.mobile}`}
                        rel="noopener noreferrer"
                        className='flex items-center gap-2  hover:text-white   text-[1.1rem] p-4 rounded-lg transition-colors duration-300 bg-gray-900 hover:bg-blue-600 hover:border-none border border-gray-300'
                    >
                        <span className=" text-xl">
                            <FaTelegram size={22} />
                        </span>
                        {contactUs.mobile}
                    </a>
                    <span

                        rel="noopener noreferrer"
                        className='flex items-center text-start
                         gap-2  hover:text-white   text-[1.1rem] p-4 rounded-lg transition-colors duration-300 bg-gray-900 hover:bg-blue-600 hover:border-none border border-gray-300'
                    >
                        <span className=" text-xl">
                            <FaLocationDot size={22} />
                        </span>
                        {contactUs.address}
                    </span>

                </div>
            </div>
        </>
    )
}

export default ConnectUs