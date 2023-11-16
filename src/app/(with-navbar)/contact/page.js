import contact from "@/assets/contact.jpg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaArrowCircleRight, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

// const resend = new Resend("re_7zcSdR2s_ExsXq82wLyWEcAFMR9h77HJv");
const Contact = () => {
  return (
    <div className="container mt-20 w-full mx-auto">
      <div className="w-full h-96 mx-auto bg-[#E0F4FF]  flex flex-col items-center pt-24 lg:pt-20">
        <h1 className="leading-loose text-teal-500 lg:text-4xl font-serif">
          Wether you're at home or in the wild we are here for you.
          <br />
          There is a good chance your question has been answered
        </h1>
        <button className="lg:text-xl btn bg-[#E0F4FF] border-teal-500 border-4 rounded-3xl lg:w-1/6 mt-8">
          Contact Us
        </button>
      </div>
      <div className="bg-base-200">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-3xl lg:text-5xl font-serif pt-16">Get in Touch</h1>
          <p className="lg:text-xl text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit <br />{" "}
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row px-4 lg:px-20 gap-8 w-full mx-auto mt-14 pb-20">
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-14 lg:px-10 pt-10">
              <h2 className="rounded-full w-1/3 p-5 text-white text-5xl bg-blue-400">
                <AiOutlineMail />
              </h2>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl mb-6 font-bold">Mail to us</h2>
              <p className="text-blue-600 font-bold">
                Our friendly team is here to help.
              </p>
              <div className="card-actions">
                <h1 className="hover:text-yellow-400 font-bold">
                  sraboni@gmail.com
                </h1>
              </div>
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-14 lg:px-10 pt-10">
              <h1 className="rounded-full w-1/3 p-5 text-white text-5xl bg-blue-400">
                <HiOutlineLocationMarker />
              </h1>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-6 font-bold">Office</h2>
              <p className="text-blue-600 font-bold">
              Come say hello at our office.
              </p>
              <div className="card-actions">
                <h1 className="font-bold">
                  Dhaka, Bangladesh
                  <br />
                  Chattogram, Bangladesh
                </h1>
              </div>
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-14 lg:px-10 pt-10">
              <h1 className="rounded-full w-1/3 p-5 text-white text-5xl bg-blue-400">
                <HiOutlinePhone />
              </h1>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-6 font-bold">Phone</h2>
              <p className="text-blue-600 font-bold">Mon-Fri from 8am to 5am</p>
              <div className="card-actions">
                <h1 className="font-bold">018********</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="md:flex justify-between items-center  my-20 w-8/12 mx-auto bg-white  ">
        <div className="w-full flex justify-center">
          <div className="text-xl">
            <h1 className="md:text-3xl text-2xl font-semibold mb-8">
              Branch-1
            </h1>
            <p className="md:text-md text-sm">
              <strong>Address</strong> :{" "}
              <span className="text-slate-500">satkhira khulna</span>
            </p>
            <p className="md:text-md text-sm">
              <strong>Email</strong> :{" "}
              <span className="text-slate-500">healthcare@gmail.com</span>
            </p>
            <p className="md:text-md text-sm">
              <strong>Phone</strong> :{" "}
              <span className="text-slate-500">+8801xxxxxxx</span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center md:mt-0 mt-10">
          <div className="text-xl">
            <h1 className="md:text-3xl text-2xl font-semibold mb-8">
              Branch-2
            </h1>
            <p className="md:text-md text-sm">
              <strong>Address</strong> :{" "}
              <span className="text-slate-500">khulna</span>
            </p>
            <p className="md:text-md text-sm">
              <strong>Email</strong> :{" "}
              <span className="text-slate-500">healthcare@gmail.com</span>
            </p>
            <p className="md:text-md text-sm">
              <strong>Phone</strong> :{" "}
              <span className="text-slate-500">+8801xxxxxxx</span>
            </p>
          </div>
        </div>
      </div> */}
      <div className="mt-10 md:w-8/12 w-11/12 mx-auto my-10">
        <h1 className="md:text-3xl text-2xl font-bold text-center mb-5 text-slate-500">
          Send Message
        </h1>
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
            <div className="form-control md:w-1/2 w-full my-2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered bg-slate-200"
              />
            </div>
          </div>
          <div className="md:flex gap-6 font-bold  ">
            <div className="form-control md:w-1/2 w-full my-2">
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder="Write Here..."
                className=" border-2 border-slate-300 rounded-md bg-slate-200 p-2 outline-none focus:outline-slate-300"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Link
              href=""
              className="btn  bg-emerald-500 font-bold  text-white hover:bg-emerald-600 "
            >
              Send Message
              <FaArrowCircleRight></FaArrowCircleRight>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
