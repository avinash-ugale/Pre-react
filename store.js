import {createStore} from 'redux';


//create inital object

const initialState={
  counter:0,

};


// create new reducer

const reducer=(state=initialState,action)=>{
    const {type}=action;
    switch(type){
        case "increment":
        return{
           counter:state.counter+1,
      };   
        case "decrement":
       return{
          counter:state.counter-1,
      };        

   default:
       return state;
      }
    };


// create store

const store=createStore(reducer);

export default store;