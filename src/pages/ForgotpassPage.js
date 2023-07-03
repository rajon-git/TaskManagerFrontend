import React, { Suspense } from 'react';
import LazyLoader from '../components/masterLayout/LazyLoader';

const ForgotpassPage = () => {
    return (
        <>
            <Suspense fallback={<LazyLoader/>}>

</Suspense>
        </>
    );
};

export default ForgotpassPage;