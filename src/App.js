import React from "react";
import {Header} from "./components/Header";
// import {Menus} from "./components/Menus";
import { Container, Row, Col } from "reactstrap";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import { ListGroup } from "reactstrap";

export default function App(){
    return(
        <Router>
            <Container fluid="true">
            <Header/>
                <Row>
                    <Col md={3}>
                    <ListGroup>
            <Link tag="a" className="list-group-item" to="/">Home</Link>
            <Link tag="a" className="list-group-item" to="/all-courses">All Courses</Link>
            <Link tag="a" className="list-group-item" to="/add-course">Add Course</Link>
            <Link tag="a" className="list-group-item" to="#!">Update Course</Link>
            <Link tag="a" className="list-group-item" to="#!">About Us</Link>
            <Link tag="a" className="list-group-item" to="#!">Contact Us</Link>
        </ListGroup>
                    </Col>
                    <Col md={9}>
                        <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="add-course" component={AddCourse}/>
                        <Route path="all-courses" component={AllCourses}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    )
}