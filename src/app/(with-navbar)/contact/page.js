import Image from "next/image";
import contact from "@/assets/contact.jpg";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className=" mt-24">
        <div className="relative">
          <Image
            width={5000}
            height={5000}
            src={contact}
            className=" w-[100vw] h-[80vh] mx-auto object-cover "
            alt=""
          />
          <div className=" absolute  w-full bg-black/30 h-full top-0 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-white w-full bg-black/40 text-center py-4">
              Feel Free To Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between items-center  my-20 w-8/12 mx-auto bg-white  ">
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
      </div>
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
