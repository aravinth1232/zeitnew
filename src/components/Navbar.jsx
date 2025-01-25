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
    <header className='bg-dark-bg z-50  sticky top-0 flex flex-row justify-around items-center py-3 '>

    <Link to= "/" >
     <img 
     className='w-10 h-10'
     src={logo} alt="Zeit Logo" />  
    </Link>  
    
    <nav className='flex flex-row gap-10 font-primary  '>
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
    </nav>
      
    </header>        





    
    
   </>
  )
}

export default Navbar
