const express = require("express");
const { json } = require("express/lib/response");
const  app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const Router = require("./Routers/Router")
const Postroute = require("./Routers/postroute")
const cors  = require("cors")
const multer = require("multer")
const path = require("path")
const s3 = require("@aws-sdk/client-s3")
const  multers3 = require("multer-s3")
const fs = require("fs")
const azurestorage = require("azure-storage")
 require('dotenv').config()
 const axios = require("axios")
 const aws = require("aws-sdk");
const { rejects } = require("assert");
const userschema = require("./Model/Modal")
const Post = require("./Model/Post")
const MessageRoutes = require("./Routers/MessageRoute")



 
 
 app.use(express.urlencoded({extended:true}))

 
const awsconfig = {
    accessKeyId:  process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
        region:process.env.REGION
}
const s1 = new aws.S3(awsconfig)

 let upload = multer({
    limits: 1024*1024*5,
    filefilter: function(req,file,done){
        if(file.mimetype=== 'image/jpg'|| file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg'){
            done(null,true)
        }else{
            done("not supported",false)
        }
    }
 })

 const uploadToS3 = async (filedata)=>{
 
   
    return new Promise((rejects,resolve)=>{
     const params = { 
            Bucket:'social-media-app-2',
            Key: `${Date.now().toString()}.jpg`,
            Body:filedata

        }
        

        s1.upload(params,(data,err)=>{
            if(data){
                console.log(data)
                resolve(err)
            }else{

                console.log(data)
             rejects(err)
            }
            
        })
    })
 }

app.use(cors())
mongoose.connect("mongodb+srv://ankit:Ankit123@NodeExpresprojects.ppv1c.mongodb.net/AnkitSocial?retryWrites=true&w=majority").then((data)=>{
    
},(data)=>{
    console.log("connected")
})


app.use("/images",express.static(path.join(__dirname,"public/images")))



app.post("/upload/profile",upload.single('file'),async (req,res)=>{

    try{
        if(req.file){
            const a = await uploadToS3(req.file.buffer)
           
            console.log("location",a.Location)
            res.status(200).json(a.Location)
     }else{
        
        res.status.json("file not exist")
     }
    }catch(error){
          
        console.log(error)
    
    }

})


app.post("/upload", upload.single('file'),(async(req,res)=>{

    const a = await Post.deleteMany({img: null})
    console.log( a.deletedCount)

try{
    if(req.file){
        const a = await uploadToS3(req.file.buffer)
       
        console.log("location",a.Location)
        res.status(200).json(a.Location)
 }else{
    
    res.status.json("file not exist")
 }
}catch(error){
      
    console.log(error)

}

    
}))
    
 




/*try{
        res.status(200).json("upload successfully")

    }catch(error){

           res.send(404).json("error")
    }*/

app.use(express.json())

app.listen(8080,()=>{
    console.log("hey");
})

app.get("/",(req,res)=>{

    res.send("hello")
})

app.use("/service/Conversation",MessageRoutes)
app.use("/service",Router)
app.use("/service/Posts",Postroute)

/*.then((result)=>{
    return res.json({
        msg:"successfull",
        imageurl: result.Location
     }).catch(error=>{console.log(error)})
}) */