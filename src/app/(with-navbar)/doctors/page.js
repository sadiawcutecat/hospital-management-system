"use client";
import AllDoctors from "@/Components/AllDoctors/AllDoctors";

import { useEffect, useState } from "react";

const DoctorsPage = () => {
  const [allDoctors, setAllDoctors] = useState([]);

  // useEffect(() => {

  // }, []);

  return (
    <div className="my-4 container mx-auto mt-20">
      <div className="my-2">
        <h2 className="text-3xl font-bold font-serif leading-relaxed tracking-wide underline underline-offset-4 w-full lg:w-1/2 px-4 lg:px-32 mx-auto  list-none hover:bg-black hover:text-white">
          We Are At Your Service
        </h2>
        <p className="text-xl px-4 font-serif lg:px-36 mx-auto">
          Doctors work hard every day to keep people fit and even save them from
          life and{" "}
          <span className="text-black font-bold">death situations</span>.
        </p>
      </div>
      <div>
        {allDoctors.map((allDoctor) => (
          <Doctors key={allDoctor.id} allDoctor={allDoctor}></Doctors>
        ))}
      </div>
      <AllDoctors></AllDoctors>
    </div>
  );
};

export default DoctorsPage;
