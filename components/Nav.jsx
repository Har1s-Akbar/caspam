import React from 'react'
import {Menu} from 'antd'
import {useState} from 'react'
import Link from 'next/link'

const item = [
  {
    label: <Link href='/'>Home</Link>,
    key: 'home',
  },
  {
    label: <Link href='/Blog'>Blog</Link>,
    key: 'blog',
  },
  {
    label: <Link href='/contact'>Contact</Link>,
    key: 'contact',
  },
]

function Nav() {
  const [active, setActive] = useState('home')

  const onchange = (e) =>{
    setActive(e.key)
  }

  return (
    <Menu  items={item} onClick={onchange} mode='horizontal' selectedKeys={[active]} style={{backgroundColor: "mintcream",display: 'flex', justifyContent: 'center', padding: '0.5rem'}}/>
  )
}

export default Nav