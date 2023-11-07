import mongoose from "mongoose";

const doctor = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  study: String,
  specialist: String,
  position: String,
  place: String,
  rating: Number,
  price: Number,
  Chamber_Appointment: Object,
});
export const Doctor =
  mongoose.models.doctors || mongoose.model("doctors", doctor);
//   {
//     hospital: String,
//     address: String,
//     visitingHour: String,
//     appointment: String,
//     about: String,
//   },
