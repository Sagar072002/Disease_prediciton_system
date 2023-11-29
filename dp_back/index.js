const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const users = require('./routes/users')
const app = express()


mongoose
    .connect('mongodb://localhost:27017/DisPred')
    .then(()=>{ console.log('Connected to MongoDB...'); })
    .catch((err) => console.error("Could not connect to mongoDB...") );

app.use(cors())
app.use(express.json())
app.use('/api/users', users);

const port = 3000;

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}...`);
})