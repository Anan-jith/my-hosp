import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './hospital.css'

const Hospital = () => {
  const navigator=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value,setvalue]=useState('')
  const[er,seter]=useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
const handlechange=(event)=>{
  setvalue({...value,[event.target.name]:event.target.value})
}
  const handleSubmit = async (event) => {
    event.preventDefault();
      await axios.post('http://localhost:3001/login',value).then(({data})=>{
        console.log(data);
        if(data.success){
          localStorage.setItem('token', data.data.token);
          navigator('/home')
        }
        else{
          seter(true)
        }
      })

      
      // Handle the response from the server
    
  };

  return (
    <div className='container'>
      <div className='card5'>
        <div className='card-body'>
          <form className='cover mx-auto' onSubmit={handleSubmit}>
            <nav className='navbar bg-body-tertiary'>
              <div className='container-fluid'>
                <a className='navbar-brand'>LOGIN PAGE</a>
              </div>
            </nav>
            <input
              type='text'
              value={setvalue.email}
              name='email'
              placeholder='enter email'
              onChange={handlechange}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='enter password'
              value={setvalue.password}
              onChange={handlechange}
            />
            <button type='submit'>LOGIN</button>
          </form>
          {er &&
          <h1>invalid username or password</h1>
          }
        </div>
      </div>
    </div>
  );
};

export default Hospital;
