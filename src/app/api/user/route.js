import mongoose from "mongoose";
import { dbConnection } from "../../../lib/db";
import { UserSchema } from "../../../lib/modal/user";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const userinfo = await req.json();

  await mongoose.connect(dbConnection);
  const user = new UserSchema(userinfo);
  const result = await user.save();
  return NextResponse.json({ result, success: true });
};
