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
    let photo ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABYBJREFUWEetV2toW3UU/53/vU3StGmT0PdjW7ahbULdB0EUHVL9MiqrKKNOlMGGMnQgqIjs0wbKGAiiTPCLipMxtCiCZQwdrDIHIkxqW/pIX/bhuvSxdk3a5tV7j5y7ZaxrbtroDtwPyT3/8zvn9z+vS9hEmFmNj4+XxGIxf0FBwTZm3gtgNzP7iKiEmXUiusXMt4hoWil1GUCYmaMNDQ0LRMS5IMju5cmTJ9XBgweLDMPYBmA/EbUQ0WPM7MxpkCjOzF3M3GkYxjmHw3G9oaEhZncmqwOdnZ16VVVVHTM/B+AlABJ1vpIkoj8BnGXmjmAweCObgQ0O9PX1OTRNe8Q0zTcAHMkXNYt+jJm/V0qddrlck4FAIHGvzjoHhoeHnel0WqL9BEDoAYBnTEgejBLRO5FI5GJzc/Na5sVdBySZhoaGHjcM4zsANQ8Q/F5TI6ZpHgiFQj2Z5LQckIRra2vbxcwfEdHzucCZGYZhwJTHNAEiKHk0DZqmgcg2r+WdJOjPhmG81dTUNCU4lvbg4KDHNM1DAD6zBWfGmmEgmUwiGo0iFo0iHo9b6oWFhfB4PCgpKYHT5YKu67ZmiGiJmb/2eDzH6+vr4yR13t/f30hEn9tlu0SdTqUwPz+P2dlZyO9sIsBl5eUoKytDQUFBLiInDMN4vamp6RJ1dXV5nU7nUQCn7U6sra0hEolgbnZ209SQq/D7fKitrbWuxUaWAXzLzMdocHAwwMxfMnNzNmWJdnl5GaMjI7aR339Ooq+rq4PX58vl8AgRvUjhcHivYRi/AHBl006n04jcuGHRv1VRSln5sCMQyJWU0pjep76+vuNEdMrOeCKRwNjoqJV8+YjT6URg504rQW1kiYi+oP7+/rMApAI2SIb+keHhfLAtXbmGmtpa+P1+u7MS0SVh4Cci2p9NS+pcSu7vsbG8HZCKqKquRnl5ud1ZKaVuYeBXAE/baUmtD4XDt5tOHuJwOLBt+3arP+SQMA0MDFxl5iftlFKpFKamphBdWtoyvHRDt9uNXbt3W90xhwwLAxcAtNgpSdtdXFzEP1NTWy5Dob+iogKVVVW22HdmQa8wcJ6ZX87lprAwMT6OlZWVTZ3IRL99xw5IJdgmAPOaUuqKMPAxgLdzOWBVQyyG6elpqxyFlWwidLtcLlRUVsLr9W52ZVY3lCpoVUpJW7QtWLEkSbi6umq1ZBlE94s0n2KPx8r64uJiyO9NJGKa5gnq7u4O6Lr+DRE9le2ARC+zQMAXFxasfLATYaDU60VpaSmKiopyDSQpwQFmbqOenh6frutvMvMJIlo3wgRcKJcJuHDz5qb3n3FMhpDP60V1TY2dE6vM/GMoFHpVxrHW09OzR9f1r4hoT8ZIBlwol8jzFbkCYaK2rm6dE0RkMPMQgPeCweAFayEZHR0tjcfjR4joQyJyy38y/2dmZjA3N5cv9l39zGiWlnxnWxLq55n5TDAY/EAU7+5Pvb299Uop2YhaZD+UqCcnJ/8zeOag9ITKykqUV1RIYiaY+TIRHWtsbBxf50BmI5a9MJFI7JmYmKD46ur/dkAMWJMxEEgXut1dd6i/kjG8boO8du2aWynVEo1GP52+fr2ame03zDxc0zTN9Pv94dq6undDodDFe49uAOjs7PSyYRy6ubBwNJ1O72TmrIvKVvCl3RJRgojGvD7f+X379m3YO7JG2N7errnd7oeSyeSpZCLxKICKzb4J10V1+4NUPs1mnA7HH7rDcaa1tfVqNqdzUtzR0eFOJpPPsmm+lkqlggBKAMh8lSZ/f6sTUPnsihHRoqbrAw5NO/fCgQM/5GJrS3fc3t7uSKVSDxPzM0qpJ0xmuZpiAqxZy4ChlFohomE2zd85nf7tlcOH/9rKNf0LASOK40uuyZEAAAAASUVORK5CYII=";
     

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
