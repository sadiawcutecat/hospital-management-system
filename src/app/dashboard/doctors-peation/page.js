"use client";

import { ImCancelCircle } from "react-icons/im";
import { FaEye, FaCheck } from "react-icons/fa";
import React from "react";

const DoctorPetain = () => {
  return (
    <div>
      <div className="md:flex justify-center  items-center bg-white shadow-xl mx-auto max-w-screen-xl p-10 border-gray-100 border-2">
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
        <div className="flex justify-between items-center md:border-l-2 border-gray-400 my-10 ">
          <div className="h-28 w-28 border-green-700 border-8 rounded-full  md:mx-6">
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
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr className="text-black font-bold text-xl ">
              <th>Patient Name</th>
              <th>Appt. Date</th>
              <th>Purpose</th>
              <th>Type</th>
              <th>Paid Amount</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td data-label="Name & Photo">
                <div className="flex items-center justify-end gap-3">
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
              <td data-label="date & time">23/10/23 , 12:30</td>
              <td data-label="purpose">General</td>
              <td data-label="type">new patient</td>
              <td data-label="price">$140</td>
              <td className="space-x-4" data-label="#">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td data-label="Name & Photo">
                <div className="flex items-center justify-end gap-3">
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
              <td data-label="date & time">23/10/23 , 12:30</td>
              <td data-label="purpose">General</td>
              <td data-label="type">new patient</td>
              <td data-label="price">$140</td>
              <td className="space-x-4" data-label="#">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td data-label="Name & Photo">
                <div className="flex items-center justify-end gap-3">
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
              <td data-label="date & time">23/10/23 , 12:30</td>
              <td data-label="purpose">General</td>
              <td data-label="type">new patient</td>
              <td data-label="price">$140</td>
              <td className="space-x-4" data-label="#">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td data-label="Name & Photo">
                <div className="flex items-center justify-end gap-3">
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
              <td data-label="date & time">23/10/23 , 12:30</td>
              <td data-label="purpose">General</td>
              <td data-label="type">new patient</td>
              <td data-label="price">$140</td>
              <td className="space-x-4" data-label="#">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td data-label="Name & Photo">
                <div className="flex items-center justify-end gap-3">
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
              <td data-label="date & time">23/10/23 , 12:30</td>
              <td data-label="purpose">General</td>
              <td data-label="type">new patient</td>
              <td data-label="price">$140</td>
              <td className="space-x-4" data-label="#">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td data-label="Name & Photo">
                <div className="flex items-center justify-end gap-3">
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
              <td data-label="date & time">23/10/23 , 12:30</td>
              <td data-label="purpose">General</td>
              <td data-label="type">new patient</td>
              <td data-label="price">$140</td>
              <td className="space-x-4" data-label="#">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td data-label="Name & Photo">
                <div className="flex items-center justify-end gap-3">
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
              <td data-label="date & time">23/10/23 , 12:30</td>
              <td data-label="purpose">General</td>
              <td data-label="type">new patient</td>
              <td data-label="price">$140</td>
              <td className="space-x-4" data-label="#">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td data-label="Name & Photo">
                <div className="flex items-center justify-end gap-3">
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
              <td data-label="date & time">23/10/23 , 12:30</td>
              <td data-label="purpose">General</td>
              <td data-label="type">new patient</td>
              <td data-label="price">$140</td>
              <td className="space-x-4" data-label="#">
                <button className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                  <FaEye className=" h-4 w-4" /> View
                </button>
                <button className="btn btn-sm text-orange-600 bg-orange-200 my-2 hover:bg-orange-400 ">
                  <FaCheck className=" h-4 w-4" /> Accept
                </button>
                <button className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPetain;
