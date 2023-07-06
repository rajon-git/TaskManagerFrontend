import React, { lazy, Suspense } from "react";
import LazyLoader from "../../components/masterLayout/LazyLoader";

const VerifyOTP = lazy(() =>
  import("../../components/AccountRecover/Verify-Otp")
);

const VerifyOtpPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <VerifyOTP />
      </Suspense>
    </>
  );
};

export default VerifyOtpPage;
