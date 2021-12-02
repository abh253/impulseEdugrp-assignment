import './App.css';
import Home from './Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import Transactions from './Transactions';
import { AppContext } from './Context';
import { useContext } from 'react/cjs/react.development';

function App() {
  const {page}=useContext(AppContext); 
  return (  
    <>
        <Sidebar />
        <div className='main-scr'>
          <Navbar />
          {page==='home' && <Home/>}
          {page==='trans' && <Transactions/>}

        </div>
    </>

  );
}

export default App;
