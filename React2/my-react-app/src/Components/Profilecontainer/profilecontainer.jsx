import "./profilecontainer.css"
import Feed from "../feed/feed"
import Rightbar from "../rightbar/rightbar"
export default function ProfileContainer({User}){
 console.log("USER:@",User)
    
    return(
  
        <div className="profilecontainerWrapper">
       
       <div className="ImageContainer">
        <img className="Profileimg" src={User?User.profilepic:""} alt=""></img>
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