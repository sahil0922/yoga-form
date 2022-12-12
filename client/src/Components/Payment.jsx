import React, { useState} from 'react'
import './payment.css'
import {useNavigate} from 'react-router-dom'

const Payment = () => {

  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[cardNumber, setCardNumber] = useState(0);
  const[cardExpiry, setCardExpiry] = useState("");
  const[cardCVV, setCardCVV] = useState(0);


  const navigate = useNavigate();

  const handlePayment = async() => {
    let data = {email, name, cardCVV, cardExpiry, cardNumber};

    const requestOptions = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    };
    const response = await fetch("/api/userPay/paymentDetails", requestOptions);
    const result = await response.json();
    //"/api/users/login",
    // console.log(data)

    if(result.sucessCode === 0){
       navigate('/payment/unsuccess');
    }else{
      navigate('/payment/success')
    }
  }

  return (
      <>
        <div className="container ">
           <div className="row ">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table ">
              <div className="d-table-cell align-middle">
            <div className="card px-4">
              <div className="card-body">
                <div className='m-sm-4'>
                <h4 className="h8 py-3">Payment Details</h4>
                <div className="row gx-3">
                    <div className="col-10">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Person Name</p>
                            <input className="form-control mb-3" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Person Email</p>
                            <input className="form-control mb-3" type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Card Number</p>
                            <input className="form-control mb-3" type="text" value={cardNumber} placeholder="1234 5678 435678" onChange={(e) => setCardNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Expiry</p>
                            <input className="form-control mb-3" type="text" value={cardExpiry} placeholder="MM/YYYY" onChange={(e) => setCardExpiry(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">CVV/CVC</p>
                            <input className="form-control mb-3 pt-2 " type="password" value={cardCVV} placeholder="***" onChange={(e) => setCardCVV(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="btn btn-primary mb-3" onClick={handlePayment}>
                            <span className="ps-3">Pay 500 INR</span>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
                </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Payment
