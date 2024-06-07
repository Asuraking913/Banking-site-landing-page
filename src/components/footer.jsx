import React from 'react'

function Foot() {
  return (
    <section className='flex gap-[1em] text-center sm:text-left sm:justify-between place-content-center p-[1em] sm:p-[3em]'>
        <ul className='flex flex-col w-[50%] roboto sm:gap-0 gap-[4em] sm:justify-between  sm:w-[20%]'>
            <div className='flex flex-col sm:gap-[0.5em] gap-[0.2em]'>
                <h2 className='text-2xl poppins sm:mb-[0em] font-bold'>About the company</h2>
                <li><p>Learn to love and growth and change and you will be a sucess. Microsoft patch</p></li>
            </div>
            <div className='flex  gap-[1em]'>
                <i className='fa-brands text-2xl hover:scale-125 duration-[0.5s] fa-facebook text-blue-500'></i>
                <i className='fa-brands text-2xl hover:scale-125 duration-[0.5s] fa-youtube text-red-600'></i>
                <i className='fa-brands text-2xl hover:scale-125 duration-[0.5s] fa-linkedin text-blue-500'></i>
                <i className='fa-brands text-2xl hover:scale-125 duration-[0.5s] fa-instagram text-pink-600'></i>
            </div>
        </ul>
        <ul className='sm:flex flex-col w-[50%] sm:w-auto hidden roboto gap-[0.5em]'>
            <h2 className='font-bold poppins mb-[0em] text-xl'>Product</h2>
            <li><a href="">CSR activities</a></li>
            <li><a href="">Green Banking</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Ongoing Campaign</a></li>
            <li><a href="">Updates</a></li>
        </ul>
        <ul className='sm:flex flex-col sm:text-left text-center roboto gap-[0.5em]'>
            <h2 className='font-bold poppins mb-0 sm:mb-[0em] text-xl'>Get started</h2>
            <li><a href=""></a>Carrer</li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Government Securities</a></li>
            <li><a href="">Examples</a></li>
            <li><a href="">NIS</a></li>
        </ul>
        <ul className='sm:flex flex-col hidden roboto gap-[0.5em]'>
            <h2 className='font-bold poppins mb-[0em] text-xl'>About</h2>
            <li><a href="">IPDC at a glance</a></li>
            <li><a href="">Mission, vision & Values</a></li>
            <li><a href="">Corporate Governance</a></li>
            <li><a href="">Shareholders</a></li>
            <li><a href="">Investor Relations</a></li>
        </ul>
        <ul className='hidden'>
            <a href=""  className='poppins font-bold flex gap-[0.5em] justify-center items-center'><i className='fa-solid fa-phone text-pink-600 pl-[1em]'></i>16519</a>
        </ul>
    </section>
  )
}

export default Foot