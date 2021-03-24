import React, { createContext, useReducer, useContext } from "react";


const INITIAL_STATE = {
  isLogged:false,
  UserId:""
}

const StoreContext = createContext(INITIAL_STATE);
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case "LOGIN":
    
          return {
            ...state,
            isLogged:true,
            UserId:action.data.userId
          };


    case "LOGOUT":

      return INITIAL_STATE;
  

   default:
    return state;
  }
};



const StoreProvider = ({ value = [], ...props }) => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  
    const login = (userId)=>{
    
      dispatch({ type: "LOGIN", data:{userId} })
    }

    const logout= ()=>{
      dispatch({ type: "LOGOUT" })
    }
    console.log(state);
  return <Provider value={{login,logout,isLogged:state.isLogged}} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
