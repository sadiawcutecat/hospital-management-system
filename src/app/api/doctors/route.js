import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { dbConnection } from '../../../lib/db';
import { Doctor } from '../../../lib/modal/modal';

export const GET = async () => {
	let data = [];
	try {
		await mongoose.connect(dbConnection);
		data = await Doctor.find();
	} catch (error) {
		data = { success: false };
	}
	return NextResponse.json({ result: data });
};

export const POST = async (req) => {
	const doctorData = await req.json();
	console.log(doctorData);
	await mongoose.connect(dbConnection);
	const doctors = new Doctor(doctorData);
	console.log(doctors);
	const result = await doctors.save();
	return NextResponse.json({ result, success: true });
};
