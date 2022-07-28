const express = require("express");
const app=express();

const middleware1 = (req,res,next) => {
    res.send("middleware one");
    next();
}

const middleware2 = (req,res,next) => {
    res.send("middleware two");
    next();
}

app.use(middleware2);

app.get("/page1",middleware1, (req,res)=>{
    res.send("for page1 both middleware1 and middleware2");
})
app.get("/page2", (req,res)=>{
    res.send("page2 middleware2 will apply");
})
app.get("/page3", (req,res)=>{
    res.send("page3 middleware2 will apply");
})
app.get("/page4",middleware1, (req,res)=>{
    res.send("for page4 both middleware1 and middleware2");
})
app.get("/page5", (req,res)=>{
    res.send("page5 middleware2 will apply");
})

app.listen(9090,()=>{
    console.log("server running");
})