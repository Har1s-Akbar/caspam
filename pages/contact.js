import React from 'react'
import { Nav } from '../components'
import {Button} from 'antd'

function contact() {
  return (
    <section className='bg-neutral-800 lg:h-screen h-full'>
      <Nav/>
      <section className='mt-10'>
      <h1 className='text-2xl text-center text-green-50'>Contact Us</h1>
      <h1 className='lg:text-xl italic mt-10 text-center text-green-50'>For any Kind of Query or feedback contact us</h1>
      </section>
      <section className='mt-10'>
        <form className='flex flex-col w-5/6 lg:w-1/2 m-auto' action="https://formsubmit.co/stanker801@gmail.com" method="POST" >
          <label className='text-green-50'>Name</label>
          <input type="text" name='name' placeholder='Enter your name' className='lg:w-5/12 my-2 w-5/6 rounded text-white  bg-transparent border-slate-200 border-2' required />
          <label className='text-green-50'>Email</label>
          <input type="email" name='email' placeholder='Enter your email' className='lg:w-1/2 my-2 text-white rounded border-slate-200 bg-transparent border-2' required />
          <label className='text-green-50'>Message</label>
          <input type="textarea" name='message' placeholder='Enter your the message' className='text-white lg:w-11/12 w-full my-2 h-36 rounded-xl bg-transparent border-slate-200 border-2' required />
          <Button type='submit' className='w-1/3 m-auto mt-5'>Send</Button>
        </form>
      </section>
    </section>
  )
}

export default contact