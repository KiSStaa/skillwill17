import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navi = () => {
  return (
    <div className='navi'>
      <Link to="/" className='main'>Main</Link>
      <Link to="/about" className='about'>About</Link>
      
      <Outlet />
    </div>
  );
};

export default Navi;