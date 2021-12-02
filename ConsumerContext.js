import React,{ Component } from "react";


import ConsumerContextChild from './ConsumerContextChild'
export default class ConsumerContext extends Component{
    render(){
        return (
            <>

            <h1>In context Consumer</h1>
            <ConsumerContextChild/>
            </>
        );
    }
}