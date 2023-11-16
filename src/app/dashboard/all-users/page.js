"use client";

import React, { useEffect, useState } from "react";
import TableData from "./TableData";
// import { FaCheck, FaEye } from "react-icons/fa";
// import { ImCancelCircle } from "react-icons/im";

const DoctorPetain = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("/api/allUser")
      .then((res) => res.json())
      .then((data) => {
        setUser({ data });
      });
  }, []);
  
  return (
    <div>
      <div>
        <h2 className="text-2xl my-8 font-bold text-center">All Users</h2>
      </div>
      {/* --------------table----------*/}

      <div className="overflow-x-auto bg-white shadow-xl p-3 lg:p-16 border-gray-100 border-2">
        <table className="table w-full ">
          {/* head */}

          <thead>
            <tr className="text-black font-bold text-xl ">
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="lg:p-10">
            {users?.data?.result.map((user) => <TableData 
              user={user}
              key={user._id}
            ></TableData> )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPetain;
