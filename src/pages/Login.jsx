import loginlogo from '../assets/loginimg.png'
import foxlogo from '../assets/foxwealthlogo.png'


function Login() {
  return (
    <div className='w-[100%] h-screen flex justify-center items-center'>
      <div className='flex flex-row w-[100%] h-[100%]'>
        <div className="w-[50%] h-[100%] bg-ternary-color flex flex-col gap-14 justify-center items-center">
          <div className='w-[60%] h-[55%]'>
            <img src={loginlogo} alt="" className='w-[100%] h-[100%]' />
          </div>
          <div className='flex flex-col gap-7 justify-center items-center'>
            <p className='text-white text-6xl'>WealthFox One Account</p>
            <p className='text-white text-3xl'>One Account. Multiple Benefits.</p>
          </div>
        </div>
        {/* right section */}
        <div className="px-[2em] w-[50%] h-[100%] flex flex-col">
          <div className="w-[100%] h-[17%] flex justify-between">
            <div className='flex gap-3 justify-between items-center'>
              <div className='w-[60%] h-[60%]'>
                <img src={foxlogo} alt="" className="w-[100%] h-[100%]" />
              </div>
              <p className='text-6xl'>FoxWealth</p>
            </div>
            <div className='flex gap-5 justify-center items-center'>
              <p className='text-4xl'>Home</p>
              <p className='text-4xl'>Singup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login