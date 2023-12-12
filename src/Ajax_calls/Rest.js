import React, { useEffect, useState } from 'react'
import axios from "axios"


function Rest() {

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
  return (
   <table border={2}>
    <tr>
      <th>S.No</th>
      <th>Id</th>
      <th>E-mail</th>
      <th>FirstName</th>
      <th>LastName</th>
    </tr>
    <tr>
      {
        arr.map((element,index)=>{
          
        })
      }
    </tr>
    <h1>{JSON.stringify(arr)}</h1>

    
   </table>
  )
}

export default Rest;