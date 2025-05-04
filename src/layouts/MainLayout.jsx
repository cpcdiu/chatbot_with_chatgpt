import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic content */}
            <div>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
        </div>
    );
};

export default MainLayout;