import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div>
        <div className='flex justify-start items-start w-full mx-14'>
            <img src = {logo} alt=" " className='rounded-full border-gray-100 border-2' />
        </div>
    </div>
  )
}

export default Header