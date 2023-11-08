import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dbConnection } from "../../../lib/db";
import { UserSchema } from "../../../lib/modal/user";

export const POST = async (req) => {
  const userinfo = await req.json();
  const filter = {
    userEmail: userinfo.userEmail,
  };
  await mongoose.connect(dbConnection);
  const user = new UserSchema(userinfo);
  const existingUser = await UserSchema.findOne(filter);
  if (existingUser) {
    return NextResponse.json({ message: "user already exist" });
  }
  const result = await user.save();
  return NextResponse.json({ result, success: true });
};
