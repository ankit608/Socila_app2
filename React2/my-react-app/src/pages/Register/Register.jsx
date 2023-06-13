import { useRef as UseRef, useState as UseState } from "react"
import { useNavigate as UseNavigate} from "react-router-dom"
import Register from "../../Register"
import { CircularProgress } from "@material-ui/core"


export default function register(){

  const[state,setstate] = UseState()
 const Navigate = UseNavigate()
  const password = UseRef()
  const  Name = UseRef()
  const Confirm_password = UseRef()
const Email = UseRef()
  const handler = (e)=>{
    e.preventDefault()
  if(password.current.value!== Confirm_password.current.value){
    console.log(password,Confirm_password)
    Confirm_password.current.setCustomValidity("passwword not matching")
  }else{
   
    try{
       setstate("yes")
      
       setTimeout(()=>{
        const res =   Register(Name.current.value,password.current.value,Email.current.value)
          clearTimeout()
         setstate()

         Navigate("/login")
        
       },2000)
       
      
      
      
    }catch{


    }
  

  }

   
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
            
            <form className="LoginBox" onSubmit={handler}>
              <input className="LoginInput" placeholder="Name" ref={Name} required></input>
              <input className="LoginInput" placeholder="Email" ref={Email} required></input>
              <input className="LoginInput" placeholder="Password" type="password" ref={password} required></input>
              <input className="LoginInput" placeholder=" Confirm Password" type="password" ref={Confirm_password}required></input>
              <button  type="submit" className="Login-Button">{state?<CircularProgress size={20} color="white"></CircularProgress>:"log In"}</button>
              <button className="Create-Account">LogIn to an Account</button>
            </form>
          </div>

         </div>
      

    </div>
           
    )
        
}