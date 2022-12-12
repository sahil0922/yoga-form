const mongoose = require('mongoose')

const userDetailsSchema = new mongoose.Schema({
    name:{
        type: String,
        // required: true
    },
    email:{ // used to identify a user in this DB
        type: String,
        // required: true,
    },
    contact:{
        type: Number,
        // required : true,
        default : 0
    },
    gender: {
        type: String,
        // required: true,
        default: "male"
    },
    dateofBirth: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        // required: true,
        default: "okay now"
    },
    batch : {
        type: Number,
        // required: true,
        default: 1
    },
    memberSince: { // in terms of month
        type: Number,
        default: 0
    },
    fessPaid: {
        type: Boolean,
        default: false
    },
    dateOfAddmission:{
        type: String,
        default: new Date()
    }
})

module.exports = mongoose.model('userDetails', userDetailsSchema)