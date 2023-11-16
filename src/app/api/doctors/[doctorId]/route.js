import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dbConnection } from "../../../../lib/db";
import { Doctor } from "../../../../lib/modal/modal";

export const GET = async (req, cont) => {
  // console.log(cont.params.doctorId);
  const doctorId = cont.params.doctorId;
  const filter = { _id: doctorId };
  await mongoose.connect(dbConnection);
  const result = await Doctor.findOne(filter);
  // const result = [data];
  // console.log(result);

  return NextResponse.json({ result: [result], success: true });
};
export const PUT = async (req, cont) => {
  const doctorId = cont.params.doctorId;
  console.log(cont.params.doctorId);
  const filter = {
    _id: new ObjectId(doctorId),
  };
  await mongoose.connect(dbConnection);
  // const filter = { _id: doctorId };
  const updatedDoc = {
    $inc: { patientCount: 1 },
  };
  // const result = await Doctor.updateOne(filter,updatedDoc);
  const result = await Doctor.findByIdAndUpdate(filter, updatedDoc);
  // const result = [data];
  // console.log(result);

  return NextResponse.json({ result: [result], success: true });
};
