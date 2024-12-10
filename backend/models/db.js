const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN || 'mongodb://localhost:27017/express-mongo';

mongoose.connect(mongo_url)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
})