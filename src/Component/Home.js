import axios from 'axios';
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const Home = () => {

const navigator=useNavigate();
  const logout = async (event) => {
    localStorage.setItem('token', '');
navigator('/login')

}    

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
       <a class="nav-link" href="#"><Link to='/Home/Departments'>Add Departments</Link></a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#"><Link to='/Home/ViewDepartments'>View Departments</Link></a>
     </li>

     <li class="nav-item">
       <a class="nav-link" href="#"><Link to='/Home/DepartmentHeads'>DepartmentsHeads</Link></a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#"><Link to='/Home/viewhead '>viewHeads</Link></a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#"><Link to='/Home/viewempl '>View Employees</Link></a>
     </li>



     <li class="nav-item dropdown">
       <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       <Link to='/Home/Employee'>Employees</Link>          </a>
       
      <button onClick={logout}>Logout</button>
     </li>
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

export default Home
