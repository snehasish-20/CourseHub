import React, { useState } from "react";
import { Course } from "./Course";

export default function AllCourses(){
    const coursedetails = useState([
        {title : "Java Course", desc : "This is Best Java Course by Coursehub"},
        {title : "Python Course", desc : "This is Best Python Course by Coursehub"},
        {title : "Php Course", desc : "This is Best Php Course by Coursehub"},
        {title : "HTML/Css Course", desc : "This is Best Html/Css Course by Coursehub"},
        {title : "C/C++ Course", desc : "This is Best C/C++ Course by Coursehub"},
        {title : "React Course", desc : "This is Best React Course by Coursehub"}
    ]);

    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>
            {
                coursedetails.length>0 ? coursedetails.map((item)=> <Course details={item}/>) : "No Course Available"
            }
        </div>
    )
}