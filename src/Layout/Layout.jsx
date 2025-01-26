import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen  ">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>

<div className=" relative flex items-center">
<a 
  href="https://wa.me/1234567890"
  className="fixed bottom-14 right-3 md:bottom-4 md:right-4 bg-primary-500 text-white px-2 py-2 rounded-full shadow-lg flex items-center justify-center z-50 group"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact us on WhatsApp"
>
 <FaWhatsapp className="w-6 h-6" />
  
  <span className="absolute left-0 bottom-0 transform -translate-x-full -translate-y-1/2 bg-red-500 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Chat with us
  </span>
</a>
</div>
</>
  )
}

export default Layout
