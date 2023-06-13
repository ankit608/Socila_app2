import "./profile.css"
import Sidebar from "../../Components/sidebar/sidebar"
import ProfileContainer from "../../Components/Profilecontainer/profilecontainer"
import Topbar from "../../Components/TopBar"
import axios from "axios"
import { useEffect ,useState} from "react" 
import { useParams } from "react-router-dom"
 
export default  function Profile(){
 const[userData,setData]= useState({})
  
  const params = useParams()
  console.log("fsdfsdfsdfsdf",params)
  var st = `http://localhost:8080/service?username=${params.username}`
         
  useEffect(()=>{
     console.log("Againnnnn")
    const getuser= async()=>{
        
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
