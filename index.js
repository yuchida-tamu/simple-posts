require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// DBへの接続
// process.envで環境変数へのアクセス
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.on("open", () => {
    console.log("DB connected!!!");
  });


require("./models/user");
require("./models/post");

const User = mongoose.model("User");


// Test
app.get("/", (req, res)=>{
    // console.log(req);
    res.send("Hello World")
})


// User
app.get("/api/v1/user", async(req, res)=>{
    try{
        const users = await User.find(); // 全件検索
        // await 非同期処理が終わるまで待つ。
        // User.find()が終わるまで、他の処理を可能にする。
        // async と await　はセット！
        // User.find({username:uchida});  usernameがuchidaに一致するデータを検索
        console.log(users);
        res.status(200).json({
            data: users
        })
    } catch(error){
        res.status(500).json({
            error
        })
    }
})

app.post("/api/v1/user/new", async(req, res)=>{
    const user = new User({username: req.body.username, password: req.body.password});
    try{
        const result = await user.save();
        res.status(200).json({
            data: result
        })
    } catch(error){
        res.status(500).json({
            error
        })
    }
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