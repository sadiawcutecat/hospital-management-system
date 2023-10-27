"use client";
import AllDoctors from "@/Components/AllDoctors/AllDoctors";
import Doctors from "@/Components/Doctors/Doctors";
import { useEffect, useState } from "react";

const DoctorsPage = () => {
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);

  return (
    <div className="my-4 container mx-auto mt-20">
      <AllDoctors></AllDoctors>
    </div>
  );
};

export default DoctorsPage;
