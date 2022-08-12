import React from 'react'
import { Nav } from '../../components'
import { client, urlFor } from '../../lib/client'
import {Avatar,Anchor} from 'antd'

function slug({detailData}) {
  const {author,link,body,mainImage, publishedAt,title, conetnt} = detailData
  return (
    <section className='bg-neutral-800 h-full'>
      <Nav/>
      <section className='lg:grid lg:grid-cols-3 mt-10'>
        <section className='col-start-1 col-span-2 lg:w-8/12 m-auto'>
        <h1 className='text-orange-50 text-4xl lg:my-5 sm:my-20 text-center capitalize'>{title}</h1>
        <div className='flex my-3 sm:w-11/12 m-auto'>
          <Avatar style={{marginRight: '1rem'}} shape="square" size={64} src={<img src={urlFor(mainImage)} alt={author} />}/>
          <div>
            <p className='text-green-50 italic'>Author- {author}</p>
            <p className='text-green-50 italic'>Published- {(publishedAt)?.substring(0,10)}</p>
          </div>
        </div>
        <img src={urlFor(body[1])} className='lg:h-96 sm:w-11/12 m-auto my-2 lg:ml-10 border-xl' alt={title} />
        <p className='text-white break-normal align-middle indent-4 sm:w-11/12 m-auto leading-relaxed tracking-normal font-light antialiased text-base'>{body[0].children[0].text}</p>
        <img src={urlFor(body[4])} className='lg:h-96 sm:w-11/12 my-2 m-auto lg:ml-10 border-xl' alt={title} />
        <p className='text-white break-normal align-middle indent-4  sm:w-11/12 m-auto leading-relaxed tracking-normal font-light antialiased text-base'>{body[2].children[0].text}</p>
        <p className='text-white break-normal align-middle indent-4  sm:w-11/12 m-auto leading-relaxed tracking-normal font-light antialiased text-base'>{body[5].children[0].text}</p>
        </section>
        <section className='col-start-3 justify-self-center mt-10'>
          <h1 className='text-green-100 text-xl'>Contents of the Blog</h1>
          <Anchor>
            <p className='text-green-100 ml-2 italic'>{conetnt[0]}</p>
            <p className='text-green-100 ml-2 italic'>{conetnt[1]}</p>
            <p className='text-green-100 ml-2 italic'>{conetnt[2]}</p>
          </Anchor>
        </section>
      </section>
    </section>
  )
}

export default slug

export const getStaticPaths = async() => {
  const query = `*[_type == "post"]{
      slug{
          current
      }
  }`
  const data = await client.fetch(query);
  const paths = data?.map((item)=> ({
      params: {slug: item.slug.current}
  }))
  return{
      paths,
      fallback: 'blocking'
  }
}

export const getStaticProps = async({params:{slug}}) =>{
  const detailquery = `*[_type == "pdetail" && slug.current == '${slug}'][0]`
  const detailData = await client.fetch(detailquery)

  return{
      props: {detailData}
  }
}