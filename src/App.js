import React, { useEffect, useState } from "react";
import Home from "./component/Home"
import UserList from "./component/UserList";
import axios from "axios";


function App() {
  const [user,setUser]=useState("");
  const [map,setMap]=useState("");
  console.log(user,"TestEEEEE")
  console.log(map,"TestMap")
  const baseURL="https://jsonplaceholder.typicode.com/users"
  const mapURL="https://jsonplaceholder.typicode.com/posts"
   useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(mapURL).then((res) => {
      setMap(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1><Home /></h1>
      {user && user.map((el) => <p>{el.id}</p>)}
      {user && user.map((el) => <p>{el.name}</p>)}
      {user && user.map((el) => <p>{el.username}</p>)}
     
     <UserList />
     {map && map.map((el) => <p>{el.id}</p>)}
     {map && map.map((el) => <p>{el.title}</p>)}
     {map && map.map((el) => <p>{el.userid}</p>)}
    </div>
  );
}

export default App;
