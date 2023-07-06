import React, { lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";

const SendOTP = lazy(() => import("../components/AccountRecover/Send-Otp"));

const SendOtpPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <SendOTP />
      </Suspense>
    </>
  );
};

export default SendOtpPage;
