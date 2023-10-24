import axios from "axios";

export const Login_CAll = async (usercredentials,dispatch,IP)=>{
  console.log(IP,"Address")
  dispatch({type:"Login_Start"});
  var res
  //http://44.202.35.128:
  //http://44.202.35.128/
  try{
    
  var st = `${IP}3001/service/login`

  
   res = await axios.post(`${IP}3001/service/login`,usercredentials) 
   
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