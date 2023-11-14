'use client';
import { useEffect, useState } from 'react';

const AdminPayment = () => {
	const [isPayment, setIsPayment] = useState([]);
	useEffect(() => {
		fetch('/api/payment')
			.then((res) => res.json())
			.then((data) => {
				setIsPayment(data.result);
			});
	}, []);
	console.log(isPayment);

	return (
		<div className="table-responsive">
			<table className="table table-zebra">
				<thead>
					<tr>
						<th>#</th>
						<th>Petain Name</th>
						<th>Petain Email</th>
						<th>Doctor</th>
						<th>payment Id</th>
					</tr>
				</thead>
				<tbody>
					{isPayment?.map((payment, index) => (
						<tr key={index}>
							<th>{index + 1}</th>
							<td data-label="Petain Name">{payment.petainName}</td>
							<td data-label="Petain Email">{payment.petainEmail}</td>
							<td data-label="Doctor">{payment.doctor}</td>
							<td data-label="payment Id">{payment.payment_id}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AdminPayment;
