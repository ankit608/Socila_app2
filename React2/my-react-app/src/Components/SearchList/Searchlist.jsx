import "./Searchlist.css"
import axios from "axios"
import { Authcontext } from "../../Context/AuthContext"
import { useContext } from "react"
export default function  SearchList({friend,user,conversation,states}){
const b = friend
const {IP} = useContext(Authcontext)
    const a  = {

    "Senderid":user._id, 
    "Recieverid":friend._id
}
  return(

    <div className="Searchdiv" onClick = {(friend)=>{
        console.log("hello")
         let v= true
        conversation.map((c)=>{
            if(c.members.includes(b._id)){
                v = false
                console.log("hihjsdh")
                console.log()
            }
        })
          
        if(v){
            console.log("hello..... ")
            axios.put( `${IP}3001/service/Conversation`,a)
          }
           
          states(false)
        
        
    }}>
        <img src = {friend.profilepic}  className="friend_image" ></img>
        <span>{friend?friend.User:""}</span>

    </div>
  )


}