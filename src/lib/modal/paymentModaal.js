const { default: mongoose } = require("mongoose");

const paid = mongoose.Schema({
  payment_id: String,
  amount: Number,
  petainName: String,
  petainEmail: String,
  petainPhoto: String,
  doctor: String,
  doctorId: String,
  doctorEmail: String,
  doctorPhoto: String,
  date: String,
  status: String,
});

export const PaymentModal =
  mongoose.models.payments || mongoose.model("payments", paid);
