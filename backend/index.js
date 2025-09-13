const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 5000;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');
app.get('/',(req,res)=>{
    res.send('Hello Nitin')
});
app.use(cors());
app.use(bodyParser.json());//taking json body from cliet side
app.use('/tasks',TaskRouter);
app.listen(PORT,()=>{
    console.log(`server started at localhost:${PORT}`)
})