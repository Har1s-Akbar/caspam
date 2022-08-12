import React from 'react';
import axios from 'axios';
import {Card, Button} from 'antd'
import {useEffect, useState} from 'react';


function Quote() {
const [quote, setQuote] = useState([])


const options = {
  method: 'POST',
  url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348',
    'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
  },
  data: '{"key1":"value","key2":"value"}'
};

const fd = () => {
axios.request(options).then(function (response) {
  setQuote(response.data)
}).catch(function (error) {
	console.error(error);
});
}

useEffect(() => {
fd()
}, []);


  return (
    <section className='my-20 grid'>
      <h1 className='text-3xl text-center' style={{color: "mintcream"}}>
        Quotation
      </h1>
      <p className='italic text-center' style={{color: "mintcream"}}>
        to lift your moral
      </p>
      <Card title="Get Motivated" hoverable bordered={true} style={{width: "70%", margin: "auto", color: "teal"}}>
        <h1 className='lg:text-base italic break-normal align-middle indent-4 leading-relaxed tracking-normal font-light antialiased sm:text-base'>{quote}</h1>
      </Card>
      <Button className='my-2 lg:w-1/4 w-1/2 m-auto mt-5' onClick={fd}>Give me a New Quote</Button>
    </section>
  )
}

export default Quote
