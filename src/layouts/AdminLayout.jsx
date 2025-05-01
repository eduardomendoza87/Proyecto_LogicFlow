import React from "react";
import Navbar from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function AdminLayout(){
    return(
        <div className="min-h-screen flex flex-col" >
            <Navbar/>
            <main className="flex-grow">
            <Outlet/>
            </main>
            <Footer/>

        </div>
    );
}
export default AdminLayout;