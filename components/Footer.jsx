import React from 'react'
import {Row, Col} from 'antd'
import { urlFor } from '../lib/client'

function Footer({data}) {
  const {image, main,secondary,creator} = data[0]
  return (
      <section>
        <Row align='middle' className='mt-40 pt-4' justify='end' style={{backgroundColor :"teal"}}>
        <Col lg={{span: 8}} xs={{span:24}}>
          <h1 className='text-left lg:text-3xl ml-10 lg:ml-36' style={{color: 'mintcream'}}>{main}</h1>
          <h1 className='text-left lg:text-2xl lg:ml-36 ml-10 text-green-100'>{secondary}</h1>
        </Col>
        <Col lg={{span: 16}} xs={{span:24}}>
          <img src={urlFor(image)} className='w-4/6 lg:ml-64 ml-10' alt='footer' />
        </Col>
      </Row>
      <h1 className='text-center lg:text-base italic' style={{color: 'mintcream'}}>{creator}</h1>
      </section>
  )
}

export default Footer