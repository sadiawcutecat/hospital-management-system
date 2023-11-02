import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { dbConnection } from "../../../lib/db";
import { Doctor } from "../../../lib/modal/modal";

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
