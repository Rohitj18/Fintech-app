import loginlogo from '../../assets/loginimg.png'
import signuplogo from '../../assets/signupimg.png'
import foxlogo from '../../assets/foxwealthlogo.png'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


function Template() {
    let imageArr = [loginlogo,signuplogo];
    const currPath = useLocation();
    const currLocation = currPath.pathname?.split("/");
    const formtype = currLocation[currLocation.length-1];
    const templatedata = formtype === "login" ? {
        heading:"WealthFox One Account",
        subheading:"One Account. Multiple Benefits."
    }:{
        heading:"Welcome on board",
        subheading:"Signup for free."
    };
    return (
        <div className='w-[100%] h-screen flex justify-center items-center'>
            <div className='flex flex-row w-[100%] h-[100%]'>
                <div className="w-[50%] h-[100%] bg-ternary-color flex flex-col gap-14 justify-center items-center">
                    <div className='w-[60%] h-[55%]'>
                        <img src={formtype === "login"?imageArr[0]:imageArr[1]} alt="" className='w-[100%] h-[100%]' />
                    </div>
                    <div className='flex flex-col gap-7 justify-center items-center'>
                        <p className='text-white text-6xl'>{templatedata.heading}</p>
                        <p className='text-white text-3xl'>{templatedata.subheading}</p>
                    </div>
                </div>

                {/* right section */}
                <div className="px-[2em] w-[50%] h-[100%] flex flex-col  items-center">

                    <div className='flex flex-row justify-between mt-5 items-center w-[100%] h-[10%]'>
                        <div className='w-[12rem] h-[8rem] flex justify-center items-center gap-2 ml-[5em]'>
                            <img src={foxlogo} alt="" className='w-[100%] h-[100%]' />
                            <p className='text-primary-blue font-semibold text-4xl'>WealthFox</p>
                        </div>

                        <div className='flex flex-row gap-10 text-4xl'>
                            <div className='nav-link'>
                                <NavLink data-id="1" style={{ textDecoration: 'none' }} to="/" >Home</NavLink>
                            </div>

                            <div className='nav-link'>
                                <NavLink data-id="2" style={{ textDecoration: 'none' }} to={`/${formtype === "login"?"signup":"login"}`} >{`${formtype === "login"?"Sign Up":"Login"}`}</NavLink>
                            </div>
                        </div>

                    </div>

                    {
                        formtype === "login"?(<LoginForm/>):(<SignupForm/>)
                    }


                    

                </div>


            </div>


        </div>
    )
}

export default Template