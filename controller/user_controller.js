const {User} = require('../model/user_model.js')
 function createUser(req,res){
    const newUser = new User({
    })
    return newStudent.save({wtimeout: 20000}).then((data) => {return res.status(201).json({
        success:true,
        message: 'New student created successfully',
        user: newUser
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
    function findAllUser(req,res){
        return User.find().then(user => {
            console.log(user)
            res.status(200).render('user',{users:user})})
            .catch(error => {
                console.error(error);
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                    error: error.message,
                    path: path
                });
        })
    }
module.exports = {createUser,findAllUser}