import React, { Suspense } from 'react';
import LazyLoader from '../components/masterLayout/LazyLoader';

const Page404 = () => {
    return (
        <>
          <Suspense fallback={<LazyLoader/>}>
           
         </Suspense>  
        </>
    );
};

export default Page404;