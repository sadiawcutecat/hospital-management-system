"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const PopularDoctors = () => {
  const [popularDoctor, setPopularDoctor] = useState([]);
  useEffect(() => {
    fetch("/api/popularDoctor")
      .then((res) => res.json())
      .then((data) => setPopularDoctor(data.result));
  }, []);
  return (
    <div className="my-10 background flex flex-col justify-center items-center  text-white py-20 mt-24">
      <div className="img-slide opacity-0 duration-1000">
        <h1 className="text-center text-white font-bold text-4xl">
          Here is Our popular Doctors
        </h1>
        <p className="md:w-3/6 w-11/12 my-3 mx-auto text-center text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          voluptate eveniet neque unde sed reiciendis? Debitis, quae porro!
          Architecto, doloribus!
        </p>
      </div>
      <div className=" popular-doctor grid md:grid-cols-3 grid-cols-1 gap-5 mt-20 w-10/12 mx-auto text-center text-white">
        {popularDoctor?.map((doctor) => {
          return (
            <div
              key={doctor._id}
              className="p-7 border rounded  duration-1000 hover:bg-white/30 hover:scale-[1.03] "
            >
              <div>
                <img
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                  src={doctor.image}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">{doctor.name}</h1>
                <p className="text-sm my-2 uppercase text-slate-400">
                  {doctor.place}
                </p>
                <p className="text-slate-300">{doctor.specialist}</p>
                <Link href={`/payment/${doctor._id}`}>
                  <button className="btn btn-success my-3 hover:bg-emerald-500">
                    Book Appointment
                    <FaArrowCircleRight></FaArrowCircleRight>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}

        {/* <div className="p-7 border rounded hover:bg-white/30 hover:scale-[1.03] img-slide opacity-0 duration-1000">
          <div>
            <img
              className="w-32 h-32 mx-auto rounded-full"
              src="https://kdahweb-static.kokilabenhospital.com/kdah-2019/product/1579758867.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Dr.Jhon </h1>
            <p className="text-md my-2 uppercase text-slate-400">
              Child Specialist
            </p>
            <p className="text-slate-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptates quo aliquid velit facilis adipisci placeat culpa
              distinctio nemo nostrum!
            </p>
            <button className="btn btn-success my-3 hover:bg-emerald-500">
              <span>Get Appointment</span>
              <span>
                <FaArrowCircleRight></FaArrowCircleRight>
              </span>
            </button>
          </div>
        </div>
        <div className="p-7 border rounded hover:bg-white/30  hover:scale-[1.03] img-slide opacity-0 duration-1000">
          <div>
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://img.freepik.com/free-photo/portrait-confident-male-doctor_329181-12190.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Dr.Robart</h1>
            <p className="text-md my-2 uppercase text-slate-400">
              Child Specialist
            </p>
            <p className="text-slate-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptates quo aliquid velit facilis adipisci placeat culpa
              distinctio nemo nostrum!
            </p>
            <button className="btn btn-success my-3 hover:bg-emerald-500">
              <span>Get Appointment</span>
              <span>
                <FaArrowCircleRight></FaArrowCircleRight>
              </span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PopularDoctors;
