import React from "react";
import { Outlet } from "react-router-dom";
import NavbarDocente from "../components/NavbarDocente";
import Footer from "../components/Footer";

function DocentesLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarDocente />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DocentesLayout;
