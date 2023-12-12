import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchDataExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>First Name: {item.firstName}</p>
          <p>Last Name: {item.lastName}</p>
          <img src={item.avatar} alt="Avatar" />
        </div>
      ))}
    </div>
  );
}

export default FetchDataExample;
