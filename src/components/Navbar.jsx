import React from 'react'
import logo from "../assets/logo1.png"
import { Link } from 'react-router-dom'


const Navbar = () => {


  const links = [
    {id:1, path:"/",name: "Home"},
    {id:2, path:"/about",name: "About"},
    {id:3, path:"/services",name: "Services"},
    {id:4, path:"/contact",name: "Contact"},
  ]



  return (
   <>
    <header className='bg-dark-bg z-50   flex flex-row justify-around items-center py-4 '>

    <Link to= "/" >
     <img 
     className='w-10 h-10'
     src={logo} alt="Zeit Logo" />  
    </Link>  
    
    {/* <nav className='flex flex-row gap-10 font-primary  '>
      {
        links.map((link)=>(
        
          <Link
          className='text-base text-primary-50 '
          key={link.id}
          to={link.path}
          >
            {link.name}
          </Link>
        ))
      }
    </nav> */}

    <Link 
    to="/contact"
    >
    <button className=" relative inline-block px-4 py-2 font-bold text-red-500 bg-light-bg  hover:text-dark-text-primary  overflow-hidden group">
      <span className="relative z-10 flex flex-row gap-4">
        <h1>Let&apos;s Connect</h1> 
        
        </span>
     
      {/* Background */}
      <span className="absolute skew-x-[45deg] inset-0 w-full h-full bg-red-500 transform -translate-x-40 group-hover:translate-x-0 transition-transform duration-300 ease-out origin-right"></span>
    </button>

    </Link>
      
    </header>        





    
    
   </>
  )
}

export default Navbar
