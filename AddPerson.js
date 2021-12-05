import React, { Component } from "react";
 import { connect } from "react-redux";
class AddPerson extends Component{
state={
    name:"",
    age:0,
}
onValueChangeHandler=(event)=>{
    const {name,value}=event.target;
    this.setState({[name]:value});
}
onFormSubmitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state);
    this.props.addPerson(this.state);
}

    render(){
        return(
        <div>
       <h1>In Person</h1>
       <form onSubmit={this.onFormSubmitHandler}>

       <div class="mb-3">
       <label class="form-label">Name:</label>
       <br/>
       <input name={"name"} value={this.state.value} onChange={this.onValueChangeHandler} class="form-control"/>

       <br/></div>
       <div class="mb-3">
       <label class="form-label">Age:</label>
       <br/><br/>

       <input name={"age"} value={this.state.value} onChange={this.onValueChangeHandler} class="form-control"/>
       <br/> </div>
       
       <button type="submit" className="btn btn-success">Submit</button>
       </form>
       </div>
          
        );
       

    };

};
const mapStateToProps=(state)=>{  //getting the value from state to props 
    return{
        
    };
   };
   const mapDispatchToProps=(dispatch)=>{
    return{
         addPerson:(payload)=>dispatch({type:"PERSON_ADD",payload:payload}),
    };
   };
   export default connect(mapStateToProps,mapDispatchToProps)(AddPerson);
