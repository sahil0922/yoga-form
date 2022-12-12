import React, { useState } from "react";
import "./form.css";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [batch, setBatch] = useState(0);

  const navigate = useNavigate();

 const showToastMessage = (age) => {
    toast.error(`Your Age dont match meet the criteria!` , {
      position: toast.POSITION.TOP_CENTER
   });
 }

  const submitHandle = async (e) => {
    e.preventDefault();

    let data = { name, email, gender, contact, date, address, batch };

    const requestOptions = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    };
    const postUser = "/api/user/userDetails";
    const response = await fetch(postUser, requestOptions);
    const result = await response.json();
    // result.allowed === 0 -> not allowed

    if(result.allowed === 0) {
        showToastMessage(data.age);
    }else{
        navigate('/payment')
    }

  };

  return (

    <>
        <div className="container">
          <div className="row ">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table ">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4 mb-3">
                  <h2>Yoga Registration Form</h2>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-4">
                      {/* form  */}
                      <form onSubmit={submitHandle}>
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            className="form-control form-control-md"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label>Email</label>
                          <input
                            className="form-control form-control-md"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label>Date of Birth</label>
                          <input
                            className="form-control form-control-md"
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                          />
                        </div>

                        <div className="form-group d-flex justify-content-md-evenly mt-3">
                          <label className="p-2 flex-fill">Gender :</label>
                          <div className="form-group p-2 flex-fill">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value={gender}
                              onChange={(e) => {
                                setGender("male");
                              }}
                              id="gender"
                            />
                            <label className="form-check-label" htmlFor="gender">
                              MALE
                            </label>
                          </div>

                          <div className="form-group p-2 flex-fill">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value={gender}
                              onChange={(e) => {
                                setGender("female");
                              }}
                              id="gender"
                            />
                            <label className="form-check-label" htmlFor="gender">
                              FEMALE
                            </label>
                          </div>
                        </div>

                        <div className="form-group mt-3">
                          <label>Contact Number</label>
                          <input
                            className="form-control form-control-md"
                            id="phone"
                            type="tel"
                            name="contact"
                            value={contact}
                            onChange={(e) => {
                              setContact(e.target.value);
                            }}
                            pattern="[0-9]{10}"
                          />
                        </div>
                        <div className="form-group mt-3">
                          <label>Residential Address</label>
                          <input
                            className="form-control form-control-md"
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            placeholder="Address"
                          />
                        </div>

                        <h6 className="mt-4">Select from below 4 batches</h6>
                        <div className="form-group mt-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="batch"
                            value={batch}
                            onChange={(e) => {
                              setBatch(1);
                            }}
                            id="Batch1"
                          />
                          <label className="form-check-label" htmlFor="Batch1">
                            {" "}
                            Batch 1 : 6 to 7AM
                          </label>
                        </div>

                        <div className="form-group mt-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="batch"
                            value={batch}
                            onChange={(e) => {
                              setBatch(2);
                            }}
                            id="Batch2"
                          />
                          <label className="form-check-label" htmlFor="Batch2">
                            {" "}
                            Batch 2 : 7 to 8AM
                          </label>
                        </div>

                        <div className="form-group mt-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="batch"
                            value={batch}
                            onChange={(e) => {
                              setBatch(3);
                            }}
                            id="Batch3"
                          />
                          <label className="form-check-label" htmlFor="Batch3">
                            {" "}
                            Batch 3 : 8 to 9AM
                          </label>
                        </div>

                        <div className="form-group mt-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="batch"
                            value={batch}
                            onChange={(e) => {
                              setBatch(4);
                            }}
                            id="Batch4"
                          />
                          <label className="form-check-label" htmlFor="Batch4">
                            {" "}
                            Batch 4 : 5 to 6PM
                          </label>
                        </div>

                        <h6 className="mt-5">
                          *Registration Fee worth 500 INR, click on submit button to
                          continue with payment.
                        </h6>

                        <div className="text-center mt-3">
                          <button type="submit" className="btn btn-md btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>   
    </>
  );
};

export default Form;
