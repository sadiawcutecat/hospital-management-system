'use client';
// AppointmentForm.js
import { DatePicker } from 'keep-react';
import { useState } from 'react';

const AppointmentForm = () => {
	const [time, setTime] = useState(null);
	// console.log(time);

	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleChamberAppointmentChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			chamberAppointment: {
				...prevData.chamberAppointment,
				[name]: value,
			},
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log({ ...formData, time });
		console.log(time);
		const form = e.target;
		// Add logic to handle form submission here
		const formData = {
			image: form.image.value,
			name: form.name.value,
			study: form.study.value,
			specialist: form.specialist.value,
			position: form.position.value,
			place: form.place.value,
			rating: parseInt(form.rating.value),
			price: parseInt(form.price.value),
			Chamber_Appointment: {
				hospital: form.hospital.value,
				address: form.address.value,
				visiting_Hour: time,
				appointment: form.appointment.value,
				about: form.about.value,
			},
		};
		console.log(formData);
		fetch('/api/doctors', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<div className="p-6 bg-white shadow-md rounded-md">
			<h1 className="text-2xl font-bold mb-6">Appointment Form</h1>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
				<div className="w-full md:flex gap-8">
					<label className="w-1/2">
						<span className="block mb-2">Name:</span>
						<input
							type="text"
							name="name"
							// value={formData.name}
							onChange={handleChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>
					<label className="w-1/2">
						<span className="block mb-2">Image:</span>
						<input
							type="text"
							name="image"
							// value={formData.image}
							onChange={handleChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>
				</div>

				<div className="w-full md:flex gap-8">
					<label className="w-1/2">
						<span className="block mb-2">Study:</span>
						<input
							type="text"
							name="study"
							// value={formData.study}
							onChange={handleChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>

					<label className="w-1/2">
						<span className="block mb-2">Specialist:</span>
						<input
							type="text"
							name="specialist"
							// value={formData.specialist}
							onChange={handleChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>
				</div>

				<div className="w-full md:flex gap-8">
					<label className="w-1/2">
						<span className="block mb-2">Position:</span>
						<input
							type="text"
							name="position"
							// value={formData.position}
							onChange={handleChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>

					<label className="w-1/2">
						<span className="block mb-2">Place:</span>
						<input
							type="text"
							name="place"
							// value={formData.place}
							onChange={handleChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>
				</div>

				<div className="w-full md:flex gap-8">
					<label className="w-1/2">
						<span className="block mb-2">Rating:</span>
						<input
							type="text"
							name="rating"
							// value={formData.rating}
							onChange={handleChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>

					<label className="w-1/2">
						<span className="block mb-2">Price:</span>
						<input
							type="text"
							name="price"
							// value={formData.price}
							onChange={handleChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>
				</div>

				<h2 className="text-xl font-semibold mb-4">Chamber Appointment</h2>

				<div className="w-full md:flex gap-8">
					<label className="w-1/2">
						<span className="block mb-2">Hospital:</span>
						<input
							type="text"
							name="hospital"
							// value={formData.chamberAppointment.hospital}
							onChange={handleChamberAppointmentChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>

					<label className="w-1/2">
						<span className="block mb-2">Address:</span>
						<input
							type="text"
							name="address"
							// value={formData.chamberAppointment.address}
							onChange={handleChamberAppointmentChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>
				</div>

				<div className="w-full md:flex gap-8">
					<label className="w-1/2">
						<span className="block mb-2">Visiting Hour:</span>
						{/* <input
							type="text"
							name="visitingHour"
							// value={formData.chamberAppointment.visitingHour}
							onChange={handleChamberAppointmentChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/> */}
						<DatePicker timePicker={setTime}>
							<DatePicker.Time />
						</DatePicker>
					</label>

					<label className="w-1/2">
						<span className="block mb-2">Appointment:</span>
						<input
							type="text"
							name="appointment"
							// value={formData.chamberAppointment.appointment}
							onChange={handleChamberAppointmentChange}
							className="p-2 border border-gray-300 rounded-md w-full"
						/>
					</label>
				</div>

				<label className="w-full">
					<span className="block mb-2">Description:</span>
					<textarea
						name="about"
						// value={formData.chamberAppointment.about}
						onChange={handleChamberAppointmentChange}
						className="p-2 border border-gray-300 rounded-md w-full"
					/>
				</label>

				<button
					type="submit"
					className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition duration-300"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AppointmentForm;
