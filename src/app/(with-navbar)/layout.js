"use client";

import Loading from "@/Components/Common/Loading/Loading";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/NavBar/NavBar";
import useAuth from "@/Components/hooks/useAuth";

const WithNavbar = ({ children }) => {
  const { loading } = useAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Navbar />

      <div className="w-full min-h-[70vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default WithNavbar;
