import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

export default function HomeLayout({ children }) {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}
