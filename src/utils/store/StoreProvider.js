import React, { createContext, useContext, useState } from "react";
import rootReducer from "./reducer";

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

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { useStore, StoreProvider };
