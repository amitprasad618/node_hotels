var fs = require('fs');
var os = require('os');
const express = require('express');
const app = express();
require('dotenv').config();
const passport = require('./auth.js');

var demo = require('./demo.js');
var _ = require('lodash');
const db = require('./db.js');


const bodyParser = require('body-parser');
app.use(bodyParser.json());  // req.body

// Middleware
const logRequest = (req, res, next) =>{
    console.log(`[${new Date().toLocaleString()}] Request to URL: ${req.originalUrl}`);
    next(); //move to next phase
}

app.use(logRequest);

app.use(passport.initialize());


// function add(a,b){
//     return a+b;
// }


// var ans = add(5,16);

// console.log(ans);






// function callback(){
//     console.log("This is callback function!!");
// }

// var fun1 = (a,b,cb)=>{
//     console.log(`Sum is ${a+b}`);
//     cb();
// }

// fun1(12,13,callback);







// var fun2 = (a,b,cb)=>{
//     console.log(`Sum is ${a+b}`);
//     cb();
// }

// fun1(100,100,()=>{
//     console.log("Arrow function!!");
// });



// var user = os.userInfo();
// console.log(user);
// console.log("username is: ", user.username);

// fs.appendFile('greeting.txt',"Hi " + user.username + " \n", ()=>{
//     console.log("file is created!!");
// })




// var agee = demo.age;
// var add = demo.addNum(10,30);
// console.log("age from Demo file:", agee);
// console.log("add Number from Demo file:", add);

// var arr = ["amit", "amit","amit",2,2,2,3,4,5,5,6,6,6,"prasad",false];

// var filter = _.uniq(arr);
// console.log(filter);

// console.log(_.isString(true));



app.get('/', (req,res)=>{
    res.send("Welcome to My Hotel!!... What can I help you..??");
});

const localAuthMiddleware = passport.authenticate('local', {session: false});
const personRoutes = require('./Routes/personRoutes.js');
app.use('/person', localAuthMiddleware, personRoutes);

const menuItemRoutes = require('./Routes/taskRoutes.js');


app.use('/menuItem', menuItemRoutes);





const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is running!!");
})