const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req,res)=>{
   res.send("Blog API Running");
});

let blogs=[];

app.post("/blogs",(req,res)=>{
   blogs.push(req.body);
   res.send("Blog created successfully");
});

app.get("/blogs",(req,res)=>{
   res.send(blogs);
});

app.put("/blogs/:id",(req,res)=>{
   blogs[req.params.id]=req.body;
   res.send("Blog updated successfully");
});

app.delete("/blogs/:id",(req,res)=>{
   blogs.splice(req.params.id,1);
   res.send("Blog deleted successfully");
});

app.listen(3000,()=>{
   console.log("Server Started");
});