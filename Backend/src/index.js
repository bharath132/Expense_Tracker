const express=require('express')
const cors = require('cors')
const app = express()
const mongoose= require('mongoose')

app.use(express.json());

const corsOptions = {
  origin: [
    "https://expense-tracker-frontend-one-sooty.vercel.app", // Frontend URL
    "http://localhost:3000", // Allow localhost for development
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
const Transcationlist = require('./models/list');
const CategoryList = require('./models/categoryList');
mongoose.connect('mongodb+srv://chidambaramb2:wT2Y8atoYKQWdz6K@expense-tracker.xkaku5j.mongodb.net/expense_tracker?retryWrites=true&w=majority&appName=expense-tracker')


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
  console.log(req.body)
  const {name,desc,amount,type}=req.body.name
  // res.json(req.body.name)
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
app.get('/getCategoriryList',(req,res)=>{
  CategoryList.find({}).then((result)=>{
    // console.log(result)
    res.json(result)
  })
})
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
    console.log('server started on port 5000')
})