import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: {},
};
const AppReducer = (state,action) => {
    switch(action.type) {
        case "ADD":
            return {
                ...state,
                transactions:action.payload
            }
    }
};
//create context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function addTransaction(transaction) {

    dispatch({
        type: "ADD",
        payload: transaction
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state?.transactions,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
