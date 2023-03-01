import React from 'react';
import './form.css';
import axios from "axios"
import { NavLink } from 'react-router-dom';


function Form({setUpdateUI}) {

  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);

    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };




  return (
    <>
    
    <div className='mainbox2'>
      <form action='#'  method='post'>
        
        <input id='first' type="file" placeholder='No file chosen'
        accept='image/png, image/jpeg'   onChange={(e)=> handleChange(e)} />
        <br></br>
        <br></br>
        <input id='second' type="text" placeholder='Author'/>
        <input id='third' type="text" placeholder='Location'/>
        <br></br>
        <input id='fourth' type='text' placeholder='Description' />
        <br></br>
       <NavLink to="/Main"><button id='post'>Post</button></NavLink> 
       
      </form>
    </div>
    </>
  );
}

export default Form;
