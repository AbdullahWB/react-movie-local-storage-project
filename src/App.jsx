import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import SideCart from './Component/SideCart/SideCart';
import context from 'react-bootstrap/esm/AccordionContext';

function App() {
  const [watchTime, setWatchTime] = useState("");
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem('watch time'));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem('watch time', sum);
      setWatchTime(sum)
    } else {
      localStorage.setItem('watch time', time);
      setWatchTime(time)
    }
  };
  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>
      <div className='main row'>
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCard col-md-4 card">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
      <Contact></Contact>
    </div>
  )
}

export default App
