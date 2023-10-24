import "./rightbar.css"
import Dummydata from "../../Dummydata"
import { useContext, useEffect} from "react"
import { Authcontext } from "../../Context/AuthContext"
import axios from "axios"
import { Link } from 'react-router-dom'
import { useState as usestate ,useContext as usecontext} from "react"
import { Add } from "@material-ui/icons"
//import { Authcontext } from "../../Context/AuthContext"

export default  function Rightbar( {User}){
  
  
  const PRO = ()=>{
      
    const {user,IP} =  usecontext(Authcontext)
     
     const [Isfollowed,setIsfollowed] = usestate(false)
     
    const followhandler = async ()=>{
      
      console.log("Usersss:",User.User)
      const a = await axios.put(`${IP}3001/service/${User._id}/follow`,{id:user._id})
       
      setIsfollowed(!Isfollowed)

    }
    console.log("USER:",User)
    
  const count=0
   const[data,setData] = usestate([])

    console.log("user:",user)
    
  useEffect(()=>{
      const fetch= async()=>{
        if(Object.keys(User).length!==0){
          
          

          setIsfollowed(User.following.includes(user._id))
          const a = await axios.get(`${IP}3001/service/${User._id}/followers`)
           console.log("aaa" +" "+User.User,a)
           console.log("Usersss:",User)
          setData(a.data)
         
    
        
      
      }
        
      }
       fetch()
     },[User])
     
   
   

 

  return(

    

    <div className="UserInfo">
      <button className="follow_button" onClick={followhandler}>{Isfollowed?"Unfollow":"follow"}</button>
    <h4>User information</h4>
    <div>
    <span className="InfoAttrributes">City:</span>
     <span className="value">{User.City}</span>
    </div>
     <div>
     <span className="InfoAttributes">From:</span>
     <span className="value">{User.From}</span>
     </div>
    <div>
    <span className="InfoAttributes">Relationship:</span>
     <span className="value">{User.Relationship}</span>
    </div>
     
<h4>User friends</h4>

<div className="friendContainer">
 {
  data[0]!=null ? data.map((m)=>{
    
      
return (

  <Link to = {"/profile/"+m.User} style={{textDecoration:"none"}}>
    <div className="friendContainerImg">
        <img src={m.profilepic} className="Userfriendimg"  name={m.User}  alt=""></img>
        <div><span>{m.User}</span></div>
    </div>
   </Link>
   
    )
 }):<div></div>}
</div>
</div>
  


)
   
 }
     const HOM = ()=>{
     
    return(
   
        <>
        <div className="birthdayContainer">
           <img src="/Assets/—Pngtree—red gift_4642106.png"  className="birthdayImage" alt=""></img>
            <span className="birthdayText">
                <b>Ankit sahu</b> and <b> 4 other friend</b> have birthday today
            </span>
           </div>
           <img src="/Assets/coffee1.jpg" className="coffeeAdv" alt=""></img>
           <h4 className="onlineFriendText">
            Online Friends
          </h4>
           <div className="rightbarFriendList">
             
             <ul className="onlineFriendLists">
               
                     <li className="onlineFriendList">
                    <div className="activeF"></div>
                  <img src="/Assets/A.jpg" className="onlineFriendImage" alt=""></img> 
                  <span className="onlineFriendName">Ankit</span> 
                </li>
                <hr></hr>
                <li className="onlineFriendList">
                <div className="activeF"></div>
                  <img src="/Assets/R.jpg" className="onlineFriendImage" alt=""></img> 
                  <span className="onlineFriendName"> Virat</span> 
                </li>
                <hr></hr>
                 <li className="onlineFriendList">
                 <div className="activeF"></div>
                  <img src="/Assets/CIGAR.jpg" className="onlineFriendImage" alt=""></img> 
                  <span className="onlineFriendName">Agrim</span> 
                </li>
                <hr></hr>
                <li className="onlineFriendList">
                <div className="activeF"></div>
                  <img src="/Assets/O.jpg" className="onlineFriendImage" alt=""></img> 
                  <span className="onlineFriendName">Akash</span> 
                </li>
             </ul>
           </div>
        </>
    )
  }
    
  return(
        <div className="Rightbarcss">
         <div className="rightbarWrapper">
      
           {User ? <PRO></PRO> : <HOM></HOM>}
        
           </div>
        
        </div>
        
     )
}