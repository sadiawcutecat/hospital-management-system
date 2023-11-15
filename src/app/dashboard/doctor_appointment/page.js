"use client";

import { testimonialData } from "@/Data/testimonialData";
import { FaCheck, FaEye, FaPhoneAlt } from "react-icons/fa";
import { ImCancelCircle, ImLocation2 } from "react-icons/im";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";

const doctor_appointment = () => {
  return (
    <div>
      
    
      {testimonialData.map((patientAppoint) => {
        return (
          <div key={patientAppoint._id} className="">
            <div className=" flex  shadow-lg p-8 ">
              <img
                src={patientAppoint.picture}
                alt=""
                className="mask mask-squircle w-24 h-24 mt-3"
              />

              <div className="ms-6">
                <h2 className="font-bold">{patientAppoint.name}</h2>
                <p className="flex">
                  <AiOutlineClockCircle className="mt-1 me-2" />
                  {patientAppoint.date}, {patientAppoint.time}
                </p>
                <p className="flex">
                  <ImLocation2 className="mt-1 me-2" />
                  {patientAppoint.location}
                </p>
                <p className="flex">
                  <AiOutlineMail className="mt-1 me-2" />
                  {patientAppoint.email}
                </p>
                <p className="flex">
                  <FaPhoneAlt className="mt-1 me-2" />
                  {patientAppoint.contact}
                </p>
              </div>
              <div className="flex justify-end items-center  space-x-6 ms-auto">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default doctor_appointment;
