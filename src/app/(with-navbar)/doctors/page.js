"use client";
import AllDoctors from "@/Components/AllDoctors/AllDoctors";

import { useState } from "react";

const DoctorsPage = () => {
  const [allDoctors, setAllDoctors] = useState([]);


  return (
    <div className="my-4 container mx-auto mt-20">
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
