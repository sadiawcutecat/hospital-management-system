'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import useAuth from '../hooks/useAuth';

const Review = () => {
	const { user } = useAuth();
	const [rating, setRating] = useState(0);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		data.rating = rating;
		console.log(data);

		fetch('http://localhost:3000/api/review', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="p-6">
			<div className="flex items-center mb-4">
				<div className="mr-4 w-1/2">
					<label className="text-gray-700">Name:</label> <br />
					<input
						type="text"
						className="input input-bordered w-full"
						{...register('name', { required: true })}
					/>
					{errors?.name && (
						<span className="text-red-500">This field is required</span>
					)}
				</div>
				<div className="w-1/2">
					<label className="text-gray-700">Email:</label>
					<br />
					<input
						type="email"
						defaultValue={user?.email}
						disabled
						className="input input-bordered w-full"
						{...register('email', { required: true })}
					/>
					{errors?.email && (
						<span className="text-red-500">This field is required</span>
					)}
				</div>
			</div>

			<div className="mb-4">
				<label className="text-gray-700">Description:</label>
				<br />
				<textarea
					rows="50"
					cols="30"
					style={{ height: '180px' }}
					className="input input-bordered w-full"
					{...register('description', { required: true })}
				/>
				{errors?.description && (
					<span className="text-red-500">This field is required</span>
				)}
			</div>
			<div className="mb-4">
				<label className="text-gray-700">Rating:</label>
				<br />
				<Rating
					emptySymbol={<FaStar className="" />}
					fullSymbol={<FaStar className="text-yellow-400" />}
					initialRating={0}
					onChange={(value) => setRating(value)}
					// {...register('rating', { required: true })}
				/>
				{/* {errors?.rating && (
					<span className="text-red-500">This field is required</span>
				)} */}
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Review;
