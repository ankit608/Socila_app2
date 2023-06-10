const mongoose1 = require("mongoose");

const schema = new mongoose1.Schema({
    Email:{
        type: String,
        unique:true
    

    },
    User:{
        type:String,
        unique:true
    },

    password:{
        type: String
        
    },
   
    Isadmin:{
      type:Boolean,
      default: false

    },

    coverpicture:{
        type: String,
        default: "/Assets/R.jpg"

    },
    profilepic:{
     type:String,

    },

    following:{
        type: Array,
        default: []
    },

    followers:{
        type:Array,
        default: []
    },

   Name:{
  type: String,
   default: "hello"
   },

   City:{
           type:String,
           default: "delhi"
   },

   Relationship:{
     type:String,
     default:"Single"
   },

   From:{
       type:String,
       default: "India"
   }
    

}, {timestamps:true})

module.exports = mongoose1.model("User",schema)