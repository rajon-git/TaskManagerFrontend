import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import {getUserDetails,getToken,setToken,setUserDetails } from "../helper/SessionHelper.js";

import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import { CanceledTask, CompletedTask, ProgressTask, SetNewTask } from "../redux/state-slice/task-slice";
import { SetSummary } from "../redux/state-slice/summary-slice";
import { SetProfile, SetProfileDetails } from "../redux/state-slice/profile-slice";

const BaseURL = "https://taskmanager-rajon.cyclic.app/api/v1"
const AxiosHeader = { headers: { token: getToken() } };
const axiosConfig= { headers: { token: getToken() } };

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

//get task lists

// Task List By Status
export function TaskListByStatus(status) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/listTaskByStatus/${status}`;
  axios.get(URL, AxiosHeader).then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (status === "New") {
          store.dispatch(SetNewTask(res.data["data"]));
        } else if (status === "Completed") {
          store.dispatch(CompletedTask(res.data["data"]));
        } else if (status === "Canceled") {
          store.dispatch(CanceledTask(res.data["data"]));
        } else if (status === "Progress") {
          store.dispatch(ProgressTask(res.data["data"]));
        }
      } else {
        ErrorToast("Something Went Wrong");
      }
    })
    .catch((error) => {
      // console.log(error.massage)
      ErrorToast("Something Went Wrong=");
      store.dispatch(HideLoader());
      //UnAuthorizeRequest(error);
      return false;
    });
}

// Summary Request
export function SummaryRequest(){
  store.dispatch(ShowLoader())
  let URL=`${BaseURL}/taskStatusCount`;
  axios.get(URL,AxiosHeader).then((res)=>{
      store.dispatch(HideLoader())
      if(res.status===200){
          store.dispatch(SetSummary(res.data['data']))
      }
      else{
          ErrorToast("Something Went Wrong")
      }
  }).catch((err)=>{
      ErrorToast("Something Went Wrong")
      store.dispatch(HideLoader())
  });
}

// Delete Request
export function DeleteRequest(id) {

  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/deleteTask/${id}`;
  return axios.post(URL, null, axiosConfig)
    .then((res) => {
      store.dispatch(HideLoader());

      if (res.status === 200) {
        SuccessToast("Delete Success!");
        return true;
      } else {
        ErrorToast("Something Went Wrong!");
        return false;
      }
    })
    .catch((error) => {
      // debugger
      console.log(error.message);
      ErrorToast("Something Went Wrong=");
      store.dispatch(HideLoader());
     // UnAuthorizeRequest(error);
      return false;
    });
}

//Update Status Request
export function UpdateStatusRequest(id, status) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/updateStatus/${id}/${status}`;
  return axios.post(URL, null, axiosConfig)
    .then((res) => {
      store.dispatch(HideLoader());

      if (res.status === 200) {
        SuccessToast("Update status Success!");
        return true;
      } else {
        ErrorToast("Update status Filed!");
        return false;
      }
    })
    .catch((error) => {
      // debugger
      console.log(error.message);
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      //UnAuthorizeRequest(error);
      return false;
    });
}

// Profile Details
export function GetProfileDetails() {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/profileDetails`;
  axios.get(URL, AxiosHeader).then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        store.dispatch(SetProfile(res.data["data"]));
      } else {
        ErrorToast("Something Went Wrong");
      }
    })
    .catch((error) => {
      // console.log(error.massage)
      ErrorToast("Something Went Wrong=");
      store.dispatch(HideLoader());
      //UnAuthorizeRequest(error);
      return false;
    });
}

// Profile update
export function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo) {
  store.dispatch(ShowLoader());
  const URL = `${BaseURL}/profileUpdate`;
  let reqBody = {email,firstName,lastName,mobile,password,photo,};
  let localBody = {email,firstName,lastName,mobile,password,photo,};
  return axios.post(URL, reqBody, axiosConfig).then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessToast("Profile update success");
        setUserDetails(localBody);
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorToast("Something Went Wrong");
      //UnAuthorizeRequest(error);
      return false;
    });
}