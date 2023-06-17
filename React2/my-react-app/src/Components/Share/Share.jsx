import { useContext as UseContext, useRef as UseRef, useState as UseState} from "react"
import "./Share.css"
import { PermMedia,EmojiEmotions ,Telegram, Message, Cancel} from "@material-ui/icons"
import { Authcontext } from "../../Context/AuthContext"
import axios from "axios"


export default function Share(){
const {user} = UseContext(Authcontext)
const[file,setfile]= UseState()
const input = UseRef()
const desc = UseRef()
const sharehandler =async (e) =>{
  e.preventDefault()

  console.log("file", file)
  const newPost = {
      UserId :user._id,
      desc: desc.current.value,
      img: null
   }

   if(file){
    const  data = new FormData()
    const filename = Date.now()+file.name
    data.append("file",file)
   data.append("filename",filename)
   data.append("ANkit","hello")
    
    console.log(data)
    

    try {
    const res = await axios.post("http://18.204.18.253:3001/upload",data, { headers: {'Content-Type': 'multipart/form-data'}})
      console.log("response",res)
       newPost.img = res.data
       
    } catch(error){
     console.log(error)
    }

   }



  try{
 
   if(file){
      const res = await axios.post("http://18.204.18.253:3001/service/Posts/",newPost)
   }
  

  }
  catch(error){
    
     console.log(error)
  }
 


   setfile(null)
}

    return(
        <div className="shareWrapper">
        <div className="shareTop">
        <div className="shareTopcontainer">
        <img className="shareProfileimg" src= {user.profilepic} alt=""/> 
        <input placeholder={`What's in your mind ${user.User}` } className="shareInput" ref={desc}></input>
          
        </div>
         </div>
           <hr className="sharehr"></hr>
           {file && (
            <div className="shareImagecontainer">
               <img className="shareimage" src={URL.createObjectURL(file)}  style={{width:"100%",height:"100%px"}}></img>
               <Cancel className="SharecancleImage" onClick={()=>{setfile(null)}}></Cancel>
            </div>
           )}
        <form className="shareBottom" onSubmit={sharehandler} encType="multipart/formdata">

        <div className="shareOptions">
             <div className=" shareoption">
                <span className="shareoptionText" >Share</span>
                <Telegram className="shareTelegram"></Telegram>
             </div>
             <div className=" shareoption">
                <span className="shareoptionText" >Like</span>
                <EmojiEmotions className="shareEmoji"></EmojiEmotions>
             </div>
             <label htmlFor = "file1" className=" shareoption">
                <span  className="shareoptionText">photo/video</span>
                <PermMedia className="shareIcon"></PermMedia>
                <input type="file" style={{display:"none"}}  ref={input} id = "file1" accept="image/*" onChange={(e)=>{
                  setfile(e.target.files[0])
                }}></input>
             </label>
             <div className=" shareoption">
                <span  className="shareoptionText">Comment</span>
                <Message className="shareMessage"></Message>
             </div>
             <div className="shareButton">
             <button className="shareButtonx"  type="submit" > Share</button>
             </div>
             
             
             
            </div>    
   
        </form>
        </div>
    )
}