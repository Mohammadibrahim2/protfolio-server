const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const port=process.env.PORT || 5000
const aboutproject=require("./projects.json")

const courses=require("./projects.json");



   app.get("/workdetails/:id", (req,res)=>{
    const id =req.params.id
    const details=aboutproject.find(num=>num.id===id)
          
            res.send(details)
            })

  

app.get("/allprojects",(req,res)=>{
const projects=aboutproject
    res.send(projects)
})
app.listen(port,()=>{
    console.log("port-5000",port)
})

