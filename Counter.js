import React, { Component } from "react";
import { connect } from "react-redux";



class Counter extends Component{
    render(){
       
       console.log(this.props);
       return <h1>Counter:{this.props.counter}<br/>
       <button onClick={this.props.increment}>Increment</button>
       <button onClick={this.props.decrement}>Decrement</button>
      
      </h1>;
     
    }

   }

   const mapStateToProps=(state)=>{  //getting the value from state to props 
    return{
        counter:state.counter,
    };
   };
   const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch({type:"increment"}),
        decrement:()=>dispatch({type:"decrement"}),
    };
   };
   export default connect(mapStateToProps,mapDispatchToProps)(Counter);