import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const NewTask = lazy(() => import("../components/New/NewTask"));
const NewtaskPage = () => {
    return (
        <>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
               <NewTask/>
            </Suspense>
            </MasterLayout>
        </>
    );
};

export default NewtaskPage;