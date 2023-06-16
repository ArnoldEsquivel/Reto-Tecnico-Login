const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoDB = require('./server/models/mongoDB');

//Routs Import
const user = require('./server/routes/user');

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user', user);

try {
    require('./server/models/mongoDB');
} catch (err) {
    console.log(err);
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});