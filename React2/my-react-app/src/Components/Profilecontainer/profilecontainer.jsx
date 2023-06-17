import "./profilecontainer.css"
import Feed from "../feed/feed"
import Rightbar from "../rightbar/rightbar"
import { useEffect, useState as usestate,useRef as useref} from "react"
import axios from "axios"
export default function ProfileContainer({User}){
 console.log("USER:@",User.profilepic)

 const[propic,setpropic]= usestate()
 
 useEffect(()=>{
    setpropic(User.profilepic)
 },[User])
 const[file,setfile] = usestate()

 
 const input = useref()
 const profileHandler = async ()=>{

    if(file){
        const data = new FormData()
     const filename = Date.now+file.name
     data.append("file",file)
     data.append("filename",filename)

     try {
        const a =  await axios.post("http://18.204.18.253:3001/upload/profile",data, { headers: {'Content-Type': 'multipart/form-data'}})
                   
                  await axios.put("http://18.204.18.253:3001/service/update/profile",{"user_id":User._id,"profilepic":a.data})
       setpropic(a.data)
    
                } catch (error) {
        console.log(error)
     }

    }
    
 
 }
    return(
  
        <div className="profilecontainerWrapper">
       
       <div className="ImageContainer">
      <label htmlFor="file1">
     
     <div className="Profileimg">
     <img className=" profile_pic" src={User?propic:""} alt="" width={100} height={100} >
    
    </img>
    <button className="shareButtonx" onClick={profileHandler} > Change_Profile</button>
     </div>
      
        <input type="file" style={{display:"none"}}  ref={input} id = "file1" accept="image/*" onChange={(e)=>{
                  setfile(e.target.files[0])
                }}></input>
      </label>
      
        
       <img className= "Image" src={User?User.coverpicture:""} alt=""></img>
       </div>
       <div className="profileText">
        <p><b>{User?User.User:""}</b></p>
        <p>{User.desc}</p>
       </div>
       <div className="Profilefeedandrightbar">
       <Feed username={User}></Feed>
        <Rightbar User={User}></Rightbar>
       </div>
       

         
        </div>

    )
}

//