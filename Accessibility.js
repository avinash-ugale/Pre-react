import React,{ Component } from "react";
export default class Accessibiltiy extends Component{
    onClickButtonHandler=()=>{
         console.log("in handler");
    }
render (){
    return(
        <>
        <h1>i AM  inside Accessibiltiy</h1>
        <label htmlFor="name">Name:</label>
        <br/>
        <input id="name" name={"name"} placeholder="Please enter your name"
        aria-label="name" aria-required="true"/>

        <br/>
        <button onClick={this.onClickButtonHandler}>Click me</button>
        <br/>
        <table>
            <tbody>
            <tr>
                <td>Avinash</td>
                <td>Ankit</td>
            </tr>
            </tbody>
        </table>
        </>
    );
}
}