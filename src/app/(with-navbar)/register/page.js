"use client";
import SocialLogin from "@/Components/SocialLogin/SocialLogin";
import useAuth from "@/Components/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, profileUpdate } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        profileUpdate(data.name, data.photoURL);
        const userInfo = {
          userName: data.name,
          userEmail: data.email,
          userPhoto: data.photoURL,
          userRole: "user",
        };

        fetch("/api/user", {
          method: "POST",
          body: JSON.stringify(userInfo),
        })
          .then((req) => req.json())
          .then((data) => console.log(data));

        reset();
      })
      .catch((error) => {
        console.log("Firebase error:", error.code, error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen my-5 mt-20 p-0 ">
        <div className="hero-content flex-col lg:flex-row bg-green-500 p-0 w-3/4">
          <div
            className="hero lg:min-h-screen "
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/sign-up-user-password-privacy-concept_53876-123680.jpg?size=626&ext=jpg&ga=GA1.1.1055064272.1680254175&semt=ais)",
            }}
          >
            <div className="hero-overlay bg-opacity-75 rounded-r-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className=" text-3xl leading-relaxed font-bold mb-48">
                  We take care of your Billing
                  <br />
                  You take care of Patient
                </h1>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 p-0 shadow-2xl lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <h2 className="text-white text-2xl text-center">Create An Account</h2>
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered border-white bg-green-500 placeholder-slate-300"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered border-white bg-green-500 placeholder-slate-300"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo URL"
                    className="input input-bordered border-white bg-green-500 placeholder-slate-300"
                    {...register("photoURL", { required: true })}
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>

                <div className="relative">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered border-white bg-green-500 placeholder-slate-300"
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                      })}
                    />
                    {errors.password && errors.password.type === "required" && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                    {errors.password &&
                      errors.password.type === "minLength" && (
                        <span className="text-red-600">
                          Password must be at least 6 characters long
                        </span>
                      )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        password must have one Uppercase and one special
                        character.
                      </p>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered border-white bg-green-500 placeholder-slate-300"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === password,
                    })}
                  />
                  {errors.confirmPassword &&
                    errors.confirmPassword.type === "required" && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  {errors.confirmPassword &&
                    errors.confirmPassword.type === "validate" && (
                      <span className="text-red-600">
                        Passwords do not match
                      </span>
                    )}
                </div>

                <div className="form-control mt-2">
                  <input
                    type="submit"
                    value="Sing up"
                    className="btn bg-white text-green-500"
                  />
                </div>
                <div className="space-x-1">
                  <h2 className="text-white text-center">
                    Or Sign Up With
                    <SocialLogin />
                  </h2>
                  <p className="mx-auto px-3 text-white text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="text-white underline">
                      Sing in Now
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
