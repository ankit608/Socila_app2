const io = require("socket.io")(8890,{

    cors:{
        origin: "http://localhost:3000"
    }
});

let users =[]

const removeUser = (socketid) =>{
   
    users = users.filter((user)=>user.socketid!==socketid)

}


const getUser = (userid) =>{
 
     console.log(users,"usersss")
     const a =  users.find(user => user.userid == userid)
     console.log("aaaa",a)

     return a
}

const Adduser = (userid,socketid)=>{
   
    if(users.some(u=>u.userid===userid)){
    
      users = users.filter((user)=> user.userid!==userid)

      users.push({userid,socketid})
      console.log(users,"users")

    }else{

        users.push({userid,socketid})
    }
    
}


io.on('connection',(socket)=>{



    console.log("A user Connected")
    socket.on("AddUser",(userid)=>{
        console.log(socket.id,userid)
        console.log(users)
        Adduser(userid,socket.id)
    })
    //takeUserId and SockedId from user


   socket.on("sendMessage",({SenderId,recieverid,Text})=>{
         console.log("hiiiiiiifdfndkfndk",SenderId,recieverid,Text)
        const reciever= getUser(recieverid)
        console.log(reciever)

      if(reciever){
        io.to(reciever.socketid).emit("getMessage",{Text,SenderId})
      }
       
     
   })

      

    socket.on("disconnect", ()=>{
        console.log("a user disconnected...")
        removeUser(socket.id)
    })

})