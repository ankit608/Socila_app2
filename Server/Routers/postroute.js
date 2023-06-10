const express = require("express")
const PostSchema = require("../Model/Post")
const Routers = require("express").Router()
const schema = require("../Model/Modal")
const Post = require("../Model/Post")

Routers.post("/",async(req,res)=>{

    console.log(req.body)

    const a = req.body.UserId
    console.log(a)
 const Post = new PostSchema(req.body)
 try{
    const savedpost =  await Post.save()
    res.status(200).json("successful")
 }catch(error){

      res.status(500).json(error)
 }

}) 


Routers.put("/:id",async(req,res)=>{
    try{

        console.log("hello")
        const postinfo = await PostSchema.findById(req.params.id)
         //const userinfo = await schema.findById(postinfo.UserId)
          
    
         if(postinfo.UserId!== req.body.UserId){
            
            res.status(200).json("cannot update others post")
            
         } 
         else{
    
              postinfo.updateOne({$set:req.body})
              res.status(200).json("post been updated")
         }
    
      }catch(error){
    
          res.status(200).json("post id does not exits")
      }
    
    }
)

Routers.delete("/:id",async (req,res)=>{

  try{

    
    const postinfo = await PostSchema.findById(req.params.id)
     //const userinfo = await schema.findById(postinfo.UserId)
      

     if(postinfo.UserId!== req.body.UserId){
        
        res.status(200).json("cannot delted others post")
        
     } 
     else{

          postinfo.deleteOne({_id: req.params.id})
          res.status(200).json("post been deleted")
     }

  }catch(error){

      res.status(200).json("post id does not exits")
  }

})


Routers.put("/:id/likes",async (req,res)=>{

try{
   console.log(req.params.id)
  const likes = await PostSchema.findById(req.params.id)
  
   console.log(likes.likes)

   
  if(likes.likes.includes(req.body.User_Id)){
    
    await likes.updateOne({$pull: { likes: req.body.User_Id}})
    res.status(200).json("ydisliked the post")
  }else{

  likes.likes.push(req.body.User_Id)
  

    
    await likes.updateOne({$push: { likes: req.body.User_Id}})
    res.status(200).json("post has been liked")
  }

}
catch(error){
    console.log(error)
}

})


Routers.get("/:id", async(req,res)=>{
    
  
    try{

    const post = await PostSchema.findById(req.params.id)
    console.log()
    res.status(200).json(post)

  }catch(error){
      
    console.log(error)
    res.status(500).json("not found...")

  }
   


})
Routers.get("/timeline/:id",async (req,res)=>{
    
    try{
        console.log(req.params.id)
        const currentuser = await schema.findById(req.params.id)
        console.log(currentuser)
        const userposts = await  PostSchema.find({UserId:req.params.id})
        console.log(userposts)
       const friendposts =  await Promise.all (
        currentuser.following.map((friendId)=>{
            PostSchema.find({UserId:friendId})
        })
       )
       
    

    res.status(200).json(userposts.concat(...friendposts))
    }catch(error){

         res.status(500).json(error)
    }
})

Routers.get("/profile/:id",async (req,res)=>{
      console.log(req.params.id)

    const posts = await PostSchema.find({UserId:req.params.id})
    
    res.status(200).json(posts)


})


module.exports = Routers