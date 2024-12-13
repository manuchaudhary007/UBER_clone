const mongoose = require('mongoose');


function connectToDb() {
    const dbUri = process.env.Db_CONNECT || 'mongodb://localhost:27017/mydatabase';
    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { 
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log('Error connecting to mongodb:',err)
        process.exit(1)
    });
}

module.exports = connectToDb;