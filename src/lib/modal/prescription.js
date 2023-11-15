const { default: mongoose } = require("mongoose");

 const prescriptionData = mongoose.Schema({
    name: String,
    email: String,
    Date_Time: String,
    Purpose: String,
    Type: String,
    Prescription: String,
    doctorPhoto : String,
    doctorName : String
 })

 export const Prescription = mongoose.models.prescriptions || mongoose.model("prescriptions", prescriptionData);