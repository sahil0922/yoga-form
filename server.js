const express = require('express');
const cors=require('cors')
const mongoose = require('mongoose')
const UserDetails = require('./models/userDetails.js');
const userRouter = require('./routes/user');
const paymentRouter = require('./routes/payment')
const path = require('path')
const dotenv = require('dotenv')
const connectToDB = require('./config/db')

dotenv.config()

connectToDB();

// joing two DB
UserDetails.aggregate([{
    $lookup: {
        From: 'PaymentDetails',
        LocalField: 'email',
        foreignField: 'emailID',
        as: 'userPayment'
    }
}]);
mongoose.set('strictQuery', true);

const app = express();

app.set('view engine', 'ejs');
app.use(cors({origin:true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 7000;

app.use("/api/user",userRouter);
app.use('/api/userPay',paymentRouter);

// for deployment purpose
__dirname = path.resolve()

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
