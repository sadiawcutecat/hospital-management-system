import mongoose from "mongoose";

const patientsData = mongoose.Schema({
    name: String,
    picture: String,
    serial: String,
    purpose: String,
    date: String,
    time: String,
    type: String,
    paid: String,
    email: String,
    profession: String,
    comments: String,
    location: String,
    contact: String
})

export const Patient = mongoose.models.patients || mongoose.model("patients", patientsData);
