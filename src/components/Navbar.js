import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { GrApps } from 'react-icons/gr'
import { BsBell } from 'react-icons/bs'
import { AppContext } from '../Context'
import { FaBars } from 'react-icons/fa'
import profilePhoto from '../profile.jpeg'
const Navbar = () => {
    const { sidebarOpen, setSidebarOpen } = React.useContext(AppContext);


    return (
        <nav className='navbar flex align-center space-between background-white'>
            <button type='button' className='bars' onClick={() => setSidebarOpen(true)}><FaBars /></button>
            <h1 className='margin-none'>Dashboard</h1>  

            <div className='flex align-center navbar-right'>
                <div className='flex align-center margin-x-1'>
                    <input type="text" id='search' />
                    <label htmlFor="search"><FiSearch /></label>
                </div>
                <GrApps className=' margin-x-1 hide-md' />
                <button className='primary-button margin-x-1 hide-md' type='button'><BsBell />15</button>
                <div className='flex margin-x-1 align-center'>
                    <img src={profilePhoto} style={{width:'40px',borderRadius:'9999px'}} alt="pic" />
                    <p className=' hide-md'>Abhishek</p>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
