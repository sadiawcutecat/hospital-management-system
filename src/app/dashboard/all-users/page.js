"use client";

import { ImCancelCircle } from "react-icons/im";
import { FaEye, FaCheck } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const DoctorPetain = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/allUser")
      .then((res) => res.json())
      .then((data) => {
        setUser({ data });
      });
  }, []);
  console.log(users?.data?.result);

  return (
    <div>
      <div>
        <h2 className="text-2xl my-8 font-bold text-center">All Users</h2>
      </div>
      {/* --------------table----------*/}

      <div className="overflow-x-auto bg-white shadow-xl p-16 border-gray-100 border-2">
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
          <tbody className="p-10">
            {users?.data?.result.map((user) => (
              <tr key={user._id}>
                <td data-label="Name & Photo">
                  <div className="avatar mask mask-squircle w-12 h-12">
                    <img
                      src={user.userPhoto}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td data-label="purpose">{user.userName}</td>
                <td data-label="type">{user.userEmail}</td>
                <td data-label="type">{user.userRole}</td>
                <td className="space-x-4 flex items-center " data-label="#">
                  <button className="btn btn-sm text-white bg-[#0174BE]  hover:bg-emerald-400">
                    <FaEye className=" h-4 w-4" /> View
                  </button>
                  <button className="btn btn-sm text-white bg-[#3876BF] my-2 hover:bg-orange-400 ">
                    <FaCheck className=" h-4 w-4" /> Make Admin
                  </button>
                  <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                    <ImCancelCircle className=" h-4 w-4" /> Make User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPetain;
