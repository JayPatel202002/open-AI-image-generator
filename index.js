const express = require('express');
const dotenv = require('dotenv').config();

const port = 6000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, ()=> console.log(`Server is running on ${port}`));