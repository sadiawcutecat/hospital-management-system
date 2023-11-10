import { dbConnection } from "@/lib/db";
import { PaymentModal } from "@/lib/modal/paymentModaal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req)=>{
    const paidInfo = await req.json();

    await mongoose.connect(dbConnection)
    const pay = new PaymentModal(paidInfo)
    const result = await pay.save()

    return NextResponse.json({result,success:true})
}