const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const users = require('./routes/users')
const admin = require('./routes/admin')
const doctor = require('./routes/doctor')
const review = require('./routes/review')
const booking = require('./routes/booking')
const app = express()


mongoose
    .connect('mongodb://0.0.0.0:27017/DisPred')
    .then(()=>{ console.log('Connected to MongoDB...'); })
    .catch((err) => console.error("Could not connect to mongoDB...") );

app.use(cors())
app.use(express.json())
app.use('/api/users', users);
app.use('/api/admin', admin);
app.use('/api/doctor', doctor);
app.use('/api/review', review);
app.use('/api/booking', booking);

const port = 3000;

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}...`);
})