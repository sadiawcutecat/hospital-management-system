'use client';
import SocialLogin from '@/Components/SocialLogin/SocialLogin';
import useAuth from '@/Components/hooks/useAuth';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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

	const password = watch('password');

	const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				profileUpdate(data.name, data.photoURL);
				reset();
			})
			.catch((error) => {
				console.log('Firebase error:', error.code, error.message);
			});
	};
	return (
		<div className="hero min-h-screen mt-20">
			<div className="hero-content flex-col lg:flex-row gap-12">
				<div className="text-center lg:text-left w-1/2">
					<img src="https://i.ibb.co/NYJ19PB/undraw-Sign-up-n6im.png" alt="" />
				</div>
				<div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="name"
									className="input input-bordered"
									{...register('name', { required: true })}
								/>
								{errors.name && (
									<span className="text-red-600">This field is required</span>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									className="input input-bordered"
									{...register('email', {
										required: true,
									})}
								/>
								{errors.email && errors.email.type === 'required' && (
									<span className="text-red-600">This field is required</span>
								)}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input
									type="text"
									placeholder="photo URL"
									className="input input-bordered"
									{...register('photoURL', { required: true })}
								/>
								{errors.photoURL && (
									<span className="text-red-600">This field is required</span>
								)}
							</div>

							<div className="relative">
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input
										type={showPassword ? 'text' : 'password'}
										placeholder="password"
										className="input input-bordered"
										name="password"
										{...register('password', {
											required: true,
											minLength: 6,
											pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
										})}
									/>
									{errors.password && errors.password.type === 'required' && (
										<span className="text-red-600">This field is required</span>
									)}
									{errors.password && errors.password.type === 'minLength' && (
										<span className="text-red-600">
											Password must be at least 6 characters long
										</span>
									)}
									{errors.password?.type === 'pattern' && (
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
									<span className="label-text">Confirm Password</span>
								</label>
								<input
									type="password"
									placeholder="confirm password"
									className="input input-bordered"
									{...register('confirmPassword', {
										required: true,
										validate: (value) => value === password,
									})}
								/>
								{errors.confirmPassword &&
									errors.confirmPassword.type === 'required' && (
										<span className="text-red-600">This field is required</span>
									)}
								{errors.confirmPassword &&
									errors.confirmPassword.type === 'validate' && (
										<span className="text-red-600">Passwords do not match</span>
									)}
							</div>

							<div className="form-control mt-6">
								<input
									type="submit"
									value="Sing up"
									className="btn btn-primary"
								/>
							</div>
						</div>
					</form>
					<p className="mx-auto p-3">
						<small>
							Already have an account?{' '}
							<Link href="/login" className="text-orange-600 underline">
								Sing in Now
							</Link>
						</small>
					</p>
					<SocialLogin />
				</div>
			</div>
		</div>
	);
};

export default Register;
