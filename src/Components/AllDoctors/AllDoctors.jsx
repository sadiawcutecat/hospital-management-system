"use client";
import { useEffect, useState } from "react";
import Doctors from "../Doctors/Doctors";

const AllDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch("/api/doctors")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data.result))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="my-10 container mx-auto mt-28">
      <div className="my-10">
        <h2 className="text-center text-3xl font-bold font-serif leading-relaxed tracking-wide border-b-2 border-slate-400 w-full lg:w-1/2 px-4 lg:px-32 mx-auto  list-none mb-3">
          We Are At Your <span className="text-center">Service</span>
        </h2>
        <p className="text-md text-slate-500 w-7/12 text-center font-serif lg:px-36 mx-auto">
          Doctors work hard every day to keep people fit and even save them from
          life and <span className=" font-bold">death situations</span>.
        </p>
      </div>
      <div className="mx-auto my-10">
        {allDoctors.length > 0 ? (
          allDoctors.map((allDoctor) => (
            <Doctors key={allDoctor.id} allDoctor={allDoctor}></Doctors>
          ))
        ) : (
          <p>No doctors available.</p>
        )}
      </div>
    </div>
  );
};

export default AllDoctors;
