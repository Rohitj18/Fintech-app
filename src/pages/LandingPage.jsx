import React from 'react'
import FirstSection from '../components/LandingPageComponents/FirstSection'
import SecondSection from '../components/LandingPageComponents/SecondSection';
import ThirdSection from '../components/LandingPageComponents/ThirdSection'
import FourthSection from '../components/LandingPageComponents/FourthSection'
import Navbar from '../components/LandingPageComponents/Navbar'
import FifthSection from '../components/LandingPageComponents/FifthSection';
import RollingBrandTape from '../components/LandingPageComponents/RollingBrandTape';
import Footer from '../components/LandingPageComponents/Footer';

const LandingPage = () => {
  return (
    <div className='relative'>
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <RollingBrandTape/>
        <FourthSection/>
        <FifthSection/>
        <Footer/>

    </div>
  )
}

export default LandingPage
