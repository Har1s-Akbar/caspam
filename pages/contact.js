import React from 'react'
import { Nav } from '../components'
import {Button, Avatar, Tooltip} from 'antd'
import { client, urlFor } from '../lib/client'
import {FacebookOutlined,InstagramOutlined ,GooglePlusOutlined,GithubOutlined} from '@ant-design/icons'
import Link from 'next/link'

function contact({contactData}) {
  console.log(contactData)
  return (
    <section className='bg-neutral-800 h-full lg: h-screen'>
      <Nav/>
      <section className='mt-10 '>
      <h1 className='text-2xl text-center text-green-50'>Contact Us</h1>
      <h1 className='lg:text-xl italic mt-10 text-center text-green-50'>For any Kind of Query or feedback contact us</h1>
      </section>
      <section className='lg:grid lg:grid-cols-2 w-11/12 m-auto mt-10 lg:mt-20'>
        {contactData?.map((item, index)=> 
        <div key={index} className='bg-fuchsia-900 p-4 rounded-xl w-11/12 lg:w-1/2 m-auto my-10'>
          <div className='flex justify-evenly items-center'>
          <Avatar shape='square' className='justify-self-end' size={60} src={<img src={urlFor(item.image[0])} alt={item.title} />}/>
          <h1 className='text-center text-base lg:text-2xl text-green-50'>{item.title}</h1>
          </div>
          <div className='mt-5 flex justify-center items-center'>
            <Link href={item.links[0]}><FacebookOutlined style={{color: 'white', fontSize: 25}} className='mx-2'/></Link>            
            <Link href={item.links[1]}><InstagramOutlined style={{color: 'white', fontSize: 25}} className='mx-2'/></Link>
            <Link href="https://github.com/Har1s-Akbar"><GithubOutlined style={{color: 'white', fontSize: 25}} className='mx-2'/></Link>
            <Tooltip title={item.links[3]} placement='bottom'><GooglePlusOutlined style={{color: 'white', fontSize: 25}} className='mx-2'/></Tooltip>
          </div>
        </div>
        )}
        <div className='col-span-2 mt-5'>
          <h1 className='m-auto text-center w-11/12 lg:w-1/2 text-yellow-50 lg:text-2xl'>For any kind of review or what we should change in website contact any of us at any of the above platforms</h1>
        </div>
      </section>
    </section>
  )
}

export default contact

export const getStaticProps = async() => {
  const contactQuery = '*[_type == "contact"]'
  const contactData = await client.fetch(contactQuery)

  return{
    props: {contactData}
  }
}