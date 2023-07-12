import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Hospital from './Component/Hospital';
import Home from './Component/Home';
import Profile from './Component/Profile';
import Departments from './Departments';
import Employee from './Component/Employee';
import Mangements from './Mangements';
import ViewDepartment from './ViewDepartment';
import DepartmentHeads from './DepartmentHeads';
import Viewhead from './Component/viewhead';
import EditDept from './editDept';
import EditHeads from './Component/EditHeads';
import ViewEmployees from './Component/ViewEmployees';
import Editempl from './Component/Editempl';
import ViewDep from './ViewDep';
import ViewHd from './ViewHd';
import ViewEmply from './ViewEmply';
import Details from './Component/Details';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>

      <Route path="login" element={<Hospital/>}/>
     
      <Route path="Managements" element={<Mangements/>}/>
      <Route path='ViewDep' element={<ViewDep/>}/>
      <Route path='ViewHd' element={<ViewHd/>}/>
      <Route path='ViewEmply' element={<ViewEmply/>}/>
      <Route path='Details' element={<Details/>}/>

      </Route>

        <Route path="/Home" element={<Home/>}>
      <Route path="Departments" element={<Departments/>}/>
          <Route path='add' element={<Departments/>}/>
          <Route path='ViewDepartments' element={<ViewDepartment/>}/>
          <Route path='DepartmentHeads' element={<DepartmentHeads/>}/>
          <Route path='viewhead' element={<Viewhead/>}/>
          <Route path='editDept/:id' element={<EditDept/>}/>
          <Route path='EditHeads/:id' element={<EditHeads/>}/>
          <Route path='viewempl' element={<ViewEmployees/>}/>
          <Route path='Editempl/:id' element={<Editempl/>}/>
          <Route path="Employee" element={<Employee/>}/>
          </Route>
        
   
       
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
