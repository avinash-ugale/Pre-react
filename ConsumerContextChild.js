import React,  { Component } from "react";
import { PersonConsumer } from "./PersonContext";


export default class ConsumerContextChild extends Component{
render(){
    return (
        <>
        <h1>ConsumerContextChild</h1>
        <PersonConsumer>
            {(value)=>{
                return(
                    <h2>
                        the latest vlaue context is name is {value.name}and age is {""}
                        {value.age}{""}
                    </h2>
                );
            }}
        </PersonConsumer>
        </>
    )
}
}