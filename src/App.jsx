import React from 'react'
import {Nav} from './Components/Navbar'
import Hero from './Components/Hero'
import {About}  from './Components/About'
import {Services} from './Components/Services'
import{Projects}from './Components/Projects'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
export const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
