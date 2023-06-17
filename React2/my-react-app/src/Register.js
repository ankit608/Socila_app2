import axios from "axios"


const Register = async (name,password,Email)=>{
   

   try{
      
     const res = await axios.post("http://18.204.18.253:3001/service/register",{"Email":Email,"password":password,"User":name})
     

    }catch(error){
        
        console.log(error)
        
    }
}

export default Register