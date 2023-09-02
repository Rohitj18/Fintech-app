import React from 'react'
import FirstSection from '../components/LandingPageComponents/FirstSection'
import SecondSection from '../components/LandingPageComponents/SecondSection';
import ThirdSection from '../components/LandingPageComponents/ThirdSection'
import FourthSection from '../components/LandingPageComponents/FourthSection'
import Navbar from '../components/LandingPageComponents/Navbar'

const LandingPage = () => {
  return (
    <div className='relative'>
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
    </div>
  )
}

export default LandingPage
