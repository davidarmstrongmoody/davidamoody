import React from 'react'
import {StyleRoot} from 'radium';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/nav/Navbar'
import Footer from './components/Footer'
import About from './components/pages/About'
import Work from './components/pages/Work'
import Home from './components/pages/Home'
import Personal from './components/pages/Personal'
import Professional from './components/pages/Professional'
import './App.css';

const App = () => {
  return (
    <>
      <StyleRoot>
        <Router>
          <Header/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/professional' element={<Professional/>}/>
            <Route path='/personal' element={<Personal/>}/>
          </Routes>
          <Footer/> 
        </Router>
      </StyleRoot>
    </>
  );
}
  
export default App;