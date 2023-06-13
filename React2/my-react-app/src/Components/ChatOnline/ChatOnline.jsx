import "./ChatOnline.css"
export default function ChatOnline({chatHandler}){
    return(

        <div className="Chat_menu_friend">
       <div className="friend_image_container">
        <div className="friend_status"></div>
    <img className="friend_image" src="./Assets/CIGAR.jpg" onClick={chatHandler}></img>
       </div>
       
       <span>Ankit Sahu</span> 
     </div>
    )
}