import React from "react";
import {Header} from "./components/Header";
import {Menus} from "./components/Menus";
import { Container, } from "reactstrap";

// import {BrowserRouter as Router} from "react-router-dom";
// import AddCourse from "./components/AddCourse";
// import AllCourses from "./components/AllCourses";
// import { ListGroup } from "reactstrap";
// import Home from "./components/Home";
export default function App(){
    return(
            <Container fluid="true">
            <Header/>
            <Menus/>
            </Container>
    )
}
