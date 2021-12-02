import React from "react";

//create a new conetxt

const personContext=React.createContext();

//provider

const PersonProvider =personContext.Provider;

//consumer

const PersonConsumer =personContext.Consumer;

export {PersonProvider,PersonConsumer};