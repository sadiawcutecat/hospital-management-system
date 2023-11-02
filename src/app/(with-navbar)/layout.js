import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/NavBar/NavBar";
import React from "react";

const WithNavbar = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithNavbar;
