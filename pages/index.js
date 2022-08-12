import {Nav, Header, Event, Quote, About, Footer} from '../components'
import {client} from '../lib/client'

export default function Home({headerData, eventData, aboutData, footerData}) {
  return (
    <section className='bg-neutral-800 h-full sm:overflow-hidden'>
      <Nav/>
      <Header data= {headerData}/>
      <Event data={eventData}/>
      <Quote/>
      <About data={aboutData}/>
      <Footer data={footerData} />
    </section>
  )
}



export const getStaticProps = async() => {
  const headerQuery = '*[_type == "header"]'
  const headerData = await client.fetch(headerQuery)

  const eventQuery = '*[_type == "event"]'
  const eventData = await client.fetch(eventQuery)

  const aboutQuery = '*[_type == "about"]'
  const aboutData = await client.fetch(aboutQuery)

  const footerQuery = '*[_type == "footer"]'
  const footerData = await client.fetch(footerQuery)

  return{
    props: {headerData, eventData, aboutData, footerData}
  }
}
