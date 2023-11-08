import mongoose from "mongoose";

const user = mongoose.Schema({
  userRole: String,
});
export const User = mongoose.models.users || mongoose.model("user", user);
console.log(User);
