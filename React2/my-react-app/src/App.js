 
 import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Profile  from "./pages/profile/profile"
import Register from "./pages/Register/Register"
import { BrowserRouter as Router
 , Switch , Route ,Routes, Navigate}from "react-router-dom"
import React, { useContext } from "react"
import { Authcontext } from "./Context/AuthContext"
import { redirect } from "react-router-dom"
import Messenger from "./pages/Messenger/Messenger"



function App(){

    const {user} =  useContext(Authcontext)
    return(
     <Router>
      <Routes>
      <Route path="/login" element={user? <Navigate to ="/"/>:<Login></Login>}></Route>
      <Route path="/" element={ user?<Home></Home>:<Navigate to ="/login"/>}></Route>
      <Route path="/profile/:username" element={user?<Profile></Profile>:<Navigate to ="/login"/>}></Route>
      <Route path="/register" element={<Register></Register>}> </Route>
     <Route path = "/Chat" element = { user?<Messenger></Messenger>: <Navigate to ="/login"></Navigate>}></Route>
      </Routes>
        
    
     </Router>
    
         
   
    )

}

export default App