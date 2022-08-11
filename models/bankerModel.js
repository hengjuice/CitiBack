const mongoose = require("mongoose");

const bankerSchema = new mongoose.Schema ({
    bankerId: Number,
    name: String,
    availability: Object, 
    appts: Object
});

module.exports = mongoose.model("Banker", bankerSchema);