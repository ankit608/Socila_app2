import axios from "axios"


const register = async (name,password,Email,IP)=>{
   
    

   try{
      
    console.log("gfgfgf",IP)
     const res = await axios.post(`${IP}3001/service/register`,{"Email":Email,"password":password,"User":name})
     

    }catch(error){
        
        console.log(error)
        
    }
}

export default register