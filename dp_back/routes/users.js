const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.send("Sending all users...");
})

router.post('/',(req, res, next)=>{
    res.send("User added...");
})

module.exports = router;