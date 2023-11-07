"use client";
import { FcFeedback, FcGraduationCap, FcLike } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospital, FaRegStar, FaStar } from "react-icons/fa";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { ImLocation2 } from "react-icons/im";
import Rating from "react-rating";
import Link from "next/link";
import { useEffect } from "react";

const Doctors = ({ allDoctor }) => {
  const {
    _id,
    image,
    name,
    study,
    specialist,
    position,
    place,
    rating,
   
  } = allDoctor;
  useEffect(() => {
    const contents = document.querySelectorAll(".img-slide");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    contents.forEach((content) => {
      observer.observe(content);
    });
  });

  return (
    <div className="grid grid-cols-1 row lg:grid-cols-2 mx-auto card m-3 img-slide opacity-0 duration-1000">
      <figure>
        <img className="w-1/2 p-4 shadow-lg rounded-lg" src={image} alt="" />
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
        <div className="flex items-center gap-7">
          <Link href={`/doctors/${_id}`}>
            <button className="btn btn-sm border-green-600  my-2">
              View Profile
            </button>
          </Link>
          <Link href={`/payment/${_id}`}><button className="btn btn-sm btn-success">Book Appointment</button></Link>
          
        </div>
      </div>
      <div className="w-1/2 mx-auto lg:mt-3"></div>
    </div>
  );
};

export default Doctors;
