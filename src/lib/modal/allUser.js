import mongoose from "mongoose";

const allUser = mongoose.Schema({
  userName: String,
  userEmail: String,
  userPhoto: String,
  userRole: String,
});
export const AllUser = mongoose.models.users || mongoose.model("users", allUser);
console.log(AllUser);
