const mongoose = require('mongoose')

const paymentDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailID:{
        type: String,
        required: true
    },
    cardNumber:{
        type: Number,
        required: true
    },
    cardExpiry:{
        type: String,
        required: true
    },
    cardCVV:{
        type: Number,
        required: true
    },
    dateAndTime:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('paymentDetails', paymentDetailSchema)