import mongoose from "mongoose";
import { dbConnection } from "../../../lib/db";
import { NextResponse } from "next/server";
import { Patient } from "@/lib/modal/patients";



export async function GET(){
    let patientData = []
    try{
        await mongoose.connect(dbConnection);

        const patientData = await Patient.find();
    }catch(error){
        patientData = {success: false}
    }
  
    

    return NextResponse.json({result:patientData})
}


export async function POST(req){
    const loadPatientData = await req.json();
    // console.log(loadPatientData);

    await mongoose.connect(dbConnection);
    let patient = new Patient(loadPatientData);
    // console.log(patient);

    const result = await patient.save();
    return NextResponse.json({result, success:true})
}