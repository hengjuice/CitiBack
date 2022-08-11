const mongoose = require("mongoose");

const apptSchema = new mongoose.Schema ({
    apptId: String,
    date: Date,
    timeslot: String,
    clientId: Number,
    bankerId: Number,
    title: String
}); 

module.exports = mongoose.model("Appt", apptSchema);