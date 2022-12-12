import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Unsuccess = () => {

    const showToastMessage = () =>{
        toast.error('Payment Error !', {
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
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Payment Failed!!! </h5>
                        <p className="card-text">Due to Invalid card details, or newtork issue</p>
                        <Link to="/" className="btn btn-primary">Click to redirect</Link>
                    </div>
                </div>
                </div>
            </div>
        <ToastContainer />
    </div>
  )
}

export default Unsuccess
