const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apptsDB', { useNewUrlParser: true });

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Client Booking Database (mock-client-pov) 
const clientSchema = new mongoose.Schema ({
    clientId: Number, 
    name: String,
    appts: Object,
    totalAssets: Object,
    assetBreakdown: Object
}); 

const Client = mongoose.model("Client", clientSchema);

const client = new Client ({
    "clientId": 1,
    "name": "Colin",
    "appts": {"appt_1": "001"},
    "totalAssets": {"TSLA": 15, "AAPL": 30, "BTC": 0.01},
    "assetBreakdown": {
        "stocks": 50,
        "bonds": 30,
        "crypto": 20
    }
});
client.save();

// Banker Appointment Database (mock-banker-pov)
const bankerSchema = new mongoose.Schema ({
    bankerId: Number,
    name: String,
    availability: Object, //or should create a seperate db for banker info to include their availability
    appts: Object
});

const Banker = mongoose.model("Banker", bankerSchema);

const banker = new Banker ({
    "bankerId": 1,
    "name": "Zaki",
    "availability": {
        "Monday": {"8am": true, "9am": false, "10am": false, "11am": true},
        "Tuesday": {"8am": true, "9am": true, "10am": false, "11am": false},
        "Wednesday": {"8am": true, "9am": false, "10am": false, "11am": true},
        "Thursday": {"8am": true, "9am": true, "10am": false, "11am": false},
        "Friday": {"8am": false, "9am": false, "10am": false, "11am": false},
},
    "appts": {"appt_1": "001", "appt_2": "002", "appt_3": "003"}
});
banker.save();


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Appointments Database
// const ApptSchema = new mongoose.Schema ({
//     apptId: String,
//     date: Date,
//     timeslot: String,
//     clientId: Number,
//     bankerId: Number,
//     title: String
// });

// const Appt = mongoose.model("Appt", ApptSchema);

// const appt = new Appt ({
//     "apptId": "001",
//     "date": "2022-01-01",
//     "timeslot": "8am",
//     "clientId": "001",
//     "bankerId": "002",
//     "title": "Tesla stock split update meeting"
// });
// info.save();


// console.log("Successfully connected");






// const client = new Client ({
//     clientId: 1,
//     name: "Colin",
//     appts: {'appt_1': 001},
//     totalAssets: {'TSLA': 15, 'AAPL': 30, 'BTC': 0.01},
//     assetBreakdown: {
//         stocks: 50,
//         bonds: 30,
//         crypto: 20
//     }
// });
// client.save();


// const banker = new Banker ({
//     bankerId: 1,
//     name: 'Zaki',
//     availability: {
//         'Monday': {'8am': true, '9am': false, '10am': false, '11am': true},
//         'Tuesday': {'8am': true, '9am': true, '10am': false, '11am': false},
//         'Wednesday': {'8am': true, '9am': false, '10am': false, '11am': true},
//         'Thursday': {'8am': true, '9am': true, '10am': false, '11am': false},
//         'Friday': {'8am': false, '9am': false, '10am': false, '11am': false},
// },
//     appts: {'appt_1': '001', 'appt_2': '002', 'appt_3': '003'}
// });
// banker.save();


// const appt = new Appt ({
//     apptId: '001',
//     date: '2022-01-01',
//     timeslot: '8am',
//     clientId: ,
//     bankerId: ,
//     title: 'Tesla stock split update meeting'
// });
// info.save();