const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/users')
const app = express()


mongoose
    .connect('mongodb://localhost:27017/DisPred')
    .then(()=>{ console.log('Connected to MongoDB...'); })
    .catch((err) => console.error("Could not connect to mongoDB...") );


app.use(express.json())
app.use('/api/users', users);
app.use((req, res, next)=>{
    const err= new Error("Not found");
    err.status=404;
    next(err);
})
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message    
        }
    })
})


const port = 3000;

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}...`);
})