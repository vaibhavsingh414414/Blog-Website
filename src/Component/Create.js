import React,{ useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



function Create() {
  const[name,setName]=useState({
    name:"",
    email:"",
    password:""
  });
  const navigate=useNavigate();

  const changeHandler=(e)=>{
    const{name,value}=e.target;
    console.log(name,value);
    setName((prev)=>({
      ...prev,[name]:value
    }))
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(name);

    axios.post('https://644542a4914c816083ca37f3.mockapi.io/crud',{
      e_name:name.name,
      e_email:name.email,
      e_password:name.password
    }).then(()=>{
      navigate('/')
    })

  }
  return (
    <div>
      <h1>Form Template</h1>
      <form onSubmit={submitHandler} >
        <label >Name:</label>
        <input type="text" value={name.name} name="name" onChange={changeHandler}/>
        <label >Email:</label>
        <input type="email" value={name.email} name="email" onChange={changeHandler} />
        <label >Password:</label>
        <input type="password" value={name.password}  name="password" onChange={changeHandler}/>
        
        <input type="submit" value="Submit"/>
        <Link to='/'><button className='btn btn-primary'>create new data</button></Link>
        
      </form>
    </div>
  )
}

export default Create;