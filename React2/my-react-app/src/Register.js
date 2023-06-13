import axios from "axios"


const Register = async (name,password,Email)=>{
   

   try{
      
     const res = await axios.post("http://localhost:8080/service/register",{"Email":Email,"password":password,"User":name})
     

    }catch(error){
        
        console.log(error)
        
    }
}

export default Register