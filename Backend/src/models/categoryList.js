const mongoose=require('mongoose')

const CategorySchema = new mongoose.Schema({
    name:String,
    type:String
})

const CategoryList = mongoose.model('CategoryList',CategorySchema)

module.exports=CategoryList