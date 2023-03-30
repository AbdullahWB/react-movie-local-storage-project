import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import SideCart from './Component/SideCart/SideCart';

function App() {
  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>
      <div className='main row'>
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="sideCard col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>
      <Contact></Contact>
    </div>
  )
}

export default App
