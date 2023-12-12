import React, { useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios';
import { BrowserRouter,Routes,Route , Link} from 'react-router-dom'
import About from './About';
import Dashboard from './Dashboard';

function Header() {
  const [arr,SetArr] =useState([]);
  useEffect(()=>{
    axios.get("https://reqres.in/api/users?page=2")

    .then((posRes)=>{
      
      let {data}=posRes;
      let {data:vae}=data;
      SetArr(vae)
      console.log(vae);
    },
          (errRes)=>{
            console.log(errRes);
          });
  },[])


  
  
  return(
    <div>
       <h1 className="main">Hello Welocome To The Main Page</h1>
      <BrowserRouter>
       <ul>
         <li><Link to={"/home"}>Home</Link></li>
         <li><Link to={"/about"}>About</Link></li>
         <li><Link to={"/dashboard"}>Dashboard</Link></li>
       </ul>


       <Routes>
      
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
    
      </BrowserRouter>
      <div>
      <table border={1}>
    <tr>
      <th>S.No</th>
      <th>Id</th>
      <th>E-mail</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Avatar</th>
    </tr>
    
      {
        arr.map((element,index)=>{
          return(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{element.id}</td>
              <td>{element.email}</td>
              <td >{element.first_name}</td>
              <td>{element.last_name}</td>
              <td><img  src={element.avatar}></img></td>
              

            </tr>
          ) 
        })
      }
    
    

    
   </table>
     </div>
    </div>

    

  );
  
}

export default Header;