import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { AllUser } from "../../../../lib/modal/allUser";
import { dbConnection } from "../../../../lib/db";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newRole: userRole } = await request.json();
  await mongoose.connect(dbConnection);
  await AllUser.findByIdAndUpdate(id, { userRole });
  return NextResponse.json({ message: "Role updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await mongoose.connect(dbConnection);
  const user = await AllUser.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
  
  
