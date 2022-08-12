import React from 'react'
import { Nav } from '../components'
import { client } from '../lib/client'
import {Card} from 'antd'

function slug({detailData}) {

    const {description, title} = detailData
  return (
    <section className='bg-neutral-800 h-screen'>
        <Nav/>
        <Card type='inner' title={title} style={{width: "80%", margin: "auto", marginTop: "2rem"}}>
            <h1 className='text-base italic'>{description}</h1>
        </Card>
    </section>
  )
}

export default slug

export const getStaticPaths = async() => {
    const query = `*[_type == "event"]{
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
    const detailquery = `*[_type == "edetail" && slug.current == '${slug}'][0]`
    const detailData = await client.fetch(detailquery)

    return{
        props: {detailData}
    }
}