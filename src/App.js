import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CreatePage from './pages/CreatePage';
import NewtaskPage from './pages/NewtaskPage';
import ProgressPage from './pages/ProgressPage';
import CompletedPage from './pages/CompletedPage';
import CanceledPage from './pages/CanceledPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Page404 from './pages/Page404';
import ForgotpassPage from './pages/ForgotpassPage';
import FullScreenLoader from './components/masterLayout/FullScreenLoader';
import { Toaster } from 'react-hot-toast';
import { getToken } from './helper/SessionHelper';
import SendOTPPage from './pages/SendOtpPage';
import SendOtpPage from './pages/SendOtpPage';

const App = () => {
  if(getToken()){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DashboardPage  />}  />
                    <Route path="/Create" element={<CreatePage />}  />
                    <Route path="/All" element={<NewtaskPage />}/>
                    <Route path="/Progress"  element={<ProgressPage />}/>
                    <Route  path="/Completed"  element={<CompletedPage />}/>
                    <Route  path="/Canceled" element={<CanceledPage />}/>
                    <Route  path="/Profile" element={<ProfilePage />}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
            <FullScreenLoader/>
        </>
    );

}
else {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/Login" replace />}/>
                    <Route path="/Login" element={<LoginPage />}/>
                    <Route path="/Registration" element={<RegistrationPage />}/>

                    <Route  path="/SendOTP" element={<SendOtpPage/>}/>
                    {/* <Route  path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                    <Route  path="/CreatePassword" element={<CreatePasswordPage/>}/> */}

                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
            <FullScreenLoader/>
            <Toaster/>
        </>
    );
}
};
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<DashboardPage/>}/>
//           <Route path="/Create" element={<CreatePage/>}/>
//           <Route path="/All" element={<NewtaskPage/>}/>
//           <Route path="/Progress" element={<ProgressPage/>}/>
//           <Route path="/Completed" element={<CompletedPage/>}/>
//           <Route path="/Canceled" element={<CanceledPage/>}/>
//           <Route path="/Profile" element={<ProfilePage/>}/>
//           <Route path="/Login" element={<LoginPage/>}/>
//           <Route path="/Registration" element={<RegistrationPage/>}/>
//           <Route path="/Forgotpass" element={<ForgotpassPage/>}/>
//           <Route path="*" element={<Page404/>}/>
//         </Routes>
//       </BrowserRouter>
//       <FullScreenLoader/>
//       <Toaster/>
//     </>
//   );
// };

export default App;