"use client";

import SocialLogin from "@/Components/SocialLogin/SocialLogin";
import useAuth from "@/Components/hooks/useAuth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const router = useRouter();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const location = usePathname();
  console.log(location);

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        reset();
        console.log(loggedUser);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero min-h-screen my-5 lg:mt-20 p-0">
        <div className="hero-content flex-col lg:flex-row text-white bg-green-500 p-0">
          <div className="text-center container lg:text-left  p-0">
            <img
              className="lg:min-h-screen  p-0 rounded-r-3xl "
              src="https://img.freepik.com/free-photo/sign-up-user-password-privacy-concept_53876-123680.jpg?size=626&ext=jpg&ga=GA1.1.1055064272.1680254175&semt=ais"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 p-0 shadow-2xl lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <h2 className="text-2xl">Welcome Back !</h2>
                  <p className="text-md lg:my-2">
                    The Faster You Fill Up The Faster You Enjoy
                  </p>
                  <label className="label">
                    <span className="label-text flex items-center gap-2 lg:mt-2 text-white">
                      <AiOutlineMail />
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered border-white  placeholder-slate-300 bg-inherit"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="relative">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text flex items-center gap-2 text-white ">
                        <RiLockPasswordFill />
                        Password
                      </span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered  bg-inherit  border-white  placeholder-slate-300"
                      name="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                    <a
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="absolute bottom-[7px] end-0 p-2 text-black text-center "
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </a>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn bg-white text-green-500 text-xl"
                  />
                </div>
                <h2 className="text-center mx-auto mt-5">Or Login With</h2>
                <SocialLogin />
              </div>
            </form>
            <p className="m-auto p-3 text-xl">
              <small>
                don't have an account?{" "}
                <Link href="/register" className="underline font-medium">
                  Sign Up
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
