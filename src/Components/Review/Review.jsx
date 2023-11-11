"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const users = {};

  // console.log(users);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.rating = rating;
    // console.log(data, users);

    const updateForm = {
      name: user?.displayName,
      picture: user?.photoURL,
      email: user?.email,
      profession: data.profession,
      rating: data?.rating,
      comments: data.description,
    };
    console.log(updateForm);

    fetch("/api/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your review is successfully added",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <div className="flex items-center mb-4">
        <div className="mr-4 w-1/2">
          <label className="text-gray-700">Name:</label> <br />
          <input
            type="text"
            className="input input-bordered w-full"
            defaultValue={user?.displayName}
            readOnly
            // {...register('name', { required: true })}
          />
          {/* {errors?.name && (
						<span className="text-red-500">This field is required</span>
					)} */}
        </div>
        <div className="w-1/2">
          <label className="text-gray-700">Email:</label>
          <br />
          <input
            type="email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-gray-700">Profession:</label>
        <br />
        <input
          className="input input-bordered w-full"
          {...register("profession", { required: true })}
        />
        {errors?.profession && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label className="text-gray-700">Description:</label>
        <br />
        <textarea
          rows="50"
          cols="30"
          style={{ height: "180px" }}
          className="input input-bordered w-full"
          {...register("description", { required: true })}
        />
        {errors?.description && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label className="text-gray-700">Rating:</label>
        <br />
        <Rating
          emptySymbol={<FaStar className="text-4xl space-x-4" />}
          fullSymbol={<FaStar className="text-yellow-400 text-4xl space-x-4" />}
          initialRating={0}
          required
          onChange={(value) => setRating(value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Review;
