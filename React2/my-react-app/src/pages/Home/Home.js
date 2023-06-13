import React from 'react'
import Topbar from '../../Components/TopBar'
import Sidebar from '../../Components/sidebar/sidebar'
import Feed from '../../Components/feed/feed'
import Rightbar from '../../Components/rightbar/rightbar'
import "./Home.css"
import { Authcontext } from "../../Context/AuthContext"
import  {useContext as usecontext} from "react"

export default function Home(){
  
    const {user} = usecontext(Authcontext)
      console.log("helooooo",user)
    return(
        <div>
           <Topbar></Topbar>
        
           <div className='homeContainer'>
            <Sidebar> </Sidebar>
            <Feed USERNAME></Feed>
            <Rightbar></Rightbar>

           </div>
           
        </div>
    )
}