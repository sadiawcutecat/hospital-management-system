import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
// import { FaEye, FaCheck } from "react-icons/fa";

const TableData = ({ user }) => {
  const [newRole, setNewRole] = useState();
  const { userPhoto, userEmail, userName, userRole, _id } = user;

  const handleSubmit = async (id) => {
    try {
      const res = await fetch(`/api/allUser/${id}`, {
        method: "PUT",
        body: JSON.stringify({ newRole }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td data-label="Name & Photo">
        <div className="avatar mask mask-squircle w-12 h-12">
          <img src={userPhoto} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td data-label="purpose">{userName}</td>
      <td data-label="type">{userEmail}</td>
      <td data-label="type">{userRole}</td>
      <td className="space-x-4 flex items-center " data-label="#">
        {/* <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
          <FaEye className=" h-4 w-4" /> View
        </button> */}
        <div className="flex gap-3">
          <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            {/* Add other role options as needed */}
          </select>
          <button
            className="btn btn-xs text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 "
            onClick={() => handleSubmit(_id)}
          >
            Update Role
          </button>
        </div>
        {/* <button
                    className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 "
                    onClick={() => handleMakeAdmin(user._id)}
                  >
                    <FaCheck className=" h-4 w-4" /> Make Admin
                  </button> */}
        <button className="`btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
          <ImCancelCircle className=" h-4 w-4" /> Cancel
        </button>
      </td>
    </tr>
  );
};

export default TableData;
