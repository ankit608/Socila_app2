const routes = require("express").Router();
const { route } = require("express/lib/router");
const userschema = require("../Model/Modal")
const bcyp = require("bcrypt")
routes.get("/register",async(req,res)=>{

     
  res.send("hello");
})

routes.post("/register",async (req,res)=>{
    
   //const salt =  await bcyp.genSalt(10)
  // const  hashed = await bcyp.hash(req.body.password,salt);

     console.log(req.body)

    const user = new userschema({
         Email: req.body.Email,
         User: req.body.User,
        password:  req.body.password,
        ProfilePicture: req.body.ProfilePicture,
        coverPicture: req.body.coverPicture,
        followers: req.body.followers,
        following: req.body.following,

    })

const a =  await user.save() 
try{
  console.log("succesfull")
  res.send("succesfull")
}catch{
 console.log(console.error())
}
})


//Login
routes.post("/login", async (req,res)=>{
 try{
   
    
   
    const pass =  await userschema.findOne({Email:req.body.email})
    
  // const check  =  //await bcyp.compare(req.body.password, pass.password)
    console.log(req.body)
    console.log(pass.password)
    

      if(pass.password === req.body.password){

         console.log("inside")
           
         res.status(200).json(pass)
      }else{

         res.status(500).json("not found")
      }

   
}catch(error){
        
         console.log(error)
         res.status(500).json("not found")
        }
    


})

// update users

routes.put("/:id",async(req,res)=>{
   

    if(req.body.id===req.params.id ){
        
        const c = await userschema.findById(req.body.id);
        
         console.log(c);
            userschema.findByIdAndUpdate(req.body.id,{ 
               $set: req.body
            })
        
         
           
         res.status(200).json("credentials updated");

    }else{
        return res.status(403).json("you can update only your account");
    }

})
routes.delete("/:id",async(req,res)=>{
   

   if(req.body.id ===req.params.id  ){
       
       const c =  await userschema.findById({_id:req.body.id});
        
       console.log(c);
           userschema.deleteOne(c).then((data)=>{
              res.send("Account has been deleted")
           })

       
        
          
        

   }else{
       return res.status(403).json("you can update only your account");
   }

})

routes.get("/",async(req,res)=>{
     
  console.log("helloooo.....")
   
    const userid = req.query.userid
    console.log(userid)
    const  username = req.query.username
   try{

      const c  = userid? await userschema.findById(userid):await userschema.findOne({User:username})
      console.log(c);
   

      c.password =null
      res.send(JSON.stringify(c));
     }catch(error){
      res.status(200).json("not found")
     }
     
       
   
})

routes.get("/:id/followers",async (req,res)=>{
   const a =[]
   console.log("iddddd",req.params.id)
    const user = await userschema.findById(req.params.id)
   let count = 0
    if(user.following.length!== 0){
      
      user.following.map((m)=>{
         

         userschema.findById(m).then((data)=>{
          
            count= count+1

            console.log(count,user.following.length)
           console.log("data",data)
           a.push(data)
           console.log(user.following.length)
           if(user.following.length===count){
             console.log("length",user.following.length,count)
             console.log("aaaa",a)
             res.status(200).json(a)
              
         }
          
           console.log("count..",count)
          
       })
       
    
      })
    }else{
       res.status(200).json(["hi"])
    }
  


})

routes.put("/:id/follow",async(req,res)=>{
  console.log(req.params.id);
  
  console.log(req.body)
if(req.params.id !== req.body.id){
  try{
   const user = await userschema.findById(req.params.id);
   
   console.log("hello")
   const currentuser = await userschema.findById(req.body.id)

   if(!user.followers.includes(req.body.id)){
        console.log("hello2")
        await user.updateOne({$push:{followers:req.body.id}})
        await currentuser.updateOne({$push:{following: req.params.id}})

        res.send("you started to follow");

   }else{
      console.log("hiiii")
      await user.updateOne({$pull:{followers:req.body.id}})
      await currentuser.updateOne({$pull:{following: req.params.id}})
      res.send("you unfollow the user")
   }
} catch(err){
       res.status(500).send(err);
   }
   


}else{

   res.status(200).send("you cannot follow yourself")
}

})




module.exports = routes;
