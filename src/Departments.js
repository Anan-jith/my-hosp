import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';
import { Navigate, useNavigate } from 'react-router-dom';


function Departments() {
  const [value,setvalue]=useState('')
  const navigator=useNavigate();
    useEffect(()=>{
      const token = localStorage.getItem('token');
       if(token==''){
        navigator('/login')
       }        
    },[])


const handlechange=(event)=>{
  setvalue({...value,[event.target.name]:event.target.value})
}

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log(value);
    await axios.post('http://localhost:3001/admin/department',value).then(({data})=>{
      console.log(data);
})

  return (
    <div>
      

      
    </div>
  )
}





  return (
    <div>
        <h1 className='ho'>DEPARTMENTS</h1>
        <div/>

        <form className='form' onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> DEPARTMENT NAME</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.DEPARTMENT} name='DEPARTMENT' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">YEAR</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.year} name='year' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div>
  <FileBase64
        multiple={ false }
        onDone={(res)=>{
          console.log(res.base64)
          setvalue({...value,image:res.base64})


        }}
        />

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">DESCRIPTION</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.DESC} name='DECS' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
 <img src={value.image} className='images'></img>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
     

</div>

   
  )
}

export default Departments
