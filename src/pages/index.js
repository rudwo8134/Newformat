import React,{useState} from 'react'
import Navbar from '../components/navbar'
import Sidabar from '../components/sidebar'
import {HashRouter as Router} from 'react-router-dom'
import HeroSection from '../components/herosection'
import InfoSection from '../components/infosection'
import { HomeObjOne, HomeObjthree, HomeObjTwo } from '../components/infosection/data'
import Services from '../components/services'
import Footer from '../components/footer'

const Home = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () =>{
    setisOpen(!isOpen)
  }

  return (
    <Router>
      <Navbar toggle={toggle}/>
      <Sidabar isOpen={isOpen} toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...HomeObjOne}/>
      <InfoSection {...HomeObjTwo}/>
      <InfoSection {...HomeObjthree}/>
      <InfoSection {...HomeObjTwo}/>
      <Services/>
      <InfoSection {...HomeObjthree}/>
      <Footer/>
    </Router>
  )
}

export default Home
