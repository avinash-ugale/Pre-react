import React, { Component } from "react";
import CourseForm from './CourseForm';
import CourseList from './CourseList';


export default class Course extends Component{
     render(){
         return(
             <>
          <center><h1>  Course List</h1></center>  
           <div className="row">
               <div className="col-md-4">
                <CourseForm/>
           
               </div>
               <div className="col-md-8">
               <CourseList/>
               </div>
           </div>
             </>
         );
     }
}