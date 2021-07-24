import React from "react";
import './App.css';
import {Button} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify';
import Header from "./components/Header";


function App() {
  const notify = ()=>{
    toast.dark('Successful!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (
    <div>
      <Header/>
      <h1 style={{padding : "15px", textAlign : "center"}}>My React App Working</h1>
      <Button onClick={notify} color="danger" >First React Button</Button>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
