const express=require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('HELLO WORLD')
})
app.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
app.listen(3000,()=>{
    console.log("listening")
})
