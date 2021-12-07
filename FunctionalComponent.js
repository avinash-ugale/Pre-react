

import { useState } from "react";
export default ()=>{
    const [value,setValue] =useState(0);
    const onClickHandler =()=>{
        setValue(value+1);
    };
    const onClickHandlerDec =()=>{
        setValue(value-1);
    };

    return(
        <>
    <h1>Value:{value}</h1>
    <button onClick={onClickHandler}>Increment</button>
    <button onClick={onClickHandlerDec}>Decrement</button>

        </>
    );
};