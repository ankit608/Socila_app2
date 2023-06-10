
const MessageRoutes = require("express").Router();
const Messages = require("../Model/Message")
const  Conversation = require("../Model/Conversation");
const Message = require("../Model/Message");


MessageRoutes.put("/", async (req,res) =>{
     console.log("hello")
    const newConversation = new Conversation({

        members:[req.body.Senderid,req.body.Recieverid]
    })


     try{

        const response  = await newConversation.save(newConversation)
        res.send(response)
     }
     catch(error){
        res.send("Cannot start")
     }
  

})

MessageRoutes.get("/:userid",async (req,res)=>{

    const AllConversation = await Conversation.find({members:{$in:[req.params.userid]}})

    res.status(200).json(AllConversation)

})

MessageRoutes.post("/",async (req,res)=>{
  console.log("hiiii")
    const newMessage = new Messages({

        conversationId: req.body.conversationId,
          
          SenderID: req.body.SenderID,
        
          Text: req.body.Text
    })

    const response = await newMessage.save()
    res.send(response)

})



MessageRoutes.get("/conver/:conversationId",async (req,res)=>{
     try{
        console.log("conversation",req.params.conversationId)
        const messages = await Messages.find({conversationId:req.params.conversationId})
        res.status(200).json(messages)
     }catch(error){
        
        res.status(500).json("Not found")
     }
    

    
})

module.exports = MessageRoutes