import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Completed = lazy(() => import("../components/Completed/Completed"));
const CompletedPage = () => {
    return (
        <>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
              <Completed/>
            </Suspense>
            </MasterLayout>
        </>
    );
};

export default CompletedPage;