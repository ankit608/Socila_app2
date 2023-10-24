import "./profile.css"
import Sidebar from "../../Components/sidebar/sidebar"
import ProfileContainer from "../../Components/Profilecontainer/profilecontainer"
import Topbar from "../../Components/TopBar"
import axios from "axios"
import { useEffect ,useState} from "react" 
import { useParams } from "react-router-dom"
import { Authcontext } from "../../Context/AuthContext"
import { useContext } from "react"
 
export default  function Profile(){
 const[userData,setData]= useState({})
  const {IP} = useContext(Authcontext)
  console.log(IP,"Ippppppp");
  const params = useParams()
  console.log("fsdfsdfsdfsdf",params)
  var st = `${IP}3001/service?username=${params.username}`
  
         
  useEffect(()=>{
     console.log("Againnnnn")
    const getuser= async()=>{
        console.log(st);
        const res = await axios.get(st)
        setData(res.data)
      console.log("dataaaaaaaaaa",res.data)
    }

    getuser()
  },[params]) 


      return(
         <div> 
        <Topbar></Topbar>
        <div className=" profilePage"> 
         
         <Sidebar></Sidebar>
          <ProfileContainer User={userData}></ProfileContainer>

            
        </div>
        </div>
      )
}
