const express = require('express')
const mongoose = require('mongoose')
const UserDetails = require('../models/userDetails')

const router = new express.Router();

router.get('/userDetails', async(req, res) => {
    const userDetails = await UserDetails.find();
    res.json(userDetails);
})


router.post('/userDetails', async(req, res) => {
    const data = req.body;

    // need to fix the age issue in here

    let currentYear = new Date().getFullYear();
    console.log("Date is here " + data.date)
    let dob = data.date;
    dob = dob.split('-');
    let age = currentYear - dob[0];
    
    if(age < 18 || age > 65){
        //"allowed" is parameter to decide to take admission or not
        return res.json({"allowed" : 0 ,"message" : `you can't register since your age is not in criteria}`})
    }

    // unquie user validation
    const repeatedUserEmail = await UserDetails.find({email : data.email});
    if(repeatedUserEmail.length > 0){
        // frequent user 
        //if user wishes to update the data
        await UserDetails.updateOne({email: data.email}, 
            {$set:{contact: data.contact, batch: data.batch, address: data.address}})

    }else{
        //first time entry 
        await UserDetails.create({
            name: data.name,
            age: data.age,
            email: data.email,
            contact: data.contact,
            address: data.address,
            gender: data.gender,
            batch: data.batch,
            dateofBirth: data.date,
            memberSince: 0
        })
    }

    // res.status(200).redirect('/');
    res.json({"allowed": 1, "message" : "Correct Details now can procede to payments"});
})


module.exports = router;