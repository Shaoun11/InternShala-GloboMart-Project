import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
          
            <Outlet></Outlet>
           <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;