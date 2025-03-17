const express=require('express')
const cors = require('cors')
const app = express()
const mongoose= require('mongoose')

app.use(express.json());
app.use(cors());
const Transcationlist = require('./models/list');
const CategoryList = require('./models/categoryList');
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
app.put('/updateTranscationList',(req,res)=>{
  const {name,amount,desc,type,id}=req.body
  Transcationlist.updateOne({_id:new mongoose.Types.ObjectId(id)},{name,amount,desc,type}).then((updateList)=>{
    res.json(updateList)
  })
})
app.delete('/deleteTranscationList',(req,res)=>{
  const id=req.body
  Transcationlist.deleteOne({_id: new mongoose.Types.ObjectId(id)}).then((result)=>{
    res.json(result)
  })
})


// Category List APIs

app.post("/createCategoryList",(req,res)=>{
  const {name,type}=req.body
  CategoryList.create({name,type}).then((result)=>{
    res.json(result)
  })
})

app.put('/updateCategoryList',(req,res)=>{
  const {id,name,type}=req.body
  CategoryList.updateOne({_id:new mongoose.Types.ObjectId(id)},{anme,type}).then((result)=>{
    res.json(result)
  })
})
app.delete('/deleteCategoryList',(req,res)=>{
  const id=req.body
  CategoryList.deleteOne({_id:new mongoose.Types.ObjectId(id)})
})
app.listen(3000,()=>{
    console.log("listening")
})
