import { dbConnection } from "@/lib/db";
import { PaymentModal } from "@/lib/modal/paymentModaal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const paidInfo = params.drPatient;
  console.log(paidInfo);
  const filter = {
    doctorEmail: paidInfo,
  };
  await mongoose.connect(dbConnection);
  const result = await PaymentModal.find(filter);
  return NextResponse.json({ result: [result], success: true });
};
// export const GET = async () => {
// 	await mongoose.connect(dbConnection);
// 	const result = await PaymentModal.find();
// 	return NextResponse.json({ result, success: true });
// };
