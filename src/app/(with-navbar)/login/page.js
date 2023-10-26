"use client";

import SocialLogin from "@/Components/SocialLogin/SocialLogin";
import useAuth from "@/Components/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
      <div className="hero min-h-screen mt-20">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <div className="text-center lg:text-left w-1/2">
            <img
              src="https://i.ibb.co/BfN0wg3/undraw-Login-re-4vu2.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="relative">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered"
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
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <p className="m-auto p-3">
              <small>
                New Here?{" "}
                <Link
                  href="/register"
                  className="text-orange-600 underline font-medium"
                >
                  Create an account
                </Link>
              </small>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
