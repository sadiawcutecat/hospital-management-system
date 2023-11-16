import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dbConnection } from "../../../../lib/db";
import { Doctor } from "../../../../lib/modal/modal";
import AdminPayment from "@/app/dashboard/adminpaymenthistory/page";

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
  await mongoose.connect(dbConnection);
  // const filter = { _id: doctorId };
  const updatedDoc = {
    $inc: { patientCount: 1 },
  };
  // const result = await Doctor.updateOne(filter,updatedDoc);
  const result = await Doctor.findByIdAndUpdate(doctorId, updatedDoc);
  // const result = [data];
  // console.log(result);

  return NextResponse.json({ result: [result], success: true });
};

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).end(); // Method Not Allowed
  }

  const userId = req.query.id;
  const filter = { _id: userId };

  try {
    // Connect to MongoDB
    await mongoose.connect(dbConnection);

    // Perform deletion using Mongoose model
    const result = await AdminPayment.deleteOne(filter);

    // Send response
    res.status(200).json({ result, message: 'Payment deleted', success: true });
  } catch (error) {
    console.error('Error deleting payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the MongoDB connection
    await mongoose.disconnect();
  }
}
