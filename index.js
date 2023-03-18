import express from 'express';
import cors from 'cors';
import calculatorRouter from "./routes/calculator.js"
import todoRouter from "./routes/todo.js"

const app=express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
   res.send("WELCOME TO DIGIKULL")
})

app.use("/calculator",calculatorRouter)
app.use("/todo",todoRouter)


app.listen(PORT, () => {
    console.log(`server connected to ${PORT}`)
})











// const express = require('express');
// const bodyParser = require('body-parser')

// const app = express();

// app.use(bodyParser.json())

// app.get('/digikull',function(req,res){
//    res.send("<h1>DIGIKULL</h1>")
// })

// app.get('/calculator', function(req,res){
//    res.send("calculator")
// })
   
// app.post('/calculator',function(req,res){
//    let value;
//    var x = 100;
//    // console.log("x"+req.body.value);

//     res.send("x" + req.body.value)
// })

// app.listen(4000,()=>{
//    console.log("server connected to port 4k");
// })