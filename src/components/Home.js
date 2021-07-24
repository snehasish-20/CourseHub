import React from "react";
import {ToastContainer, toast} from 'react-toastify';
import { Jumbotron, Button} from "reactstrap";

export default function Home(){
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


    return(
        <Jumbotron className="p-5">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button onClick={notify} color="primary">Learn More</Button>
        </p>
        <ToastContainer/>
      </Jumbotron>
    )
}