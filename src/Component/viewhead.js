import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'



const Viewhead = () => {

  const Navigate=useNavigate()

const [value,setvalue]=useState([])



    useEffect(()=>{
      const token = localStorage.getItem('token')
        axios.get('http://localhost:3001/admin/ViewHeads',
        {headers:{"Authorization": `Bearer $(token)` }}
        ).then(({data})=>{
setvalue(data)
console.log(data);
if(token==''){
  Navigate('/login')
}

        })
    },[])


    const handleDelete = async(id)=>{
      console.log(id);
      await axios.post(`http://localhost:3001/admin/View_Heading/${id}`)
    
    
    }
    const handleEdit = async(id)=>{
      console.log(id);
      await axios.post('http://localhost:3001/admin/delete_department/${id}')
    }
    
    



  return (
    <>


    {value.map((item)=>{
return(
  <div class="card">
  <h5 class="card-header">Department HEAD NAME: {item.DEPARTMENT_HEAD}</h5>
  <div class="card-body">
    <img src={item.image}></img>
  <h5 class="card-title">Year: {item.year}</h5>
  <p class="card-text">Description:  {item.DECS}</p>
  <h6>DEPARTMENT NAME:{item.Dname}</h6>

  <button onClick={()=>handleDelete(item._id)}>DELETE</button>
  <Link to={`/Home/EditHeads/${item._id}`}>
  <button>EDIT</button>
  </Link>
  
  </div>
  </div>  
  )
})}



        
        </>
  )
}

export default Viewhead
