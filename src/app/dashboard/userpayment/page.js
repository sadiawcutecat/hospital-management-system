'use client';
import useAuth from '@/Components/hooks/useAuth';
import { useEffect, useState } from 'react';

const UserPayment = () => {
	const { user } = useAuth();
	console.log(user.email);
	const [isPayment, setIsPayment] = useState([]);
	useEffect(() => {
		fetch(`/api/payment/${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				setIsPayment(data.result);
			});
	}, []);
	console.log(isPayment);
	return <div />;
};

export default UserPayment;
