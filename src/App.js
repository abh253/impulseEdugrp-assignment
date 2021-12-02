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
      <Router basename={process.env.PUBLIC_URL}>
        <Sidebar />
        <div className='main-scr'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/trans' element={<Transactions/>}/>
          </Routes>

          {/* <Transactions/> */}
        </div>
      </Router>
    </>

  );
}

export default App;
