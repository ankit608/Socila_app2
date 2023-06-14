import { Button } from "@material-ui/core"
import {useState as  usestate , useContext as usecontext, useEffect, useRef} from "react"
import Topbar from "../../Components/TopBar"

import "./Messenger.css"
import  Start_chat from "../../Components/Start_chat/Start_chat"
import  Chat from"../../Components/Chat/Chat"
import ChatOnline from "../../Components/ChatOnline/ChatOnline"
import { Authcontext } from "../../Context/AuthContext"
import Conversation from "../../Components/Conversation/Coversation"
import axios from "axios"

export default function Messenger(){

      
      const [stoper,setstoper] = usestate(null)
     const [Currentchat,setCurrentchat] = usestate(null)
     const[conversation, setConversation] = usestate([])
     const[messages,setmessages] = usestate()
    const {user} = usecontext(Authcontext)

    

useEffect(()=>{
   
    const getAllconv = async () =>{
        try{
            console.log("hellooo")
            const response = await axios.get("http://localhost:8080/service/Conversation/"+user._id)
            console.log("getAll",response.data)
            setConversation(response.data)
          
        }
        catch(error){
           console.log("error")
        }
        
        

    }
     getAllconv()
},[user._id])

    const[clicked,setClick] = usestate(false)
 const ChatHandler = ()=>{
    setClick(!clicked)
 }

return(
<div classname= "chat_container">

    <Topbar></Topbar>
  <div className="Chat_wrapper">
  <div className="chat_menu">
    <div className="Chat_menu_Wrapper">
     <input className="searchFriend" placeholder="Search your friend" ></input>
     
      {conversation.map((a)=>{
        
        return (
            <div onClick={()=>{setCurrentchat(a)}}>
            <Conversation conversation={a} chatHandler={ChatHandler} currentuser={user}></Conversation>
        </div>
        )
       
        
      })}
     
    </div>
  </div>
    <div className="chat_box">
       {Currentchat?<Chat Currentchat={Currentchat}  conversation = {conversation}></Chat>:<Start_chat></Start_chat>}
    </div>
    <div className="chat_Online">
        <div className="chat_OnlineWrapper">
         <ChatOnline chatHandler={ChatHandler}></ChatOnline>
        </div>
    </div>
  </div>
   

</div>

)

}
/*>*/