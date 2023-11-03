"use client";
import AllDoctors from "@/Components/AllDoctors/AllDoctors";

import { useEffect, useState } from "react";

const DoctorsPage = () => {
  const [allDoctors, setAllDoctors] = useState([]);

  // useEffect(() => {

  // }, []);

  return (
    <div className="my-4 container mx-auto mt-20">
      <AllDoctors></AllDoctors>
    </div>
  );
};

export default DoctorsPage;
