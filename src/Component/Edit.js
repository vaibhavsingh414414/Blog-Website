import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Edit() {

    const[id,setId]=useState(0);
    const[name,setName]=useState(' ');
    const[email,setEmail]=useState(' ');
    const[password,setPassword]=useState(' ');

    const navigate=useNavigate();

    useEffect(()=>{
        
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password'));
        
    },[ ])
    const submitHandler=(e)=>{
        e.preventDefault();

        axios.put(`https://644542a4914c816083ca37f3.mockapi.io/crud/${id}`,{
            e_name:name,
            e_email:email,
            e_password:password
        }).then(()=>{
            navigate('/');
        })
        
    }
  return (
    <div>
      <h1>Update Table</h1>
      <form onSubmit={submitHandler} >
        <label >Name:</label>
        <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} />
        <label >Email:</label>
        <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value) }/>
        <label >Password:</label>
        <input type="text" value={password}  name="password" onChange={(e)=>setPassword(e.target.value)} />
        
        <input type="submit" value="Update"/>
        <Link to='/'><button className='btn btn-primary'>create new data</button></Link>
        
      </form>
    </div>
  )
}

export default Edit
