import React, { useContext } from 'react'
import {FaHome,FaPaperPlane,FaGift,FaTimes} from 'react-icons/fa'
import {GrTransaction} from 'react-icons/gr'
import {BsCheckAll,BsPeopleFill} from 'react-icons/bs'
import {GiReturnArrow} from 'react-icons/gi'
import {BiErrorAlt} from 'react-icons/bi'
import {MdLocalOffer,MdAccountCircle} from 'react-icons/md'
import {AiTwotoneSetting} from 'react-icons/ai'
import { AppContext } from '../Context'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    
    
    const {sidebarOpen,setSidebarOpen,setPage}=useContext(AppContext);
    return (
        <div className={ `${sidebarOpen?'sidebar-open sidebar':'sidebar-close sidebar' }`}>
            <header className='flex'>
            <h1>Subspace</h1>
            <button type='button' className='times' onClick={()=>setSidebarOpen(!sidebarOpen)}><FaTimes/></button>
            </header>
            <ul>
                <li onClick={()=>setPage('home')}><FaHome className="margin-x-1"/> Home</li>
                <li onClick={()=>setPage('trans')}><GrTransaction className="margin-x-1"/> Transactions</li>
                <li><FaPaperPlane className="margin-x-1"/> Subcription Plans</li>
                <li><BsCheckAll className="margin-x-1"/> Settelement</li>
                <li><BiErrorAlt className="margin-x-1"/> Disputes</li>
                <li><GiReturnArrow className="margin-x-1"/> Refunds</li>
                <li><BsPeopleFill className="margin-x-1"/> Customers</li>
                <li><FaGift className="margin-x-1"/> Offers</li> 
                <li><MdLocalOffer className="margin-x-1"/> Reward Points</li>
                <li><MdAccountCircle className="margin-x-1"/> My Account</li>
                <li><AiTwotoneSetting className="margin-x-1"/> Setting</li>
            </ul>
        </div>
    )
}

export default Sidebar
