import React from 'react'
import logo from "../assets/logo1.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
  <>
  <footer className=' flex flex-row justify-around items-center py-2  '>
        <div className='flex items-center justify-center'>
        <img
            onClick={()=>
              window.scrollTo({top: 0, behavior: "smooth"})
            }
            role='button'
            alt='logo'
           
            src={logo}
            className='w-10 h-10'

            />          
        </div>
        <div className='flex flex-row gap-3 lg:gap-6 justify-center items-center'>
        <a
        href="" // Replace with your desired URL
        className="text-gray-800 hover:text-red-500 transition-transform duration-300 transform hover:scale-125"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FaFacebookF className="w-5 h-5 transition-transform duration-300 transform hover:scale-110" />
      </a>
        <a
        href="" // Replace with your desired URL
        className="text-gray-800 hover:text-red-500 transition-transform duration-300 transform hover:scale-125"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="instagram"
      >
        <FaInstagram className="w-5 h-5 transition-transform duration-300 transform hover:scale-110" />
      </a>
      <a
        href="" // Replace with your desired URL
        className="text-gray-800 hover:text-red-500 transition-transform duration-300 transform hover:scale-125"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FaXTwitter className="w-5 h-5 transition-transform duration-300 transform hover:scale-110" />
      </a>
      
        </div>
        </footer>
  </>
  )
}

export default Footer
