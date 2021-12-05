import React, { Component } from "react";
import AddPerson from "./AddPerson";
import PersonList from "./PersonList";


export default class Person extends Component{
     render(){
         return(
             <>
          <center><h1>  Person List</h1></center>  
           <div className="row">
               <div className="col-md-4">
               <AddPerson/>
           
               </div>
               <div className="col-md-8">
               <PersonList/>
               </div>
           </div>
             </>
         );
     }
}