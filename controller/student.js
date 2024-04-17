const {Student} = require('../model/student.js')
 function createStudent(req,res){
    const newStudent = new Student({
        student_id: req.body.student_id,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        grades: req.body.grades
    })
    return newStudent.save({wtimeout: 20000}).then((data) => {return res.status(201).json({
        success:true,
        message: 'New student created successfully',
        student: newStudent
    }); })
    .catch((error) => {
        console.log(error);
        res.status(500).json({
            success:false,
            message: 'Server error. Please try again.',
            error:error.message
        })
    })
}
module.exports = {createStudent}