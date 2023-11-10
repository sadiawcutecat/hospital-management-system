import { dbConnection } from "@/lib/db";
import { UserSchema } from "@/lib/modal/user";
import mongoose from "mongoose";
// import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req, { params }) => {
  console.log(params);
  const filter = {
    userEmail: params.userId,
  };
  await mongoose.connect(dbConnection);
  const result = await UserSchema.findOne(filter);
  return NextResponse.json({ result, success: true });
};
