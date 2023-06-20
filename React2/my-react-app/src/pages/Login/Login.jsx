import { useContext, useRef } from "react"
import "./Login.css"
import {Login_CAll} from "../../APIcalls"
import { Authcontext } from "../../Context/AuthContext"
import { CircularProgress } from "@material-ui/core"
import {Link, useNavigate} from "react-router-dom"
export default function Login(){

  const{user,Isfetching,error, dispatch}  = useContext(Authcontext)
  const Navigate = useNavigate()
  const password = useRef()
  const Email =  useRef()
const handleClick = (e)=>{
   e.preventDefault()
   Login_CAll({email:Email.current.value, password:password.current.value},dispatch)
}

    return(
        <div className="LoginContainer">
      
      <div className="LoginWrapper">
        
          <div className="loginRight">
            
            <h3 className="LogoName">AnkitSocial</h3>
            <span className="LogoText">
                Connect with friends and world around you with AnkitSocial
            </span>
          </div>

          <div className="loginLeft">
            
            <form className="LoginBox" onSubmit={handleClick}>
              <input className="LoginInput"  required placeholder="Email" ref={Email}></input>
              <input className="LoginInput" placeholder="Password"  
                  required type="password" ref={password}
                  minLength={6}
              
              ></input>
              <button className="Login-Button" type="submit">{Isfetching?<div><span>loading...</span><CircularProgress color="white" size={20}></CircularProgress></div>:"log In"}</button>
              <span className="Login-pass"> Forget Password?</span>
              
              <button className="Create-Account" onClick={()=>{
                 Navigate("/register")
              }}>{Isfetching?<div><span>loading...</span><CircularProgress color="white" size={20}></CircularProgress></div>:"create new account"}</button>
              
              
               <div className="invalid_user">{error?<span>invalid_user</span>:""}</div>
            </form>
          </div>

         </div>
      

    </div>
    )
    
}