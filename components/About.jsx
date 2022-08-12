import React from 'react'
import {Collapse, Avatar, Image} from 'antd'
const {Panel} =Collapse
import {urlFor} from '../lib/client'

function About({data}) {
  return (
    <section>
      <h1 className='text-center text-3xl' style={{color: "mintcream"}}>About</h1>
      <p className='text-center text-base italic' style={{color: "mintcream"}}>This Website is a collective effort of two students</p>
      <section className='lg:w-1/2 w-11/12 m-auto mt-10'>
        {data.map((item, index)=> 
        <Collapse accordion key={index} style={{marginTop: '0.5rem'}}>
          <Panel key={index} header={item.name}>
            <Avatar src={<Image src={urlFor(item.image)} style={{width: '50px'}} />} alt={item.name}/>
            <p style={{marginTop: '0.5rem'}}>{item.description}</p>
          </Panel>
        </Collapse>
        )}
      </section>
    </section>
  )
}

export default About