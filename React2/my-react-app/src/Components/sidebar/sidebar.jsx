import { Button } from "@material-ui/core"
import "./sidebar.css"
import { RssFeed,HelpOutline,WorkOutline,Event,School,MailOutlineOutlined, BookmarkOutlined,PlayArrowRounded,Group } from "@material-ui/icons"

export default function Sidebar(){

    return(

        <div className="Slidebarcss">
            <div className="sidebarWrapper">

              <ul className="sidebarList">
                 <li className="sidebarListItem">
                   <RssFeed className=" sidebarIcon"></RssFeed>
                   <span className="sidebarListitemText">Feed</span>
                 </li>
                 <li className="sidebarListItem">
                   <HelpOutline className="sidebarIcon"></HelpOutline>
                   <span className="sidebarListitemText">HelpOutline</span>
                 </li>
                 <li className="sidebarListItem">
                   <WorkOutline className="sidebarIcon"></WorkOutline>
                   <span className="sidebarListitemText">WorkOutline</span>
                 </li>
                 <li className="sidebarListItem">
                   <Event className=" sidebarIcon"></Event>
                   <span className="sidebarListitemText">Event</span>
                 </li>
                 <li className="sidebarListItem">
                   <School className=" sidebarIcon"></School>
                   <span className="sidebarListitemText">Courses</span>
                 </li>
                 <li className="sidebarListItem">
                   <PlayArrowRounded className=" sidebarIcon"></PlayArrowRounded>
                   <span className="sidebarListitemText">video</span>
                 </li>
                 <li className="sidebarListItem">
                   <BookmarkOutlined className=" sidebarIcon"></BookmarkOutlined>
                   <span className="sidebarListitemText">Bookmark</span>
                 </li>
                 <li className="sidebarListItem">
                   <MailOutlineOutlined className=" sidebarIcon"></MailOutlineOutlined>
                   <span className="sidebarListitemText">Messages</span>

                 </li>

                 <li className="sidebarListItem">
                   <Group className=" sidebarIcon"></Group>
                   <span className="sidebarListitemText">Group</span>

                 </li>


                </ul>    
             <div className="Button_show"> 
             <Button variant="contained" color="primary" >Show more</Button>
             </div>
             <hr></hr>

             <ul className="sidebarFriendList">
                <li className="sidebarFriend">
        <img className="sidebarFriendImage" src="/Assets/a-logo.png" alt =" " ></img>
                    <span className="sidebarFriendName">Ankit Sahu</span>
                    <div className="Active"></div>
                    
                </li>
                
                <li className="sidebarFriend">
        <img className="sidebarFriendImage" src="/Assets/a-logo.png" alt =" " ></img>
                    <span className="sidebarFriendName">Ankit Sahu</span>
                    <div className="Active"></div>
                    
                </li>
                
                <li className="sidebarFriend">
        <img className="sidebarFriendImage" src="/Assets/a-logo.png" alt =" " ></img>
                    <span className="sidebarFriendName">Ankit Sahu</span>
                    <div className="Active"></div>
                    
                </li>
                
                <li className="sidebarFriend">
        <img className="sidebarFriendImage" src="/Assets/a-logo.png" alt =" " ></img>
                    <span className="sidebarFriendName">Ankit Sahu</span>
                    <div className="Active"></div>
                    
                </li>
                <li className="sidebarFriend">
        <img className="sidebarFriendImage" src="/Assets/a-logo.png" alt =" " ></img>
                    <span className="sidebarFriendName">Ankit Sahu</span>
                    <div className="Active"></div>
                    
                </li>
                <li className="sidebarFriend">
        <img className="sidebarFriendImage" src="/Assets/a-logo.png" alt =" " ></img>
                    <span className="sidebarFriendName">Ankit Sahu</span>
                    <div className="Active"></div>
                    
                </li>
             </ul>
            </div>
        </div>
    )
}