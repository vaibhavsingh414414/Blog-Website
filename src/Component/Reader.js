import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Reader() {
    const[apiData,setApiData]=useState([]);

    function getData(params) {
        axios.get('https://644542a4914c816083ca37f3.mockapi.io/crud').then((response)=>{
            setApiData(response.data)
        })
    }

    function deleteHandler(id) {
        axios.delete(`https://644542a4914c816083ca37f3.mockapi.io/crud/${id}`).then(
            ()=>{
                getData()
            }
        )
    }

    function setDataToStorage(id,name,email,password){
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
    }
    useEffect(()=>{getData()},[]);
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='mb-2 mt-2'>
            <Link to='/Create'><button className='btn btn-primary'>create new data</button></Link>
        </div>
        <table className='table table-bordered table-striped table-dark table-hover'>
            <thead>
                <tr>
                 <th>ID</th>
                 <th>NAME</th>
                 <th>EMAIL</th>
                 <th>PASSWORD</th>
                 <th>Edit</th>
                 <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    apiData.map((item)=>{
                        return(
                            <>
                              <tr>
                                <td>{item.id}</td>
                                <td>{item.e_name}</td>
                                <td>{item.e_email}</td>
                                <td>{item.e_password}</td>

                                <td>
                                  <Link to='/Edit'className='btn btn-primary' >
                                     <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id,item.e_name,item.e_email,item.e_password)} >Edit</button>
                                  </Link>
                                </td>
                                <td><button className='btn btn-danger' onClick={()=>{if(window.confirm("are you sure")){deleteHandler(item.id)}}}>Delete</button></td>
                              </tr>
                            </>
                        )
    
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Reader
