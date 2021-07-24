import React from "react";
import {Link} from "react-router-dom";
import { ListGroup } from "reactstrap";

export const Menus = ()=>{
    return(
        <ListGroup>
            <Link tag="a" className="list-group-item" to="/">Home</Link>
            <Link tag="a" className="list-group-item" to="/all-courses">All Courses</Link>
            <Link tag="a" className="list-group-item" to="/add-course">Add Course</Link>
            <Link tag="a" className="list-group-item" to="#!">Update Course</Link>
            <Link tag="a" className="list-group-item" to="#!">About Us</Link>
            <Link tag="a" className="list-group-item" to="#!">Contact Us</Link>
        </ListGroup>
    )
}