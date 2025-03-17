const express=require('express')
const cors = require('cors')
const app = express()
const mongoose= require('mongoose')

app.use(express.json());
app.use(cors());
const Transcationlist = require('./models/list')
mongoose.connect('mongodb://127.0.0.1:27017/Expense_tracker')

app.get('/',(req,res)=>{
    res.send('HELLO WORLD')
})
app.post('/getTranscationList',(req,res)=>{
  Transcationlist.find({}).then((list)=>{
    if(list){
      res.send(list)
    }
    else{
      res.send("no")
    }
  });})
app.post('/createTranscationList',(req,res)=>{
  const {name,amount,desc,type}=req.body
  Transcationlist.create({name,desc,amount,type}).then((list)=>{
    res.json(list)
  })
})

app.listen(3000,()=>{
    console.log("listening")
})
