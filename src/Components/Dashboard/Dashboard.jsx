"use client";
import Link from "next/link";
import { HiOutlineBookOpen, HiOutlineLogout } from "react-icons/hi";
import { AiOutlineFileText } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import {
  FaCalendarCheck,
  FaUserInjured,
  FaStar,
  FaUserCog,
  FaShareAlt,
  FaLock,
  FaHourglassHalf,
  FaEye,
  FaCheck,
} from "react-icons/fa";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-evenly item-center my-10">
      {/* -------------------------sidebar------------------------------- */}

      <div className="bg-white shadow-lg w-[20%] border-gray-100 border-2  ">
        <div className="text-center pt-6">
          <img
            src="https://i.ibb.co/8crKQKx/doctor-thumb-02.jpg"
            alt=""
            className="h-32 w-32 rounded-full ms-24   border-gray-100 border-8"
          />
          <h3 className="font-bold my-3">Dr. Fred Ortego</h3>
          <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
        </div>
        <div className="my-8">
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <HiOutlineBookOpen className="mt-1 " /> Dashboard
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <FaCalendarCheck className="mt-1 " /> Appointments
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <FaUserInjured className="mt-1 " /> My Patients
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <FaHourglassHalf className="mt-1 " /> Schedule Timings
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <AiOutlineFileText className="mt-1 " />
              Invoices
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <FaStar className="mt-1 " /> Reviews
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <BiSolidMessageRounded className="mt-1" /> Message
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <FaUserCog className="mt-1" /> Profile Settings
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <FaShareAlt className="mt-1 " />
              Social Media
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <FaLock className="mt-1 " />
              Change Password
            </Link>
          </p>
          <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-xl">
            <Link className="flex gap-4" href="">
              <HiOutlineLogout className="mt-1" /> Logout
            </Link>
          </p>
        </div>
      </div>

      <section>
        {/* --------------first part----------- */}

        <div className="flex justify-center space-x-24 items-center bg-white shadow-xl mx-auto max-w-screen-xl p-10 border-gray-100 border-2">
          <div className="flex justify-between items-center">
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
          <div className="flex justify-between items-center border-l-2 border-gray-400  ">
            <div className="h-28 w-28 border-green-700 border-8 rounded-full  mx-6">
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
          <div className="flex justify-between items-center border-l-2 border-gray-400 ">
            <div className="h-28 w-28 border-sky-900 border-8 rounded-full mx-6">
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
          <h2 className="text-2xl my-8 font-bold">Patient Appointments</h2>
        </div>
        {/* --------------table----------*/}

        <div className="overflow-x-auto bg-white shadow-xl p-8 border-gray-100 border-2">
          <div className="space-x-2 my-6">
            <button className="btn bg-emerald-500 text-white p-4 hover:bg-emerald-700">
              Upcoming
            </button>
            <button className="btn bg-orange-400 text-white p-4  hover:bg-orange-700 ">
              Today
            </button>
          </div>
          <hr />
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-black font-bold text-xl">
                <th>Patient Name</th>
                <th>Appt. Date</th>
                <th>Purpose</th>
                <th>Type</th>
                <th>Paid Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="">Desktop Support Technician</span>
                </td>
                <td>General</td>
                <td>new patient</td>
                <td>$140</td>
                <th className="space-x-4">
                  <button className="btn text-emerald-600 bg-emerald-200 p-4 hover:bg-emerald-400">
                    <FaEye className=" h-4 w-4" /> View
                  </button>
                  <button className="btn text-orange-600 bg-orange-200 p-4 hover:bg-orange-400 ">
                    <FaCheck className=" h-4 w-4" /> Accept
                  </button>
                  <button className="btn text-red-600 bg-red-200 p-4 hover:bg-red-400 ">
                    <ImCancelCircle className=" h-4 w-4" /> Cancel
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
