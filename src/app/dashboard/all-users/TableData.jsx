import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";

const TableData = ({ user }) => {
  const router = useRouter();
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
      if (res.ok) {
        router.reload();
        // throw new Error("Failed to update topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeTopic = async (id) => {
    const proceed = Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (proceed) {
          try {
            const res = fetch(`/api/allUser/${id}`, {
              method: "DELETE",
              body: JSON.stringify(),
              headers: {
                "Content-type": "application/json",
              },
            });
            if (res.ok) {
              // throw new Error("Failed to update topic");
              // router.refresh();
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    });
  };

  return (
    <tr className="mx-auto">
      <td data-label="Name">
        <div className="avatar mask mask-squircle w-12 h-12">
          <img src={userPhoto} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td data-label="User Name">{userName}</td>
      <td data-label="User Email">{userEmail}</td>
      <td data-label="Role">{userRole}</td>
      <td className="space-x-4 flex items-center " data-label="Action">
        <div className="flex justify-between gap-3 mt-8 lg:mt-0">
          <div className="flex gap-2">
            <select
              value={newRole || userRole}
              onChange={(e) => setNewRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </select>
            <button
              className="btn btn-sm text-white bg-[#3876BF] my-2 hover:bg-orange-400 "
              onClick={() => handleSubmit(_id)}
            >
              Update
            </button>
          </div>
          <button onClick={() => removeTopic(_id)} className="text-red-400">
            <HiOutlineTrash size={24} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableData;
