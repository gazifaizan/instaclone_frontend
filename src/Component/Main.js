import React from 'react';
import './main.css'
// import academy from'../academy.png'
import like from '../like.png'
import Header from './Header';
function main({photos}) {
  return (
   <>

    <Header/>

    {photos.map(({ photo, _id }) =>{return (

    <div className='mainbox'>
      
     <span className='dot'>...</span>
        <span className='name'>Siva</span>
        {/* <span className='dot'>...</span> */}
        <span className='city'>Bengaluru</span>
       
        
     
     <section>
        <img className='acad' src={ `http://localhost:5000/uploads/${photo}`} alt='ph'></img>
     </section>
     <section>
     <span className='date'>10 Jan 2021</span>
        <span className='like'>
            <img src={like} alt='lik'></img>
        </span>
        <span className='ab' >64 likes</span>
         
         <b className='kick'>Kick start your career with a bang</b>
        
     </section>
    </div>

    )})}
    </>
  );
}

export default main;

