import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Appointment = () => {
  return (
    <div className=" mb-20 md:p-20 p-8 mx-auto mt-10 img-slide opacity-0 duration-1000">
      <div className="text-center">
        <h3 className="text-3xl text-orange-600  font-semibold my-4">
          Make an appointment
        </h3>
        <h1 className="text-md text-sky-900/80  ">
          Get the right Pediatrician Appoint your doctor
        </h1>
      </div>
      <div className="mt-10">
        <form className="">
          <div className="md:flex  gap-6 font-bold w-full">
            <div className="form-control md:w-1/2 w-full my-2">
              <input
                type="text"
                name="YourName"
                placeholder="Your Name"
                className="input input-bordered bg-slate-200"
              />
            </div>
            <div className="form-control md:w-1/2 w-full my-2 mb-5">
              <input
                type="datetime-local"
                name="Time&Date"
                placeholder="Time & Date"
                className="input input-bordered bg-slate-200"
              />
            </div>
          </div>
          <div className="md:flex gap-6 font-bold  ">
            <div className="form-control md:w-1/2 w-full my-2">
              <select
                className="h-12 mt-2 input input-bordered bg-slate-200"
                name="Select Service"
                id="sub-category"
              >
                <option value="Allergy_testing">Select Service</option>
                <option value="Allergy_testing">Allergy Testing</option>
                <option value="Allergy_testing">Allergy Testing</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 w-full my-2">
              <input
                type="number"
                name="PhoneNumber"
                placeholder="Phone Number"
                className="input input-bordered bg-slate-200"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Link href='/payment' className="btn btn-wide bg-emerald-500 font-bold  text-white hover:bg-emerald-600 ">
              find Doctors
              <FaArrowCircleRight></FaArrowCircleRight>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
