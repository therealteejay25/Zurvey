import React from 'react'
import logo from '../assets/logo.svg'
import illus from '../assets/illus.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-light h-screen'>
        <div className='w-36 flex mx-auto lg:pt-5 pt-20 justify-evenly'>
            <img src={logo} className='h-10' alt="" />
            <h3 className='text-main text-xl font-semibold py-[6px]'>Zurvey</h3>
        </div>
        <div>
            <img className='mx-auto lg:h-96 ' src={illus} alt="" />
            <p className='px-10 pb-10 text-[#999] text-center font-medium'>Zurvey is the best and free online survey to take online surveys and learn.</p>
        </div>
        <div>
            <Link to='/survey' className='bg-main py-3 lg:mx-[34.5rem] px-20 mx-12 mt-5 rounded-full text-dark text-lg'>
            Get started
            </Link>
        </div>
    </div>
  )
}

export default Home