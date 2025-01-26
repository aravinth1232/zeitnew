import React, { useEffect } from 'react'
import Form from '../components/Form'

const Contact = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <main className='h-screen'>

        <Form />

      </main>
    </>
  )
}

export default Contact
