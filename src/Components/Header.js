import React from 'react';
import Logo from '../Assest/img/Logo.png'

const Header = () => {
  return (
    <div className='absolute z-10 px-8 py-2 bg-gradient-to-b from-black'>
        <img width='180px' src={Logo} alt='logo'/> 
    </div>

  )
}

export default Header