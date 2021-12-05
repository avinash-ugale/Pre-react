import React, { Component } from "react";
import { connect } from "react-redux";

 class CourseList extends Component{
  
     render(){
         return(
             <div>
              <table className={'table'}>
                  <thead>
                      <tr>
                          <th>Sr no</th>
                          <th>Name</th>
                          <th>fees</th>
                          <th>Option</th>
                      </tr>
                  </thead>
             <tbody>
                 {this.props.courseList.map((course,index)=>
                 {
                     return(
                     <tr key={index}>
                         <th>{index+1}</th>
                          <th>{course.name}</th>
                          <th>{course.fees}</th>
                          <th><button className="btn btn-danger" 
                          onClick={()=>{
                              this.props.deleteCourseByIndex(index)
                          }}
                          >-</button></th>
                         </tr>
                     );
                    })}
             </tbody>
              </table>
             </div>
         );
     }
}
const mapStateToProps=(state)=>{  //getting the value from state to props 
    return{
        courseList:state.courseList,
    };
   };
   const mapDispatchToProps=(dispatch)=>{
    return{
    deleteCourseByIndex:(index)=>dispatch({type:"COURSE_DELETE",payload:index}),
    };
   };
   export default connect(mapStateToProps,mapDispatchToProps)(CourseList);