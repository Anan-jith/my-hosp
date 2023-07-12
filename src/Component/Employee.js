import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';



function Departments() {

  const [dept,setdept]=useState([])
  const [value,setvalue]=useState('')
  const [deptname,setdeptname]=useState('')
  const[head,sethead]=useState({})
  const navigator=useNavigate();

    useEffect(()=>{
      const token = localStorage.getItem('token');
      
       if(token==''){
        navigator('/login')
       }        
    },[])

  const [resdata,setresdata]=useState([])
  

  useEffect(()=>{
  if(deptname){

    
    axios.get(`http://localhost:3001/admin/view_head/${deptname}`).then(({data})=>{
      console.log(data,'head')
      sethead(data)
      console.log(head.DEPARTMENT_HEAD);
      
      
    })
  }
    
  },[])

  useEffect(()=>{
    

      axios.get('http://localhost:3001/admin/view_department').then(({data})=>{
        setdept(data)
        // console.log(data,'deptdata')
        
      })
    
  },[])

  


const handlechange=(event)=>{
  console.log('onchange running');
  setvalue({...value,[event.target.name]:event.target.value})
  console.log(value,"changed");
  if(event.target.name=='Dname'){
    console.log(event.target.value);
    setdeptname(event.target.value)
    console.log(deptname);

  }
}

const handleSubmit = async (event) => {
  event.preventDefault();
  // console.log(value);
    await axios.post('http://localhost:3001/admin/addemp',value).then(({data})=>{
      console.log(data);
})

}





  return (
    <div>
        <h1 className='ho'>Employee</h1>
        <div/>

        <form className='form' onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> EMPLOYEE NAME</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.empname} name='empname' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">DATE OF BIRTH</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.year} name='year' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">AGE</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.age} name='age' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">EMPLOYEE NUMBER</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.number} name='number' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
    
    <div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button"  aria-expanded="false">
    DEPARTMENTS
  </button>
  <select value={setvalue.Dname} name='Dname' onChange={handlechange} class="form-select">
    <option></option>
    {dept.map((item)=>{
      console.log(item);
      return(
    
       <option value={item.DEPARTMENT}>{item.DEPARTMENT}</option>
      )
    })}
 
</select>
<h1></h1>
    <input type='text' placeholder={head.DEPARTMENT_HEAD} name='Hname' value={resdata.name} readOnly></input>

    
    
    
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
  </div>
</form>
     

</div>

   
  )
}


export default Departments
   
  

   
        

        
        
      
 
