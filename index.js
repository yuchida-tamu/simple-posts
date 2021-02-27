require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

require("./models/user");
require("./models/post");

// Test
app.get("/", (req, res)=>{
    // console.log(req);
    res.send("Hello World")
})


// User
app.get("/api/v1/user", (req, res)=>{

})

app.post("/api/v1/user/new", (req, res)=>{

})

app.get("/api/v1/user/:id", (req, res)=>{

})

app.delete("/api/v1/user/:id", (req, res)=>{

})

// Post
app.get("/api/v1/post", (req, res)=>{

})

app.post("/api/v1/post/new", (req, res)=>{

})

app.get("/api/v1/post/:id", (req, res)=>{

})

app.delete("/api/v1/post/:id", (req, res)=>{

})


// Auth
app.post("/api/v1/auth", (req, res)=>{

})

app.listen(port, ()=>{
    console.log("Server is running...", port)
})