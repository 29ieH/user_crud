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
                });
        })
    }
    function findOne(req,res){
        const userid = req.params.id;
        console.log(userid)
        return User.findOne({id:userid}).then(user=>{
            console.log(user)
            if(!user) return res.status(404).json({
                succes:false,
                message: 'User not found'
            });
            res.status(200).render('viewuser',{users:user})
        }).catch(error => {
            console.error(error);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
    })
    }
module.exports = {createUser,findAllUser,findOne}