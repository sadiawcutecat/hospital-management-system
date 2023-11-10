import { dbConnection } from '@/lib/db';
import { reviewSchema } from '@/lib/modal/review';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
	const review = await req.json();
	await mongoose.connect(dbConnection);
	const reviews = new reviewSchema(review);
	console.log(reviews);
	const result = await reviews.save();
	return NextResponse.json({ result, success: true });
};
export const GET = async () => {
	await mongoose.connect(dbConnection);
	const result = await reviewSchema.find();
	return NextResponse.json({ result, success: true });
};
