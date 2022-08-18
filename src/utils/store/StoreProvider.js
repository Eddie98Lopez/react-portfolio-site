import React, { createContext, useContext, useState, useEffect } from "react";
import rootReducer from "./reducer";
import { getProjects } from "../supabase.js";

const StoreContext = createContext();
const useStore = () => useContext(StoreContext);

const initialState = {
  dialog: { display: false, message: "" },
  projects: [],
  error: null,
};

const StoreProvider = (props) => {
  const [store, setStore] = useState(initialState);
  const dispatch = (action) => {
    setStore(rootReducer(store, action));
  };

  useEffect(() => {
    getProjects().then((res) => {
      dispatch({type:'FETCH_PROJECTS', payload:res})
      console.log(store);
    })
    .catch(err=> console.log(err));
    
  }, []);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { useStore, StoreProvider };
