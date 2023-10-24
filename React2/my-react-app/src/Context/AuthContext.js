import { createContext, useReducer } from "react"

import AuthReducer from "./AuthReducer"

const Initial_state = {
    user: null,
    Isfetching:false,
    error:false,
    address:"http://44.202.35.128:",


};
export const Authcontext  =  createContext()

export const AuthContextProvider = ({children})=>{
 
    const[state,dispatch] = useReducer(AuthReducer,Initial_state)
    
    return(

        <Authcontext.Provider value={
            {
                user:state.user, 
                Isfetching: state.Isfetching,
                 error:state.error , 
                 IP: state.address,
                 dispatch
                }
        }
            
            >
             {children}
            </Authcontext.Provider>
    )
}