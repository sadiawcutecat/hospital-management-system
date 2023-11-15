"use client";
// import useAuth from "@/Components/hooks/useAuth";
// import { Resend } from "resend";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRef } from "react";
import Swal from "sweetalert2";

// const resend = new Resend("re_7zcSdR2s_ExsXq82wLyWEcAFMR9h77HJv");
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g3lqplj",
        "template_1ro30j1",
        form.current,
        "7TDLTQ9I1JwjgJLhl"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email is sended",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <div>
      <div className=" mt-24">
        <div className="relative">
          <Image
            width={5000}
            height={5000}
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
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
        <form className="mx-auto" ref={form} onSubmit={(e) => sendEmail(e)}>
          <div className=" font-bold w-full">
            <div className="form-control md:w-1/2 w-full my-2">
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
                className="input input-bordered bg-slate-200"
              />
            </div>
            <div className="form-control md:w-1/2 w-full my-2">
              <input
                type="email"
                required
                name="email"
                placeholder="Your Email"
                className="input input-bordered bg-slate-200"
              />
            </div>
          </div>
          <div className="font-bold  ">
            <div className="form-control md:w-1/2 w-full my-2">
              <textarea
                name="message"
                required
                id=""
                cols="30"
                rows="10"
                placeholder="Write Here..."
                className=" border-2 border-slate-300 rounded-md bg-slate-200 p-2 outline-none focus:outline-slate-300"
              ></textarea>
            </div>
          </div>

					<div className="flex justify-center mt-6">
						<input
							type="submit"
							className="btn  bg-emerald-500 font-bold  text-white hover:bg-emerald-600 "
							value={` Send Message`}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
