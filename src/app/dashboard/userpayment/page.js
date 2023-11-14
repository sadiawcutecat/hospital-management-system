'use client';
import useAuth from '@/Components/hooks/useAuth';
import { useEffect, useState } from 'react';

const UserPayment = () => {
	const { user } = useAuth();
	console.log(user.email);
	const [isPayment, setIsPayment] = useState([]);
	useEffect(() => {
		fetch(`/api/payment`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setIsPayment(data.result);
			});
	}, [user.email]);

	const payments = isPayment.filter((p) => p.petainEmail === user.email);
	console.log(payments);

	return (
		<div className="table-responsive">
			<table className="table table-zebra">
				<thead>
					<tr>
						<th>#</th>
						<th>Petain Name: </th>
						<th>Petain Email: </th>
						<th>Doctor: </th>
						<th>payment Id: </th>
					</tr>
				</thead>
				<tbody>
					{payments?.map((payment, index) => (
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

export default UserPayment;
