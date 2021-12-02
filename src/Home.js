import React from 'react'
import HomeCom1 from './components/HomeCom1';
import HomeCom2 from './components/HomeCom2';
import HomeCom3 from './components/HomeCom3';
import { AppContext } from './Context';

const Home = () => {
    return (
        <div className='home'>
                <div style={{marginLeft:'2rem',marginTop:'2rem'}}><p>Welcome to your Dashboard, Abhishek</p></div>
                <HomeCom1/>
                <HomeCom2/>
                <HomeCom3/>
        </div>
    )
}

export default Home
// className={`${sidebarOpen?'home home-small':'home home-big'}`} 