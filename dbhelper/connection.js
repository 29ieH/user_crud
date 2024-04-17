const mongoose = require('mongoose')
const dbConnection = async() => {
  try {
    await mongoose.connect('mongodb://localhost:27017/js_core',{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Kết nối cơ sở dữ liệu thành công')
  } catch (error) {
    console.error('Kết nối cơ sở dữ liệu thất bại'+error)
  }
};
module.exports = {dbConnection};