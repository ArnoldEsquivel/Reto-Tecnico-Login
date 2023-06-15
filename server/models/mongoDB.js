require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;