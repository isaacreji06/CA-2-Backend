const express=require("express");
const app=express();
let loggedIn=[]
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("this is the backend")
})
const PORT=8080

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    if (!email){
        return res.status(404).json({message:"Email cannot be empty"})
    }
    if (!password){
        return res.status(404).json({message:"Password cannot be empty"})
    }
    if (!(email.includes('.') || email.includes("@"))){
        return res.status(404).json({message:"invalid email format"})
    }
    if (password.length<8){
        return res.status(404).json({message:"password length should be greater than 8 characters"})
    }
    loggedIn.push({
        email:email,
        password:password
    })
    console.log(loggedIn)
    return res.status(200).json({message:"successfully logged in" ,data:loggedIn})
})


app.listen(PORT,()=>{
    console.log(`the app is listening at http://localhost:${PORT}`)
})