import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { ListGroup, Row, Col } from "reactstrap";
import AddCourse from "./AddCourse";
import AllCourses from "./AllCourses";
import Home from "./Home";


export const Menus = ()=>{
    return(
        <Row>
                <Router>
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
                        <Route path="/add-course" component={AddCourse}/>
                        <Route path="/all-courses" component={AllCourses}/>
                        </Switch>
                    </Col>
                    </Router>
                </Row>
    )
}
