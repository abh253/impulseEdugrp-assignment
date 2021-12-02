import './App.css';
import Home from './Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Transactions from './Transactions';

function App() {
  return (  
    <>
        <Sidebar />
        <div className='main-scr'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/trans' element={<Transactions/>}/>
          </Routes>

          {/* <Transactions/> */}
        </div>
    </>

  );
}

export default App;
