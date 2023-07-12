import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import FileBase64 from 'react-file-base64';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'





const Editempl = () => {

    const {id}=useParams();
    console.log(id);
    const [value,setvalue]=useState('')
    const [datas,setdata]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3001/admin/empeditfind/${id}`,value).then(({data})=>{
setdata(data)
console.log(datas);

        })
    },[])
  
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(value);
          await axios.post(`http://localhost:3001/admin/addemp/${id}`,value).then(({data})=>{
            console.log(data);
      })
    }      

    const handleUpdate=async(event)=>{
        event.preventDefault();
        await axios.post (`http://localhost:3001/admin/Editempl_post/${id}`,value).then(({data})=>{
            console.log('sssssssssssssssss');
        })
    }

    const handlechange=(event)=>{
      setvalue({...value,[event.target.name]:event.target.value})
      console.log(value,'////////////////////');
    }
  return (
    <div>
            <div>
        <h1 className='ho'>EMPLOYEES</h1>
        <div/>

        <form className='form3' onSubmit={handleUpdate}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> EMPLOYEE NAME</label>
    <input type="text" placeholder={datas.DEPARTMENT} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.DEPARTMENT} name='DEPARTMENT' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">DATE OF BIRTH</label>
    <input type="text" class="form-control" placeholder={datas.year} id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.year} name='year' onChange={handlechange}></input>
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
    <input type="text" class="form-control" placeholder={datas.DECS} id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.DESC} name='DECS' onChange={handlechange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
 <img  className='images'></img>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-success">Edit</button>
  {/* <button typ class="btn btn-success">Edit</button> */}
</form>
     

</div>

      
    </div>
  )
}

export default Editempl
