import { dbConnection } from "@/lib/db"
import { Prescription } from "@/lib/modal/prescription";
import mongoose from "mongoose"
import { NextResponse } from "next/server";

export const POST = async(req)=>{
  
    const prescription = await req.json();
    try {

    await mongoose.connect(dbConnection);
   const prescriptionSchema = new Prescription(prescription);
   const result = await prescriptionSchema.save();
return NextResponse.json({result});
    
  } catch (error) {
    return NextResponse.json({error: error});
  }
}

