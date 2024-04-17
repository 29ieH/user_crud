const mongoose = require('mongoose')
const userSchemal = new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
    }
)
const User = mongoose.model('users',userSchemal)
module.exports = {User}