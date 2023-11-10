"use client";

import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/NavBar/NavBar";

const WithNavbar = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="w-full min-h-[70vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default WithNavbar;
