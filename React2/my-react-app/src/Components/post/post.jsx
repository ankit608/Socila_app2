import "./post.css"
import { MoreVert,ThumbUp, FavoriteRounded} from "@material-ui/icons"
/*import UserData from "../../UserData"*/
import { useState,useEffect } from "react"
import axios from "axios"
import {format} from "timeago.js"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Authcontext } from "../../Context/AuthContext"
export default function Post(post){
     
    const {user} = useContext(Authcontext)
    const[userData,setData] = useState({});




           var st = `http://localhost:8080/service?userid=${post.data.UserId}`
           
         
          useEffect(()=>{
             
            const getuser= async()=>{
                
                const res = await axios.get(st)
                  setData(res.data)
            
            }

            getuser()
          },[post.data.UserId]) 
         
          
    
      

     const[like,setlike] = useState(post.data.likes.length);
      const[isliked,setisliked] = useState();
      
      useEffect(()=>{
        setisliked(post.data.likes.includes(user._id))
      },[])

      const likeHandler = ()=>{
        console.log(isliked)
       var a = post.data._id
        var sat = "http://localhost:8080/service/Posts/" + a+"/likes"
        
          axios.put(sat,{
            "User_Id": user._id

          }).then((data)=>{
            console.log(data)
          })
         
         setlike(isliked ? like-1: like+1)
         setisliked(!isliked)
      }


   return(
        <div className="post">
            <div className="postWrapper"> 
             <div className="postTop">
               <div className="postTopRight">
               <Link to = {`profile/${userData.User}`}>
               <img className="postImg" src= {userData.profilepic} alt=""/></Link>
              <span className="postName"> {userData.User}</span> 
              <span className="postDate"> {format(post.data.createdAt)}</span>
               </div>
               
               <div className="postTopLeft">
               <MoreVert className="postMorevert"></MoreVert>
               </div>
                          
              <span></span>
              </div>
             <div className="postCenter">
                <div className="postCenterTop">
                    <span>{post.data.desc}</span>
                </div>
                
                <img className="postCenterImg" src={post.data.img} alt=""></img>
            
             </div>
             <div className="postBottom">
                <div className="postBottomLeft">
    <ThumbUp className="postBottomIconThumb"  fontSize="small" onClick={likeHandler} > </ThumbUp>
                
                <FavoriteRounded className="postbBottomHeart" fontSize="small" onClick={likeHandler}></FavoriteRounded>               
                <span className="Likecounter"> {like} </span>
                <span className="postLikeText">  people liked it</span>
                </div>
                <div className="postBottomRight">
                 <span className="postBottomComment">Comments 90</span>   
                </div>
             </div>
             <hr className="postHR"></hr>
             <div className="postShareComment">
                <div className="postShareCommentShare">
                    <span>Share</span>
                </div>
                <div className="postShareCommentComment">
                    <span>Comment</span>
                </div>
             </div>
            </div> 
        </div> 
    )
}







