import { dbConnection } from "@/lib/db";
import { Doctor } from "@/lib/modal/modal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(dbConnection);
  const result = await Doctor.find().sort({ patientCount: -1 }).limit(3);
  // const result = [data];
  // console.log(result);

  return NextResponse.json({ result, success: true });
};
