"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FcFeedback, FcGraduationCap, FcLike } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { PiCurrencyDollarFill } from "react-icons/pi";

const SingleDoctors = ({ params }) => {
  const [allDoctors, setAllDoctors] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/doctors/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setAllDoctors(data);
      });
  }, []);

  return (
    <div className="mt-28 my-28">
      {allDoctors?.result?.map(
        ({
          _id,
          image,
          name,
          study,
          specialist,
          position,
          place,
          rating,
          price,
          Chamber_Appointment,
        }) => {
          return (
            <div key={_id}>
              <h1 className="text-4xl font-bold text-center">{name}</h1>
              <div className="grid grid-cols-1 row lg:grid-cols-3 mx-auto card m-3 px-10">
                <figure>
                  <img
                    className="w-full p-4 shadow-lg rounded-lg"
                    src={image}
                    alt=""
                  />
                </figure>
                <div className="mx-4 my-4">
                  <p className="font-bold text-black text-xl">{name}</p>
                  <p className="flex gap-3">
                    <span className="text-2xl">
                      <FcGraduationCap />
                    </span>
                    {study}
                  </p>
                  <p className="flex gap-3">
                    <span className="text-xl">
                      <GrUserExpert />
                    </span>
                    {specialist}
                  </p>
                  <p className="flex gap-3">
                    <span className="text-xl">
                      <FaUserDoctor />
                    </span>
                    {position}
                  </p>
                  <p className="flex gap-3">
                    <span className="text-xl">
                      <FaHospital />
                    </span>
                    {place}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="">{rating}</span>
                  </p>
                </div>
                <div className="w-1/2 mx-auto lg:mt-3">
                  <div>
                    <h2 className="flex items-center gap-3">
                      <span className="text-xl">
                        <FcLike />
                      </span>{" "}
                      90%
                    </h2>
                    <h2 className="flex items-center gap-3">
                      <span className="text-xl">
                        <FcFeedback />
                      </span>{" "}
                      20 Feedback
                    </h2>
                    <h2 className="flex items-center gap-3">
                      <span className="text-xl">
                        <PiCurrencyDollarFill />
                      </span>
                      ${price}
                    </h2>
                    <h2 className="flex items-center gap-3">
                      <span className="text-xl">
                        <ImLocation2 />
                      </span>
                      {Chamber_Appointment.address}
                    </h2>
                  </div>
                  <div className="flex items-center gap-7">
                    <Link href={`/payment/${_id}`}>
                      <button className="btn btn-sm btn-success my-6">
                        Book Appointment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-8/12 px-10">
                <h2 className="text-emerald-800 border-b-emerald-600 border-b-4 w-2/12 font-bold text-xl mb-5">
                  Description
                </h2>
                <p>{Chamber_Appointment.about}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default SingleDoctors;
