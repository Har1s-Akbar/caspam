import React from 'react'
import {Button, Card, Carousel} from 'antd'
import { client, urlFor } from '../lib/client'
import { Nav } from '../components'
import Link from 'next/link'

function explore({exploreData}) {
  const {image, description, title} = exploreData[0]
  return (
    <section className='bg-neutral-800 h-screen overflow-hidden'>
      <Nav/>
      <Card style={{width: '80%', margin: 'auto', marginTop: '2rem'}} bordered={true}>
        <h1 className='lg:text-2xl text-center'>{title}</h1>
      <section className='lg:grid sm:mt-5 lg:grid-cols-2'>
        <Carousel autoplay className='lg:mr-10 lg:my-44 sm:my-5'>
          <div>
            <h1 className='text-center  lg:text-xl italic'>{description[0]}</h1>
          </div>
          <div>
            <h1 className='text-center lg:text-xl italic'>{description[1]}</h1>
          </div>
          <div>
            <h1 className='text-center lg:text-xl italic'>{description[2]}</h1>
          </div>
          <div>
            <h1 className='text-center lg:text-xl italic'>{description[3]}</h1>
          </div>
          <div>
            <h1 className='text-center lg:text-xl italic'>{description[4]}</h1>
          </div>
          <div>
            <h1 className='text-center lg:ext-xl italic'>{description[5]}</h1>
          </div>
        </Carousel>
        <Carousel autoplay className='lg:mt-10'>
          <div>
            <img className='w-full rounded-xl' src={urlFor(image[0])} alt={description[0]} />
          </div>
          <div>
            <img src={urlFor(image[1])} className='rounded-xl w-full' alt={description[1]} />
          </div>
          <div>
            <img src={urlFor(image[2])} alt={description[2]} className='w-full rounded-xl' />
          </div>
          <div>
            <img src={urlFor(image[3])} alt={description[3]} className='w-full rounded-xl'/>
          </div>
          <div>
            <img src={urlFor(image[4])} alt={description[4]} className='w-full rounded-xl'/>
          </div>
          <div>
            <img src={urlFor(image[5])} alt={description[5]} className='w-full rounded-xl'/>
          </div>
        </Carousel>
        <Link href='/'>
          <Button type='primary' className='lg:w-1/2 sm:w-11/12 lg:ml-96 m-auto mt-3'>Back to Home</Button>
        </Link>
      </section>
      </Card>
    </section>
  )
}

export default explore

export const getStaticProps= async() =>{
  const exploreQuery = '*[_type == "explore"]'
  const exploreData = await client.fetch(exploreQuery)

  return{
    props:{exploreData}
  }
}