
import { useContext, useEffect, useState as usestate } from "react"
import Messages from "../Messages/Messages"
import axios from "axios"
import { Authcontext } from "../../Context/AuthContext"
import { useRef } from "react"
import {format} from "timeago.js"
import {io} from "socket.io-client"
export default function Chat({Currentchat , conversation}){
     const count = 0
     const[Arrivedmsg,setArrivedMessage] = usestate(null)
    const[Msg,setMsg] = usestate([])
    const {user,IP} = useContext(Authcontext)
    const socket = useRef()
    
   useEffect(()=>{
   if(conversation.length >=1){
     console.log("count:")
    socket.current = io(`ws://${IP}:8890`)
   }
   
  
  },[])

   useEffect(()=>{
     
    
    if(conversation.length>=1){

        
        socket.current.emit("AddUser",user._id)
      
      
        socket.current.on("getMessage",(data)=>{

       console.log("getMessage",data)
        data.Time = new Date()
        setArrivedMessage(data)
        

      })
    }
      

   },[])




     
    useEffect(()=>{

        if(Arrivedmsg){
          setMsg([...Msg,Arrivedmsg])
        }
    },[Arrivedmsg])

    
    const text_ref = useRef()
    const SaveMessages = async (data)=>{
       const a =  await axios.post(`${IP}3001/service/Conversation`,data)
       console.log(a,"aaaa")
    }

   

    useEffect(()=>{

        
        const fetch_messages = async () =>{
            const  abc = await axios.get(`${IP}3001/service/Conversation/conver/`+Currentchat._id)
            console.log("useEffect",Msg.data)
            
            setMsg(abc.data)

        }
        fetch_messages()
    },[Currentchat])
    return(
        <div className="chat_boxWrapper">
        
         <div className="chat_display">
                
                  {Msg.map((m)=>{
                     console.log(3)
                     

                 return (  <Messages msg ={Msg}  own = {(m.SenderID === user._id)?true:false} text ={m.Text} Time={m.createdAt}></Messages>)
                  })}
             
                
            </div>
            <div className="chat_area">
            <textarea className="Typing_Area" placeholder="Type.."  ref={text_ref}  onChange={(e)=>{
               console.log(e.target.value)
            }}></textarea>
            <button className="Chat_but" onClick={()=>{
               const a = document.getElementsByClassName("Typing_Area")
               console.log(a[0].value)
               const newdata={
                conversationId:Currentchat._id,
                     SenderID: user._id,
                     Text: a[0].value,
                     Time:  new Date()
            }
            
            const recieverid = Currentchat.members.find((member)=>member!==user._id)
            socket.current.emit("sendMessage",{
           
                SenderId: user._id,
                recieverid:recieverid,
                Text: newdata.Text

            })
            console.log("newdata",newdata)
              
 
              SaveMessages(newdata)

            setMsg([...Msg,newdata])
            

            }}>Send</button>
            </div>
         
        </div>
    )
}