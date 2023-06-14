import './topbar.css'
import {Search} from '@material-ui/icons'
import { Person ,Chat,Notifications} from '@material-ui/icons'
import { useContext, useRef, useState as usestate } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../Context/AuthContext'
 export default function Topbar(){
  
    const [url,seturl] = usestate("")
   const Search_user = useRef()
  const {user} = useContext(Authcontext)
  

    return(
<div className='topbarContainer'>
  <div className='topbarLeft'> 
   <Link to="/" style={{textDecoration:"none"}}>
   <span className='Logo'> AnkitSocial</span>
   </Link>
   <Link to = "/Chat">
    Chat
   </Link>
   
  </div>
  <div className='Center'>

    <div className=' Searchbar'>
       <Link to = {"/profile/"+url}>
       <Search className='SearchIcon'/>
       </Link>
       
       
        <input placeholder=' Search for friend, post or video' ref={Search_user} className='searchInput' onChange={(e)=>{
          seturl(Search_user.current.value)
          console.log(url)
          console.log("hello world")
        }}></input>
    </div>
  </div>
  <div className='topbarRight'>
     <div className='topbarLinks'>
      <span className='topbarLink'>HomePage</span>
      <span className='topbarLink'>TimeLine</span>

     </div>
     <div className='TopbarIcons'>
      <div className='topbarIconItem'>
        <Person></Person>
         <span className='topbarIconBadge'>1</span>
      </div>
      <div className='topbarIconItem'>
        <Chat></Chat>
         <span className='topbarIconBadge'>1</span>
      </div>
      <div className='topbarIconItem'>
          <Notifications></Notifications>
         <span className='topbarIconBadge'>1</span>
      </div>
     </div>
    <Link to= {`/profile/${user.User}`}> 
    <img src={user.profilepic} alt='' className='topbarImage'></img>
    </Link>
    
  </div>
</div>

    )
}

