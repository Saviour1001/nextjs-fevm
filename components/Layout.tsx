import React from 'react'
import Navbar from './Navbar';
// import SocialFollow from './Socials';
// import Hamburger from "./Hamburger";

const Layout = ({ children }: {
    children: any;
}) => {
    return (
        <div className="w-screen h-screen bg-black text-white black p-5">
                <video src="/fevmVid.mp4" autoPlay muted loop className="video w-full h-full z-1"/>
                <div className="h-full w-full flex flex-col main-container bg-black/20 z-2 fixed top-0 right-0 left-0 bottom-0 bg-scroll scroll-smooth overflow-y-scroll">
                    <Navbar />
                    {children}
                </div>
        </div>
    )
}

export default Layout