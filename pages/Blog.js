import React from 'react'
import { Nav } from '../components'
import {ArrowRightOutlined, SmallDashOutlined} from '@ant-design/icons'
import { client, urlFor } from '../lib/client'
import {Card, Avatar, Tooltip} from 'antd'
const {Meta} =Card
import Link from 'next/link'

function Blog({postData}) {
  return (
    <section className='bg-neutral-800 lg:h-screen h-full overflow-hidden'>
      <Nav/>
      <section className='mt-10'>
        <h1 className='text-center sm:text-xl lg:text-3xl text-green-50'>Blogs</h1>
        <h1 className='text-center sm:text-base lg:text-xl mt-10 italic text-green-50'>Thought provoking writings from the students of our department</h1>
      </section>
      <section className='lg:grid lg:grid-cols-2 lg:w-11/12 justify-end justify-items-center mt-10 items-center'>
        {postData.map((item, index)=> 
        <Link key={index} href={`/Blog/${item.slug.current}`}>
        <Card className='lg:w-1/2 w-11/12' style={{margin: 'auto', marginTop: '2rem', marginBottom: '1rem'}} hoverable cover={<img src={urlFor(item.image)} alt={item.title} />} actions={[<Tooltip title='visit' key={index} color='green' placement='bottom'><ArrowRightOutlined key="Visit" /></Tooltip>]}>
          <Meta avatar={<Avatar src={<img src={urlFor(item.avatar)} style={{width: '50px'}} />} alt={item.name}/>} title={item.title} description={item.description}/>
        </Card>
        </Link>
        )}
      </section>
    </section>
  )
}

export default Blog

export const getStaticProps = async() => {
  const postsQuery = '*[_type == "post"]'
  const postData = await client.fetch(postsQuery)

  return{
    props: {postData}
  }
}

