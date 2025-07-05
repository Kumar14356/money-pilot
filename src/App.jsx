import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Finding from './Components/Finding'
import Cards from './Components/Cards'
import HowItWorks from './Components/HowItWorks'
import PropertyBusinessFinance from './Components/Rename'
import Clients from './Components/Testimonial'
import FundingConfidence from './Components/FundingConfidence'
import Footer from './Components/Footer'
import InfiniteScroll from './Components/InfiniteScroll'

function App() {

  return (
    <>
    <div className='w-full overflow-x-hidden'>
  <Navbar/>
  <Hero/>
  <InfiniteScroll/>   
  <Finding/>
  <Cards/>
  <FundingConfidence/>
  <HowItWorks/>
<PropertyBusinessFinance/>
<Clients/>
<Footer/>
</div>

    </>
  )
}

export default App
