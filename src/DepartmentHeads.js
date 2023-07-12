
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';


const DepartmentHeads = () => {
  const navigator=useNavigate();
    useEffect(()=>{
      const token = localStorage.getItem('token');
       if(token==''){
        navigator('/login')
       }        
    },[])
 
    const [dept,setdept]=useState([])
  
  
  const handlechange=(event)=>{
    setvalue({...value,[event.target.name]:event.target.value})
    console.log(value)
  }

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(value);
        await axios.post('http://localhost:3001/admin/add_Heads',value).then(({data})=>{
          console.log(data);
    })
    



  }

  const [value,setvalue]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/admin/view_department').then(({data})=>{
setdept(data)
console.log(data)

    })
},[])
  





  
  return (
    <div className='rrr'>
    <form className='form1' onSubmit={handleSubmit}>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"> DEPARTMENT HEAD NAME</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.DEPARTMENT_HEAD} name='DEPARTMENT_HEAD' onChange={handlechange}></input>
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
   
    
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
      
    </div>
  

       
      


        




        <div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button"  aria-expanded="false">
    DEPARTMENTS
  </button>
  <select name='Dname' class="form-select" value={setvalue.Dname} onChange={handlechange}>
    {dept.map((item)=>{
      console.log(item);
      return(
    
       <option value={item.DEPARTMENT}>{item.DEPARTMENT} </option>
      )
    })}
 
</select>
</div>
{/* <div>
  <FileBase64
        multiple={ false }
        onDone={(res)=>{
          console.log(res.base64)
          setvalue({...value,image:res.base64})


        }}
        />

  </div> */}
  <button type='submit' className='nw'>SUBMIT</button>
  </form>
      
    </div>
  )
}

export default DepartmentHeads
