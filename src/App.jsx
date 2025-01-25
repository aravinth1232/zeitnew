import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar'
import Layout from './Layout/Layout'

function App() {
    
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
   <>
     
      <RouterProvider router={router} />   
   
   </>
  )
}

export default App
