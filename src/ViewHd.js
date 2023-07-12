import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const ViewHd = () => {
const [value,setvalue]=useState([])

// const navigator=useNavigate()


    useEffect(()=>{
      // const token = localStorage.getitem('token')


        axios.get('http://localhost:3001/admin/ViewHeads',
        // {headers:{"Authorisation" : `Bearer ${token}`}}

       ) .then(({data})=>{
setvalue(data)
console.log(data);
// if(token==''){
//   navigator('/login')
// }


        })
    },[])


    // const handleDelete = async(id)=>{
    //   console.log(id);
    //   await axios.post(`http://localhost:3001/admin/View_Heading/${id}`)
    
    
    // }
    // const handleEdit = async(id)=>{
    //   console.log(id);
    //   await axios.post('http://localhost:3001/admin/delete_department/${id}')
    // }
    
    



  return (
    <>

  <div className='ham'
  
>

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
  <Link to={`/Home/EditHeads/${item._id}`}>
  <button>EDIT</button>
  </Link>
   */}
  </div>
  </div>  
  )
})}
  </div>


        
        </>
  )
}

export default ViewHd

