import React, { Component } from "react";
import { connect } from "react-redux";

 class PersonList extends Component{
     state={
         selectObject :null,

     };
    onDeleteHandler=(index)=>{
        const personListCopy=this.state.personList;
        personListCopy.splice(index , 1);
        this.setState({personList: personListCopy});
        };

       editButtonClickHandler=(person)=>{
          console.log("edit",person);
          this.setState({selectObject:person});
        
       };
       onResetHandler =()=>{
           this.setState({selectObject:null});
       }
       onValueChangeHandler=(event)=>{
           const {value,name} =(event.target);
           this.setState({selectObject:{...this.state.selectObject,[name]:value},
        });

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
                     <tr key={person.id}>
                         <th>{person.id}</th>
                          <th>
                              {this.state.selectObject && this.state.selectObject.id === person.id ?
                            (<input 
                                name="name"
                                value={this.state.selectObject.name} 
                                onChange={this.onValueChangeHandler}/>) :(person.name) 
                            }
                             
                          </th>
                          <th>
                              {this.state.selectObject && this.state.selectObject.id === person.id ?
                            (<input 
                                name="age"
                                value={this.state.selectObject.age} 
                                onChange={this.onValueChangeHandler}/>) :(person.age) 
                            }
                             
                          </th>

                          
                          <th>
                          {this.state.selectObject && this.state.selectObject.id === person.id ? <>
                          <button className="btn btn-danger" 
                               onClick={()=>{
                              this.props.updatePerson({
                                  ...this.state.selectObject,
                              });
                              this.onResetHandler();
                          }}
                          >Update</button>
                          &nbsp;
                          <button onClick={()=>{
                              this.onResetHandler();
                          }}>Reset</button></> : 
                          <>
                          <button className="btn btn-danger" 
                          onClick={()=>{
                          this.props.deletePersonByIndex(index)
                     }}
                        >Delete</button>
                     &nbsp;
                     <button onClick={()=>{
                         this.editButtonClickHandler(person);
                     }}>Edit</button>
                     </>}
                              </th>
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

      updatePerson:(person)=>dispatch({type:"PERSON_UPDATE",payload:person}),
    };
   };
   export default connect(mapStateToProps,mapDispatchToProps)(PersonList);