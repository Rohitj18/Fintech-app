import React from 'react'
import FirstSection from '../components/LandingPageComponents/FirstSection'
import SecondSection from '../components/LandingPageComponents/SecondSection';
import ThirdSection from '../components/LandingPageComponents/ThirdSection'
import FourthSection from '../components/LandingPageComponents/FourthSection'
import Navbar from '../components/LandingPageComponents/Navbar'
import FifthSection from '../components/LandingPageComponents/FifthSection';

const LandingPage = () => {
  return (
    <div className='relative'>
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
    </div>
  )
}

export default LandingPage
