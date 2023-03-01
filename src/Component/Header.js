import React from 'react';
import './header.css';
import instaicon from "../instaicon.png"
import camera from "../camera.png"
import { NavLink } from 'react-router-dom';
function Header() {
  return (
   <>
   <div className='header'>
   <span className='instaicon' ><img src={instaicon} alt='image' ></img></span> 
    {/* <span className='insname'>Instaclone</span> */}
    <span className='camera'>
       <NavLink to="/upload" ><img src={camera} alt='camera'></img></NavLink> 
    </span>
   </div>
   </>
  );
}

export default Header;
