const mongoose = require('mongoose')

const studentSchemal = new mongoose.Schema(
    {
        student_id:{
            type:Number,
            required:true
        },
        name:{
            type:String
            ,required:true
        },
        age:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        grades:{
            physics:{
                type:Number,
                required:true
            },
            math:{
                type:Number,
                required:true
            },
            chemistry:{
                type:Number,
                required:true
            }
        }
    }
)
const Student = mongoose.model('students',studentSchemal)
module.exports = {Student}