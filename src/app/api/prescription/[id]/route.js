import { dbConnection } from "@/lib/db";
import { Prescription } from "@/lib/modal/prescription";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const {id}= params;
	await mongoose.connect(dbConnection);
	const result = await Prescription.find({email : id});
   
	return NextResponse.json({ result:[result], success: true });
};