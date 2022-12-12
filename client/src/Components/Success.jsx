import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success = () => {

    const showToastMessage = () => {
        toast.success('Payment Success!', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    useEffect(() => {
        showToastMessage()
    },[])

  return (
     <div className="container">
        <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table">
                <div className="card ">
                <div className="card-body ">
                    <h5 className="card-title">Payment Successful!!!</h5>
                    <p className="card-text">Thanks for choosing us, you will now soon recive an email where in all the details of the batch will be mentioned. </p>
                    <Link to="/" className="btn btn-primary">Click to redirect</Link>
                </div>
               </div>
            </div>
        </div>
        <ToastContainer />
     </div>
  )
}

export default Success
