import React from 'react';
import '../styles/Home.css';
import logo from '../ft.png';

function Home() {
  return (
    <div className='home'>
      <img src={logo} alt="ft" className="ft" />
    </div>
  )
}

export default Home;
