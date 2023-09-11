import React from 'react'
import stockvideo from '../../assets/LandingPageAssests/stockvideo.mp4'
import wealthvideo from '../../assets/LandingPageAssests/wealthmanagement.mp4'
import walletvideo from '../../assets/LandingPageAssests/personalizedwallet.mp4'


const data = [
  {
    heading:"Stock Market Analysis",
    description:"Our website offers a cutting-edge Real-time Market Sentiment Analysis feature that empowers investors and traders with a comprehensive understanding of market sentiment dynamics."
  },
  {
    heading:"Wealth Managment",
    description:"Our website offers an advanced Personalized Financial Planning Dashboard, a robust feature designed to empower users with a comprehensive, tailored approach to managing their wealth."
  },
  {
    heading:"Adv Digital Wallet",
    description:'Introducing our "One-Click Secure Payments" feature for your digital wallet. This streamlined solution simplifies online transactions, prioritizes security, and enhances your overall convenience.'
  }
]

const FeatureCard = ({isleft,index}) => {
  let videoArr = [stockvideo,wealthvideo,walletvideo];
  return (
    <div className={`flex ${isleft?"flex-row pr-[3.5em]":"flex-row-reverse pl-[3.5em]"} w-[100%] h-[100%] bg-yellow-400`}>
    {/* left section */}
      <div className='w-[65%] h-[100%] p-[3em] '>
        <div className='flex flex-col'>
          <p className='font-semibold text-6xl'>{data[index]?.heading}</p>
          <div className='w-[50%] h-[0.2em] bg-black mt-[1.5em]'></div>
          {/* description */}
          <div className='flex flex-row h-[10em] mt-[3em] gap-5'>
            <div className='h-[100%] w-[3%] bg-blue-500'>
            </div>
            <div>
              <p className='text-3xl'>{data[index]?.description}</p>
            </div>
          </div>
        </div>
      </div>
    {/* right section */}
      <div className='w-[35%] h-[100%] flex items-center justify-center my-auto'>
        <video muted loop autoPlay className='rounded-md shadow-[10.0px_14.0px_10.0px_rgba(0,0,0,0.38)]'> <source src={videoArr[index]} /></video>
      </div>
    </div>
    
  )
}

export default FeatureCard

