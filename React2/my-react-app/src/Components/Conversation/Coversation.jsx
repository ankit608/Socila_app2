import axios from "axios"
import { useEffect , useState as usestate, useContext as useContext} from "react"
import { Authcontext } from "../../Context/AuthContext"


export default function Conversation({chatHandler, conversation , currentuser}){

      console.log(conversation,"con")
      const {IP} = useContext(Authcontext)
      const[friend,setfriend] = usestate(null)
    useEffect(()=>{

        console.log("dataaa",conversation)
        
        const userFriend = conversation.members.find((a)=> a!==currentuser._id )
        console.log("userFriend",userFriend)
        
        
        const getUser = async () =>{
         const friend = await axios.get(`${IP}3001/service?userid=`+userFriend)
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