const express = require('express')
const mongoose = require('mongoose')
const UserDetails = require('../models/userDetails')
const PaymentDetails = require('../models/paymentDetails');

const router = new express.Router();


const getTodayDate = () =>{
    let DateFull = new Date()
    let date = DateFull.getDate();
    let year = DateFull.getFullYear();
    let month = DateFull.getMonth();
    let todaysDate = date + "-" + month + "-" + year
    return todaysDate;
}

router.get('/paymentDetails', async(req, res) => {
    const paymentDetails = await PaymentDetails.find();
    res.json(paymentDetails);
})

router.post('/paymentDetails', async(req, res) => {
    const data = req.body;
    const userEmail = await UserDetails.find({email : data.email});

    //successcode == 0 -> payment failed || 1 -> Payment successfull

    if(userEmail.length === 0){
        return res.json({"sucessCode": 0 ,"message" : "Email doesn't match from Registerd User Email"});
    }else{

            await PaymentDetails.create({
                name: data.name,
                emailID: data.email,
                cardCVV: data.cardCVV,
                cardExpiry: data.cardExpiry,
                cardNumber: data.cardNumber,
                dateAndTime: new Date()
            })
        
            const todaysDate = getTodayDate();
            
            let memberSince = userEmail[0].memberSince;
            memberSince++;

            //updating the user after payment
            await UserDetails.updateOne({email: data.email}, 
            {$set:{memberSince: memberSince,fessPaid: true, dateOfAddmission: todaysDate}})
            
    }

    res.status(200).json({"sucessCode": 1, "message": "Payment Succesfull"})
    
})

module.exports = router;