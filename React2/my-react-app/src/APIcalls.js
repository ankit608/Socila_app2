import axios from "axios";

export const Login_CAll = async (usercredentials,dispatch)=>{
  dispatch({type:"Login_Start"});
  var res
  
  try{
    
  var st = `http://localhost:8080/service/login`

  
   res = await axios.post("http://localhost:8080/service/login",usercredentials) 
   
   setTimeout(()=>{
    dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    clearTimeout()
   },2000)
  
    
  }catch(error){
    res = error 
    console.log("ressssss",error)
    setTimeout(() => {
        dispatch({type:"LOGIN_Fail"})
        clearTimeout() 
    },2000);
    

  }
}