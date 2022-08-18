import React, { createContext, useContext, useState, useEffect } from "react";

const CounterContext = createContext();
 const useCounter = () => useContext(CounterContext);

const CounterProvider = (props) => {


  return( <CounterContext.Provider value={{counter,setCounter}}>{props.children}</CounterContext.Provider>)
};

export {CounterProvider, useCounter};
