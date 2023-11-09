"use client";

import React, { useEffect, useState } from "react";
import TableData from "./TableData";

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
        <h2 className="text-2xl mb-8 font-bold text-center">All Users</h2>
      </div>
      {/* --------------table----------*/}

      <div className="overflow-x-auto bg-white shadow-xl lg:p-10 border-gray-100 border-2">
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
