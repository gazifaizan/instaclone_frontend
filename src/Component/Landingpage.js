import React from 'react';
import './landing.css'
import instalogo from'../instalogo.jpg'
import { NavLink } from 'react-router-dom';
function Landingpage() {
  return (
    <>
    <div className='lamainbox'>
      
        <img  className='logoins' src={instalogo} alt="instalogo"></img>
      
      <div className='land'>
      <div>
        < h1 className='hello' >Hello Insta Users</h1> 
        </div>
       
      <div> 
      <NavLink to="/Main"><button className='enterb'>Enter</button></NavLink> 
      </div>
      </div>
    </div>
    </>
  );
}

export default Landingpage;
