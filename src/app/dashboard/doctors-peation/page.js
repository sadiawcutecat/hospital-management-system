"use client";
// import { useForm } from "react-hook-form";
import { FaCheck, FaEye } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
// import React, { useEffect, useState } from "react";
import Form from "@/Components/Form/Form";
import useAuth from "@/Components/hooks/useAuth";
import moment from "moment";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const DoctorPetain = () => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);
  const { user } = useAuth();
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch(`/api/payment/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTestimonialData(data.result[0]);
        console.log(data.result[0]);
      });
  }, []);

  const handleCancel = (id) => {
    console.log(id);

    fetch(`http://localhost:3000/api/payment/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "cancel" }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You Cancel your patient",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleAccept = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/api/payment/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You Approve your patient",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <div className="md:flex justify-center  items-center bg-white shadow-xl mx-auto max-w-screen-xl p-5 border-gray-100 border-2  bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699973730/img-01_bdd9qb.jpg?fbclid=IwAR1WlmkSXm3vKFcj9s3ILfoLjaUHC4AgLE3HHP-y1NORCBIICqjFrX5W9Pw')] bg-cover bg-no-repeat">
        <div className="flex justify-between items-center ">
          <div className="h-28 w-28 border-pink-600 border-8 rounded-full">
            <img
              src="https://i.ibb.co/grwm3NG/icon-01.png"
              alt=""
              className="h-14 w-14 items-center ms-4 mt-4"
            />
          </div>

          <div className="mx-5  ">
            <p className="text-xl">Total Patient</p>
            <p className="font-bold text-3xl my-2">1500</p>
            <p className="text-sm">Till Today</p>
          </div>
        </div>
        <div className="flex justify-between items-center md:border-l-2 border-gray-400 my-10 ">
          <div className="h-28 w-28 border-green-700 border-8 rounded-full md:mx-6">
            <img
              src="https://i.ibb.co/xJJcckw/icon-02.png"
              alt=""
              className="h-14 w-14 items-center ms-4 mt-4"
            />
          </div>
          <div className="mx-5 ">
            <p className="text-xl">Today Patient</p>
            <p className="font-bold text-3xl my-2">160</p>
            <p className="text-sm">06, Nov 2019</p>
          </div>
        </div>
        <div className="flex justify-between items-center md:border-l-2 border-gray-400 ">
          <div className="h-28 w-28 border-sky-900 border-8 rounded-full md:mx-6">
            <img
              src="https://i.ibb.co/c15CvPc/icon-03.png"
              alt=""
              className="h-14 w-14 items-center ms-4 mt-4"
            />
          </div>
          <div className="mx-5 ">
            <p className="text-xl">Appoinments</p>
            <p className="font-bold text-3xl my-2">85</p>
            <p className="text-sm">06, Apr 2019</p>
          </div>
        </div>
      </div>
      {/* --------------2nd part-----------*/}

      <div>
        <h2 className="text-2xl my-8 font-bold text-center">
          Patient Appointments
        </h2>
      </div>
      {/* --------------table----------*/}

      <div className="overflow-x-auto bg-white shadow-xl p-4 lg:p-16 border-gray-100 border-2">
        <div className="space-x-2 my-6">
          <button className="btn bg-emerald-500 text-white p-4 hover:bg-emerald-700">
            Upcoming
          </button>
          <button className="btn bg-orange-400 text-white p-4  hover:bg-orange-700 ">
            Today
          </button>
        </div>
        <hr />
        <table className="table w-full ">
          {/* head */}

          <thead>
            <tr className="text-black font-bold text-xl ">
              <th>Patient Name</th>
              <th>Appt. Date</th>
              <th>Purpose</th>
              <th>Type</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="lg:p-10">
            {/* row 1 */}
            {testimonialData.map((patient) => (
              <tr key={patient._id}>
                <td data-label="Name & Photo" className="items-center">
                  <div className="lg:flex lg:flex-row lg:items-center  md:flex-col items-end gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={patient.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{patient.petainName}</div>
                      <div className="">{patient.serial}</div>
                    </div>
                  </div>
                </td>
                <td data-label="date & time">
                  {moment().format("MMMM Do YYYY, h:mm a")}
                </td>
                <td data-label="type">{patient.status}...</td>
                <td data-label="price">{patient.paid}</td>
                <td
                  className="space-x-4 flex items-center justify-center "
                  data-label="#"
                >
                  {/* The button to open modal */}
                  <label
                    htmlFor={`my-modal-${patient._id}`}
                    className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400"
                  >
                    <FaEye className=" h-4 w-4" /> View
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id={`my-modal-${patient._id}`}
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box">
                      <Form patient={patient}></Form>
                      <div className="modal-action">
                        <label
                          htmlFor={`my-modal-${patient._id}`}
                          className="btn bg-orange-400 text-white font-bold hover:bg-orange-600"
                        >
                          cancel
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                    <FaEye className=" h-4 w-4" /> View
                  </button> */}
                  <button
                    onClick={() => handleAccept(patient._id)}
                    className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 "
                  >
                    <FaCheck className=" h-4 w-4" /> Accept
                  </button>
                  <button
                    onClick={() => handleCancel(patient._id)}
                    className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 "
                  >
                    <ImCancelCircle className=" h-4 w-4" /> Cancel
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
