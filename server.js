const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});