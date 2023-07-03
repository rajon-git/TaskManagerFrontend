import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
 import { RegistrationRequest } from "../../APIRequest/APIRequest.js";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";

const Registration = () => {
  let navigate = useNavigate();

  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const onRegistration = () => {
    let email = emailRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo =
      "data:image/png;base64,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";

    // debugger;
    // console.log(email + firstName + lastName + mobile + password);

    // form validation
    if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required !");
    } else if (IsEmpty(firstName)) {
      ErrorToast("First Name is Required !");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name is Required !");
    } else if (!IsMobile(mobile)) {
      ErrorToast("Valid Mobile Required !");
    } else if (IsEmpty(password)) {
      ErrorToast("password Required !");
    } else {
      //alert("success");
      RegistrationRequest(
        email,
        firstName,
        lastName,
        mobile,
        password,
        photo
      ).then((result) => {
        if (result === true) {
          navigate("/Login");
        }
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-10 center-screen">
            <div className="card w-100 p-3">
              <div className="card-body">
                <h4>SIGN UP</h4>
                <hr />
                <div className="container-fluid m-0 p-0">
                  <div className="row m-0 p-0">
                    <div className="col-md-4 p-2">
                      <label>Email Address</label>
                      <input
                        ref={(input) => (emailRef = input)}
                        type="email"
                        placeholder="Email"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>First Name</label>
                      <input
                        ref={(input) => (firstNameRef = input)}
                        type="text"
                        placeholder="First Name"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Last Name</label>
                      <input
                        ref={(input) => (lastNameRef = input)}
                        type="text"
                        placeholder="Last Name"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Mobile Number</label>
                      <input
                        ref={(input) => (mobileRef = input)}
                        type="mobile"
                        placeholder="Mobile Number"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Password</label>
                      <input
                        ref={(input) => (passwordRef = input)}
                        type="password"
                        placeholder="Password"
                        className="form-control animated fadeInUp"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 p-0">
                    <div className="col-md-4 p-2">
                      <button
                        onClick={onRegistration}
                        className="btn btn-primary mt-3 w-100 float-end animated fadeInUp"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text-center mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/Login"
                    >
                      Sign In
                    </Link>
                    {/* <span className="ms-1">|</span> */}
                    {/* <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/registration"
                    >
                      Forget Password
                    </Link> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
