import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Progress = lazy(() => import("../components/Progress/Progress"));
const ProgressPage = () => {
    return (
        <>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
              <Progress/>
            </Suspense>
            </MasterLayout>
        </>
    );
};

export default ProgressPage;