import React, { Component } from "react";
import { connect } from "react-redux";

 class PersonList extends Component{
    onDeleteHandler=(index)=>{
        const personListCopy=this.state.personList;
        personListCopy.splice(index , 1);
        this.setState({personList: personListCopy});
        };
     render(){
         return(
             <div>
              <table className={'table'}>
                  <thead>
                      <tr>
                          <th>Sr no</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Option</th>
                      </tr>
                  </thead>
             <tbody>
                 {this.props.personList.map((person,index)=>
                 {
                     return(
                     <tr key={index}>
                         <th>{index+1}</th>
                          <th>{person.name}</th>
                          <th>{person.age}</th>
                          <th><button className="btn btn-danger" 
                          onClick={()=>{
                              this.props.deletePersonByIndex(index)
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
        personList:state.personList,
    };
   };
   const mapDispatchToProps=(dispatch)=>{
    return{
      deletePersonByIndex:(index)=>dispatch({type:"PERSON_DELETE",payload:index}),
    };
   };
   export default connect(mapStateToProps,mapDispatchToProps)(PersonList);