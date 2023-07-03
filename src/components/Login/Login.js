import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { LoginRequest } from "../../APIRequest/APIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";

const Login = () => {
  let emailRef, passRef = useRef();

  const handelLogin = () => {
    let email = emailRef.value;
    let password = passRef.value;

    if (IsEmail(email)) {
      ErrorToast("Invalid Email Address");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required");
    } else {
      LoginRequest(email, password).then((result) => {
        if (result === true) {
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <hr />
                <input
                  ref={(input) => (emailRef = input)}
                  type="email"
                  className="form-control animated fadeInUp"
                  placeholder="email"
                  
                />
                <br />
                <input
                  ref={(input) => (passRef = input)}
                  type="password"
                  className="form-control animated fadeInUp"
                  placeholder="password"
                  
                />
                <br />
                <button
                  onClick={handelLogin}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
                <hr />
                <div className="text-center mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/Registration"
                    >
                      Sign Up
                    </Link>
                    <span className="ms-1">|</span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/SendOtp"
                    >
                      Forget Password
                    </Link>
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

export default Login;
