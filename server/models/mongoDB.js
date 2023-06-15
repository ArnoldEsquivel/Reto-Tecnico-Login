const mongoose = require('mongoose');
const uri = process.env.MONGODBATLAS_URI || 'mongodb://localhost:27017/RetoTecnico';

mongoose.set('strictQuery', false);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;