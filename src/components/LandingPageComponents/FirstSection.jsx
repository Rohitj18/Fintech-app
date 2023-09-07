import React from 'react'
import cards from '../../assets/LandingPageAssests/card-landingpage.png'
import Button from '../Common/Button'
import { FaRegPlayCircle } from 'react-icons/fa'
import { useEffect} from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import {useSpring,animated} from 'react-spring';
import Aos from 'aos';
import "aos/dist/aos.css"

function Number({n}){
    const {number} = useSpring({
        from: { number:0},
        number:n,
        delay:100,
        config:{mass:1,tension:20,friction:10}
    });
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>;
}

const FirstSection = () => {
    let iconStyles = { color: "white", fontSize: `2em` }
    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, [])
    const [text] = useTypewriter({
        words: ['Investments', 'Assests', 'Expenses', 'Taxation'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })


    return (
        <div className="h-screen w-[100%] bg-gradient-to-l from-ternary-color from-50% via-secondary-color via-30% to-primary-color to-20%">
            <div className='w-11/12 h-[100%] mx-auto'>
                <div className='flex flex-row flex-wrap'>
                    {/* left side */}
                    <div className='h-screen w-[50%] max-w-[50%] flex flex-col justify-center items-start gap-[5.5em]'>
                        {/* heading */}
                        <div className='mb-[2rem] '>
                            <h1 className='text-white text-[7em] leading-[9.3rem]'>Easy way to manage your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-60% via-[#E0AA3E] via-30% to-[#B88A44] to-10% @apply font-Oswald'>{text}</span></h1>
                        </div>
                        {/* buttons */}
                        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-14 mb-[2rem]'>
                            <div className='w-[15.7em] h-[4.8em]'>
                                <Button text={"Get started"} size={2} />
                            </div>
                            <div className='flex flex-row gap-4 w-[15.7em] h-[4.8em] justify-center items-center rounded-lg transition-all duration-100 ease-in-out hover:border-white hover:border-2'>
                                <button className='text-white text-[2em] rounded-lg'>Watch video</button>
                                <FaRegPlayCircle style={iconStyles} />
                            </div>
                        </div>
                        <div data-aos="fade-right" className='glass-effect w-[80%] h-[18%] flex flex-row text-white justify-evenly items-center'>
                            <div className='flex flex-col items-start gap-3'>
                                <p className='text-5xl'><Number n={12000}/></p>
                                <p className='text-2xl'>Users use the app</p>
                            </div>
                            <div className='bg-white h-[63%] w-[0.3em]'>

                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <p className='text-5xl'><Number n={10628}/></p>
                                <p className='text-2xl'>People trust us</p>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className='h-screen w-[50%] max-w-[50%] flex flex-col justify-center items-center'>
                        <div className='h-[43rem] w-[47rem]'>
                            <img src={cards} alt="" className='h-[100%] w-[100%] icon-dots icon-cube' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection
