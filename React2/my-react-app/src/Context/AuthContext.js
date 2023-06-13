import { createContext, useReducer } from "react"

import AuthReducer from "./AuthReducer"

const Initial_state = {
    user: null,
    Isfetching:false,
    error:false,


};
export const Authcontext  =  createContext()

export const AuthContextProvider = ({children})=>{
 
    const[state,dispatch] = useReducer(AuthReducer,Initial_state)
     console.log("sateeee",state)
    return(

        <Authcontext.Provider value={
            {
                user:state.user, 
                Isfetching: state.Isfetching,
                 error:state.error , 
                 
                 dispatch
                }
        }
            
            >
             {children}
            </Authcontext.Provider>
    )
}