
// import { useState } from "react";

import withOrder from "./withOrder";
const OnlineOrder=(props)=>{
    console.log(props);
    const status =
    ["Order Placed","Pending","Preparing","Out for delivery","Delivered"];

    // const [value,setValue]=useState(0);

    // const onClickHandler=()=>{
    //     setValue(value+1);
    // };
    return(
        <>
        <h1>Online Order:</h1>
        <div>Current Status:{status[props.value]}</div>
        <button onClick={props.onClickHandler}>Next Status</button>
        </>
    );

};
export default withOrder(OnlineOrder);