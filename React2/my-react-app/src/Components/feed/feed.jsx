import "./feed.css"

import Share from "../Share/Share"
import Post from "../post/post"
import axios from "axios"
import { useState,useEffect, useContext } from "react"
import { Authcontext } from "../../Context/AuthContext"

export default function Feed({username},{USERNAME}){
    const a = null
    console.log("feed_nameS",username)
    const {user} = useContext(Authcontext)
    console.log("feed",user)
  
   const[posts,setpost] = useState();
    
   useEffect(()=>{
   
    const fetchPosts =  async ()=>{
       
      
        console.log("username:",username)
       const  res = username ?  await axios(`http://localhost:8080/service/Posts/profile/${username._id}`)
      :await axios(`http://localhost:8080/service/Posts/timeline/${user._id}`)
      setpost(res.data)
      console.log("feed component",res.data)
      
      
      
    }
    
    fetchPosts()
    
    },[username,user._id])

      
   
    return(
         
      
      <div className="Feedcss">
          
    <div className="feedwrapper"> 
     
     
     {username?(username.User===user.User?<Share></Share>:<div></div>):<Share></Share>}
     
     {USERNAME?<Share></Share>:<div></div>}

     { posts? posts.map((data)=>{
           
         if(data){

          return  <Post key={data._id} data={data}></Post>
         }
           
                   
           }):<div></div>} 
             
        
      </div> 
      </div>
    )
}

