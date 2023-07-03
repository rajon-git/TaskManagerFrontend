import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Create = lazy(() => import("../components/Create/Create"));
const CreatePage = () => {
    return (
        <>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
               <Create/>
            </Suspense>
            </MasterLayout>
        </>
    );
};

export default CreatePage;