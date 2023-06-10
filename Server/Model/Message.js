const { default: mongoose } = require("mongoose")

const MessagesSchema = new mongoose.Schema({

  conversationId:{
    type: String
  },
  
  SenderID:{
    type:String
  },

  Text:{
   type:String
  },
        

     
}, {timestamps:true})


module.exports = mongoose.model("Messages",MessagesSchema)