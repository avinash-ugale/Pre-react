
// import { useState } from "react";
import withOrder from "./withOrder";
const OfflineOrder= (props)=>{
    console.log(props);
    const status =
    ["Order Placed","Preparing","Serving","Bill Payment"];

    // const [value,setValue]=useState(0);

    // const onClickHandler=()=>{
    //     setValue(value+1);
    // };
    return(
        <>
        <h1>Offline Order:</h1>
        <div>Current Status:{status[props.value]}</div>
        <button onClick={props.onClickHandler}>Next Status</button>
        </>
    );

};
export default withOrder(OfflineOrder);