const mongoose = require('mongoose');

require('dotenv').config(); 

// mongoose.connect("mongodb://127.0.0.1:27017/scatch")
mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(function() { 
        console.log("db connected");
    })
    .catch(function(err) { 
        console.log(err);
    });

module.exports = mongoose.connection; 
