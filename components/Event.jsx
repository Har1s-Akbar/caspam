import React from 'react'
import {Card, Button, Modal} from 'antd'
import {useState} from 'react'
import Link from 'next/link'

function Event({data}) {
  return (
    <section className='mt-20 lg:w-1/2 m-auto'>
      <h1 className='text-center text-xl lg:text-4xl my-10' style={{color: "mintcream"}}>Events</h1>
      <Card style={{margin: 'auto', backgroundColor: "transparent"}} >
        {data.map((item, index)=>
        <Card.Grid key={index} className='lg:text-xl '  style={{width: '40%',margin: 'auto',backgroundColor: "mintcream",flexDirection: 'column' ,textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '10%', marginBottom: '10%'}}>
          {item.title}
          <Link href={`${item.slug.current}`}>
          <Button className='my-2 lg:w-1/2 m-auto'>Click</Button>
          </Link>
          </Card.Grid> 
        )}
      </Card>
    </section>
  )
}

export default Event