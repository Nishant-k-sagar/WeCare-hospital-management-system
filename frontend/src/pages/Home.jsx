import React from 'react'
import Hero from '../components/Hero'
import Departments from '../components/Departments'
import Biography from '../components/Biography'
import MessageForm from '../components/MessageForm'



const Home = () => {
  return (
    <>
      <Hero 
      title={"WeCare Medical Services | A trusted Medical Destination"} imageUrl={"/hero.png"} />
      <Biography imageUrl={"/about.webp"}/>
      <Departments/>
      <MessageForm/>
    </>
  )
}

export default Home
