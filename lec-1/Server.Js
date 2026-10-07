const express=require("express")
const app=express()

// req/res

app.listen(2000,()=>{


    console.log("server is running on port 2000")
})

app.get("/",(req,res)=>{

res.send("Hello world")

})


app.get("/about",(req,res)=>{

res.send("Hello about page")

})

app.get("/about/:id",(req,res)=>{

res.send("Hello about page"+req.params.id)

})


app.get("/services/web",(req,res)=>{

res.send("Hello web services")

})


app.get("/services/graphics",(req,res)=>{

res.send("Hello graphic services")

})



