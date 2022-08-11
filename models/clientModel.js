const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema ({
    clientId: Number, 
    name: String,
    appts: Object,
    totalAssets: Object,
    assetBreakdown: Object
}); 

module.exports = mongoose.model("Client", clientSchema);