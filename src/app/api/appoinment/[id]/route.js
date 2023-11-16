import { dbConnection } from "@/lib/db";
import { PaymentModal } from "@/lib/modal/paymentModaal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req,{params})=>{
    console.log(params);
const {id}= params;
await mongoose.connect(dbConnection);
const result = await PaymentModal.find({petainEmail : id});
console.log(result);
return NextResponse.json({result});
};