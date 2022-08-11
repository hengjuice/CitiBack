const mongoose = require("mongoose");

const apptSchema = new mongoose.Schema ({
    apptId: String,
    endDate: Date,
    startDate: Date,
    notes: String,
    clientId: Number,
    bankerId: Number,
    title: String
}); 

module.exports = mongoose.model("Appt", apptSchema);