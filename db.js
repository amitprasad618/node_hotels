const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL_LOCAL;
// const mongoURL = process.env.MONGODB_URL;

// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log("Connected MongoDB Successfully") })
.catch((err) => { 
    console.log("ERROR Found");
    console.error(error.message);
    process.exit(1); 
});

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("Database is Connected to MongoDB Server");
})

db.on('error', (err)=>{
    console.error("MongoDB connection error: ", err);
})

db.on('disconnection', ()=>{
    console.log("MongoDB Server is Disconnected");
})

module.exports = db;