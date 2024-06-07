import React from 'react'
import { useState } from 'react';

function Header() {

  const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full p-[1.5em] sm:px-[4em] px-[2em] z-[10] flex justify-between items-center fixed top-0'>
        <a href="" className='text-gray-500 roboto text-[1.5em] text-center font-extrabold'>IDPC <span className='block text-[0.6em] mt-[-5px]'> finance</span></a>
      {
        nav ? 
        <>
        <i onClick={handleNav} className='fa-solid cursor-pointer sm:hidden block fa-bars absolute right-[.5em] text-4xl'></i>

          <ul className='sm:flex  hidden justify-between gap-[2em]'>
              <li><a href="" className='uppercase roboto'>Retail</a></li>
              <li><a href="" className='uppercase roboto'>SME</a></li>
              <li><a href="" className='uppercase roboto'>corporate</a></li>
              <li><a href="" className='uppercase roboto'>about us</a></li>
              <li><a href="" className='uppercase roboto'>covid 19</a></li>
              <li><a href="" className='uppercase roboto'>campains</a></li>
          </ul>
          <ul className='sm:flex hidden justify-between gap-[2em]'>
              <li className='roboto'><a href=""><i className='fa solid fa-magnifying-glass text-[1.5em] text-pink-600'></i></a></li>
              <li><a href="" className='w-full bg-pink-600 font-semibold p-[1em] px-[1.5em] text-white rounded-[5px]'>iSERVICE</a></li>
          </ul>
          </>

          :
          <div className='h-screen sm:hidden fixed left-0 top-0 w-[100%] bg-[#00000073]'>
            <nav className='h-screen sm:hidden  fixed left-0 top-0 w-[50%] bg-pink-600'>
              <i onClick={handleNav} className='fa-solid cursor-pointer sm:hidden block fa-times fixed right-[.5em] top-[.5em] text-white text-4xl'></i>

              <div className='p-[1em] text-white'>
                <li className='list-none text-3xl text-center  font-bold poppins line'><p>IDPC <span className='block text-[0.6em] mt-[-5px]'> finance</span></p></li>
              </div>
              <div className='fixed flex flex-col items-center top-[15%] bg-white boxSha h-screen w-[50%]'>
                <ul className=' flex flex-col justify-center gap-[1em] py-[2em]'>
                    <li className='text-center p-[.5em] px-[1em] active:scale-110 duration-[0.5s] bg-pink-600 rounded-[1em] text-white font-semibold'><a href="" className='uppercase roboto'>Retail</a></li>
                    <li className='text-center p-[.5em] px-[1em] active:scale-110 duration-[0.5s] bg-pink-600 rounded-[1em] text-white font-semibold'><a href="" className='uppercase roboto'>SME</a></li>
                    <li className='text-center p-[.5em] px-[1em] active:scale-110 duration-[0.5s] bg-pink-600 rounded-[1em] text-white font-semibold'><a href="" className='uppercase roboto'>corporate</a></li>
                    <li className='text-center p-[.5em] px-[1em] active:scale-110 duration-[0.5s] bg-pink-600 rounded-[1em] text-white font-semibold'><a href="" className='uppercase roboto'>about us</a></li>
                    <li className='text-center p-[.5em] px-[1em] active:scale-110 duration-[0.5s] bg-pink-600 rounded-[1em] text-white font-semibold'><a href="" className='uppercase roboto'>covid 19</a></li>
                    <li className='text-center p-[.5em] px-[1em] active:scale-110 duration-[0.5s] bg-pink-600 rounded-[1em] text-white font-semibold'><a href="" className='uppercase roboto'>campains</a></li>
                </ul>
                <ul className='flex gap-[1.5em] mt-[2em] items-center justify-center'>
                    <li className='roboto hover:border-2 border-pink-600 p-2.5 rounded-[5px]'><a href=""><i className='fa solid fa-magnifying-glass text-[1.5em] text-pink-600'></i></a></li>
                    <li><a href="" className='w-full bg-white border-2 border-pink-600 font-semibold p-[1em] px-[1.5em] text-pink-600 rounded-[5px]'>iSERVICE</a></li>
                </ul>
              </div>
            </nav>
          </div>
      }
    </div>
  )
}

export default Header