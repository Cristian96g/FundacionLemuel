import React from 'react'
import Accordeon from '../components/Accordeon'
import PageHeader from '../components/PageHeader'

const About = () => {
  return (
    <div className='container'>
      <PageHeader title={"Nosotros"} />
      <h1 className='text-center mb-8 text-xl text-[#52658d]'>¡Hola! Somos Fundación Lemuel, y queremos contarte un poco sobre nosotros.</h1>
        <Accordeon/>
    </div>
    
  )
}

export default About