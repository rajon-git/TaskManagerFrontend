class SessionHelper {
    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
        return localStorage.getItem("token")
    }

    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }
    removeSession = () => {
        localStorage.clear();
        window.location.href = "/";
      }
}
export const {getUserDetails,setUserDetails,getToken,setToken,removeSession}=new SessionHelper();