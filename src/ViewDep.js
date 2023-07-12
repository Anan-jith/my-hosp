import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'



const ViewDep = () => {
const [value,setvalue]=useState([])

// const navigator= useNavigate()




    useEffect(()=>{
      const token = localStorage.getItem('token');

        axios.get('http://localhost:3001/admin/view_department',
        // {headers:{"Authorization" : `Bearer ${token}`}}
        
        ).then(({data})=>{
setvalue(data)
      //  if(token==''){

      //   navigator('/login')
      //  }

        })
    },[])

    

    // const handleDelete = async(id)=>{
    //   console.log(id);
    //   await axios.post(`http://localhost:3001/admin/delete_department`)
    
    
    // }

    // const handleEdit = async(id)=>{
    //   console.log(id);
    //   await axios.post('http://localhost:3001/admin/delete_department')
    // }
    



  return (
    <>
  <div>

    {value.map((item)=>{
return(
  <div class="card">
  <h5 class="card-header">Department: {item.DEPARTMENT}</h5>
  <div class="card-body">
    <img src={item.image}></img>
  <h5 class="card-title">Year: {item.year}</h5>
  <p class="card-text">Description:  {item.DECS}</p>
  <Link to={`/Details`}>
  <button>Details</button>
  </Link>
  {/* <button onClick={()=>handleDelete(item._id)}>DELETE</button>
  <Link to={`/Home/editDept/${item._id}`}>
  <button>EDIT</button>
  </Link> */}
  </div>
  </div>
  )
})}
  </div>


        
        </>
  )
}

export default ViewDep
