import axios from "axios"
import { useEffect , useState as usestate} from "react"


export default function Conversation({chatHandler, conversation , currentuser}){

      console.log(conversation,"con")
      const[friend,setfriend] = usestate(null)
    useEffect(()=>{

        console.log("dataaa",conversation)
        
        const userFriend = conversation.members.find((a)=> a!==currentuser._id )
        console.log("userFriend",userFriend)
        
        
        const getUser = async () =>{
         const friend = await axios.get("http://18.204.18.253:3001/service?userid="+userFriend)
         console.log("friend",friend.data)
         setfriend(friend.data)
        }
        getUser()
    },[conversation])
    
    
    
    return( 
    <div className="Chat_menu_friend">
    <div className="friend_image_container">
     
 <img className="friend_image" src={friend?friend.profilepic:""} onClick={chatHandler}></img>
    </div>
    
    <span>{friend?friend.User:""}</span> 
  </div>)
}