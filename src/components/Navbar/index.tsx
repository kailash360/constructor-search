import React from 'react'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';

function Navbar() {
  return (
    <div className='w-100 navbar mb-3 py-1'>
        <p className="fs-4 my-0 mx-3 fw-bold align-items-center"><Logo width={30} height='auto' fill='white' /> Search Store</p>
    </div>
  )
}

export default Navbar