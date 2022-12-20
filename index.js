const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();

const port = 6500;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, ()=> console.log(`Server is running on ${port}`));