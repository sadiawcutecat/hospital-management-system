"use client";
import { useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const OurDoctors = () => {
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
    <div className="w-9/12 mx-auto mt-14">
      <div className="md:flex items-center gap-10">
        <div className="img-slide opacity-0 duration-500">
          <img src="https://i.ibb.co/TgnshpW/Our-Doctors.png" alt="" />
        </div>
        <div>
          <div className="md:w-9/12 mx-auto mt-10 img-slide opacity-0 duration-1000">
            <h1 className="text-3xl font-bold">Doctors</h1>
            <p className="my-4 text-sky-900">
              With the online doctor portal, your specialists will be able to
              collect patient information and prescribe digital prescriptions in
              a simple and secure way
            </p>
            <ul className="">
              <li className="flex gap-2 my-3">
                <span>
                  <BsArrowRightCircle className="mt-1 text-green-600"></BsArrowRightCircle>
                </span>{" "}
                <span>
                  Manage schedule and appointments comfortably from anywhere and
                  any device
                </span>
              </li>
              <li className="flex gap-2 my-3">
                <span>
                  <BsArrowRightCircle className="mt-1 text-green-600"></BsArrowRightCircle>
                </span>{" "}
                <span>Serve patients remotely through video call</span>
              </li>
              <li className="flex gap-2 my-3">
                <span>
                  <BsArrowRightCircle className="mt-1 text-green-600"></BsArrowRightCircle>
                </span>{" "}
                <span>
                  View patient treatment, prescription history and much more
                </span>
              </li>
            </ul>
            <button className="btn btn-success hover:bg-green-500 mt-5">
              View Doctors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
