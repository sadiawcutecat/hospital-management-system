import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { dbConnection } from "../../../lib/db";
import { AllUser } from "../../../lib/modal/allUser";

export const GET = async () => {
  let data = [];
  try {
    await mongoose.connect(dbConnection);
    data = await AllUser.find();
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data });
};

