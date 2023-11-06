import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { dbConnection } from "../../../../lib/db";
import { AllUser } from "../../../../lib/modal/allUser";

export const GET = async (req, cont) => {
  // console.log(cont.params.doctorId);
  const doctorId = cont.params.doctorId;
  const filter = { _id: doctorId };
  await mongoose.connect(dbConnection);
  const result = await AllUser.findOne(filter);
  // const result = [data];
  console.log(result);

  return NextResponse.json({ result: [result], success: true });
};
