"use client";
import Link from "next/link";
import { HiOutlineBookOpen, HiOutlineLogout } from "react-icons/hi";
import { AiOutlineClose, AiOutlineFileText } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";

import {
  FaCalendarCheck,
  FaUserInjured,
  FaStar,
  FaUserCog,
  FaShareAlt,
  FaLock,
  FaHourglassHalf,
  FaBars,
} from "react-icons/fa";
import React, { useState } from "react";
import NavLink from "@/Components/Common/NavLink/NavLink";
const Dashboard = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <div
          className={`fixed z-20  ${
            open
              ? "left-0 duration-200 md:w-[20%] w-full"
              : "md:left-0 -left-96 duration-200 md:w-[20%] w-0"
          }   `}
        >
          <div className="">
            <div
              className={`bg-white shadow-lg  overflow-scroll h-[100dvh] border-gray-100 border-2 `}
            >
              <AiOutlineClose
                className={` cursor-pointer z-20 font-bold md:hidden inline-block ml-10
                mt-10
            text-3xl text-black  duration-150 ${open && "md:-right-3 right-6"}`}
                onClick={() => setOpen(!open)}
              ></AiOutlineClose>
              <div className="text-center pt-6">
                <img
                  src="https://i.ibb.co/8crKQKx/doctor-thumb-02.jpg"
                  alt=""
                  className="h-32 w-32 rounded-full mx-auto   border-gray-100 border-8"
                />
                <h3 className="font-bold my-3">Dr. Fred Ortego</h3>
                <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
              </div>
              <div className="my-8">
                <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
                  <NavLink className="flex gap-4" href="/">
                    <HiOutlineBookOpen className="mt-1 " /> Home
                  </NavLink>
                </p>
                <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
                  <NavLink classlist="flex gap-4" href="">
                    <FaCalendarCheck className="mt-1 " /> Appointments
                  </NavLink>
                </p>
                <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
                  <NavLink
                    classlist="flex gap-4"
                    href="/dashboard/doctors-peation"
                  >
                    <FaUserInjured className="mt-1 " /> My Patients
                  </NavLink>
                </p>

                <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
                  <Link className="flex gap-4" href="">
                    <AiOutlineFileText className="mt-1 " />
                    Invoices
                  </Link>
                </p>
                <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
                  <Link className="flex gap-4" href="">
                    <FaStar className="mt-1 " /> Reviews
                  </Link>
                </p>

                <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
                  <Link className="flex gap-4" href="">
                    <FaShareAlt className="mt-1 " />
                    Social Media
                  </Link>
                </p>

                <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
                  <Link className="flex gap-4" href="">
                    <HiOutlineLogout className="mt-1" /> Logout
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`absolute   ${
              // open
              // ? "left-[300px] md:w-[calc(100%-300px)] w-0 "
              // : "md:left-[100px] md:w-[calc(100%-100px)] w-full duration-300"
              " md:left-[300px] md:w-[calc(100%-300px)] w-full "
            } overflow-hidden md:duration-300 `}
          >
            <div>
              <div className="flex justify-between items-center md:p-10 p-10">
                <FaBars
                  className={` cursor-pointer  md:hidden inline-block
            text-3xl text-black  duration-150 ${
              open && "rotate-180 md:-right-3 right-6"
            }`}
                  onClick={() => setOpen(!open)}
                ></FaBars>

                <div className="flex gap-x-4 items-center">
                  <img
                    className={`cursor-pointer duration-500 w-10 ${
                      open && "rotate-[360deg]"
                    }`}
                    src="https://cdn-icons-png.flaticon.com/512/3703/3703377.png"
                  />

                  <h1
                    className={` origin-left font-medium text-xl duration-200 `}
                  >
                    <Link
                      href="/"
                      className=" text-2xl font-bold uppercase font-mono"
                    >
                      Sk Mustakin
                    </Link>
                  </h1>
                </div>
                {/* <img
                  className="w-10 h-10 rounded-full"
                  src={isAdmin.photo}
                  alt=""
                /> */}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
