import React from "react";
import Hospital from "./Component/Hospital"


import Home from './Component/Home';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="bar">
      


       <nav class="navbar navbar-expand-lg bg-body-tertiary navcolor" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> <Link to='/Managements'>Managements</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/login'>Login</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/ViewDep'>ViewDepartments</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/ViewHd'>Viewhead</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/ViewEmply'>ViewEmployees</Link></a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/Details'>Details</Link></a>
        </li> */}
        
        </ul>
        </div>
       
      

  </div>





      </nav>
      






     
    
{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hospital />}/>
          <Route path="/home" element={<Home />} />
       
      </Routes>
    </BrowserRouter> */}
    <Outlet/>

    </div>
  
  )

  
}

export default App;
