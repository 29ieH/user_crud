const express = require('express');
const path = require('path')
const app = express();
const port = 5050;
const bodyParser = require('body-parser');
const studentRoute = require('./route/student_route.js');
const userRoute = require('./route/user_route.js')
const logger = require('morgan')
const {dbConnection} = require('./dbhelper/connection.js')
dbConnection();
app.set('view engine','pug')
app.set('views',path.join(__dirname,'view'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'))
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.use('/', studentRoute,userRoute);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.listen(port, () => {
    console.log("Server is running in port: " + port);
});
