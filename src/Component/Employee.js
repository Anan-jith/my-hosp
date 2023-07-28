import React,{useState, useEffect} from 'react'
// import SideNav from './SideNav';
import axios from 'axios'
import FileBase64 from 'react-file-base64'
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Departments() {

  const[value,setvalue]=useState({})
  // const {depname}=useParams()
  // console.log(depname,'iddddddd');

  const [getdata,setGetdata]=useState([])
  const [depdata,setdepdata]=useState('')
  const [resdata,setresdata]=useState('')


  useEffect(()=>{
    axios.get('http://localhost:3001/admin/view_department').then(({data})=>{
      setGetdata(data)
      console.log(data,'dept');
    })
  },[])


  const handleChange= async (event)=>{

    setvalue({...value,[event.target.name]:event.target.value})
    console.log(value);

    if(
      event.target.name=='dp'){
      console.log('department selected');
      setdepdata(event.target.value)
      console.log(depdata,'department stored');
      }

  }

 useEffect(() => {
  if (depdata) {
    axios.get(`http://localhost:3001/admin/dept/${depdata}`).then(({data})=>{
      setresdata(data);
      console.log(data, '...s............s');
    }).catch((error) => {
      console.error(error);
      // Handle error if necessary
    });
  }
}, [depdata]);
  console.log(depdata,'.//////////');

 

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.empname} name='empname' onChange={handleChange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">DATE OF BIRTH</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.year} name='year' onChange={handleChange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">AGE</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.age} name='age' onChange={handleChange}></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">EMPLOYEE NUMBER</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.number} name='number' onChange={handleChange}></input>
    <div id="emailHelp" class="form-text"></div>
    
    <div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button"  aria-expanded="false">
    DEPARTMENTS
  </button>

  <div style={{marginTop:'30px'}}>
  <select name='dp' onChange={handleChange} value={setvalue.dp}  >
   {getdata.map((item)=>{
        return(
    <option >{item.DEPARTMENT}</option>

    )
  })}
  </select>
</div>  
<div >
          <p> Report To:</p>
           <input className='link' style={{marginTop:'-60px'}} placeholder={resdata.DEPARTMENT_HEAD}></input>
           </div>
    
    
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
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={setvalue.DESC} name='DECS' onChange={handleChange}></input>
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
   
  

   
        

        
        
      
 
