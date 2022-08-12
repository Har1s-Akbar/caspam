import React from 'react'
import {Col, Row, Button} from 'antd'
import { urlFor } from '../lib/client'
import Link from 'next/link'

function Header({data}) {
  const {image, text,} = data[0]
  return (
    <section className='lg:mt-40 mt-24'>
      <Row align="middle"  justify='end'>
        <Col  lg={{span: 10}} xs={{span:24}} style={{color: "mintcream"}}>
          <h1 className='lg:text-3xl sm:ml-10' style={{color: 'mintcream'}}>{text[0]}</h1>
          <h1 className='lg:text-3xl sm:ml-10' style={{color: 'mintcream'}}>{text[1]}</h1>
          <h1 className='lg:text-xl sm:ml-10 italic text-yellow-50'>{text[2]}</h1>
          <h1 className='lg:text-xl sm:ml-10 italic text-yellow-50'>{text[3]}</h1>
        </Col>
        <Col  lg={{span: 10}}  style={{color: "mintcream"}}>
          <img className='lg:w-2/3 sm:w-11/12 drop-shadow' src={urlFor(image[0])} alt="image" />
        </Col>
      </Row>
      <Row align="middle" justify='end' className='mt-10'>
        <Col  lg={{span: '10'}} xs={{span: 24}} order={4} style={{color: "mintcream"}}>
          <h1 className='lg:text-3xl lg: ml-0 sm:ml-24' style={{color: 'mintcream'}}>{text[4]}</h1>
          <h1 className='lg:text-xl lg:ml-0 sm:ml-24 text-green-200 italic'>{text[5]}</h1>
          <Link href="/explore"><Button className='lg:my-1 lg:w-1/3 sm:ml-28' style={{backgroundColor: "InfoBackground", border: "none"}}>Explore</Button>
          </Link>
        </Col>
        <Col  lg={{span: '10'}} order={3} style={{color: "mintcream"}}>
          <img className='lg:w-2/3 sm:w-11/12' src={urlFor(image[1])} alt="image" />
        </Col>
      </Row>
    </section>
  )
}

export default Header