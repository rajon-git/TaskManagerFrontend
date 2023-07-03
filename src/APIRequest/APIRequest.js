import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import {getUserDetails,getToken,setToken,setUserDetails } from "../helper/SessionHelper.js";

import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";

const BaseURL = "https://ill-pear-raven-sari.cyclic.app/api/v1"
const AxiosHeader = { headers: { token: getToken() } };

export function RegistrationRequest(
    email,
    firstName,
    lastName,
    mobile,
    password,
    photo
){
    store.dispatch(ShowLoader());
    let URL=BaseURL+"/registration";
    let reqBody = {
      email,
      firstName,
      lastName,
      mobile,
      password,
      photo,
    };
    return axios.post(URL, reqBody).then((res)=>{
      store.dispatch(HideLoader());
        if (res.status === 200) {
            if (res.data["status"] === "fail") {
              if (res.data["data"]["keyPattern"]["email"] === 1) {
                ErrorToast("Email Already Exist");
                return false;
              } else {
                ErrorToast("Something Went Wrong");
                return false;
              }
            } else {
              SuccessToast("Registration Success");
              return true;
            }
          } else {
            ErrorToast("Something Went Wrong");
            return false;
          }
        }).catch((error)=>{
          store.dispatch(HideLoader());
        // eslint-disable-next-line no-undef
        ErrorToast("Something Went Wrong");
        return false;
    });
}

//login

export function LoginRequest(email, password) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/login`;
  let reqBody = { email, password };
  return axios
    .post(URL, reqBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        setToken(res.data["token"]);
        setUserDetails(res.data["data"]);
        SuccessToast("Login Success");
        return true;
      } else {
        ErrorToast("Invalid Email or Password");
        //UnAuthorizeRequest(error);
        return false;
      }
    })
    .catch((error) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

//create task

export function NewTaskRequest(title, description) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/createTask`;
  let reqBody = { title: title, description: description, status: "New" };
  return axios
    .post(URL, reqBody, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("New Task Created");
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      ErrorToast("Something Went Wrong=");
      store.dispatch(HideLoader());
      // UnAuthorizeRequest(error);
      return false;
    });
}