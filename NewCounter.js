import React, { Component } from "react";
import { connect } from "react-redux";

class NewCounter extends Component{
    render(){
        return <h1>NewCounter:{this.props.counter}<br/>
         <button onClick={this.props.increment}>Increment</button>
         <button onClick={this.props.decrement}>Decrement</button>
      
        </h1>
    }

}
const mapStateToProps=(state)=>{
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
export default connect(mapStateToProps,mapDispatchToProps)(NewCounter);