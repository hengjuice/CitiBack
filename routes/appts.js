const express = require('express');
const {
    getAppts,
    getAppt,
    createAppt,
    deleteAppt,
    updateAppt
} = require('../controllers/apptController');

const router = express.Router();

// GET all clients at '/api/appts/'
router.get("/", getAppts); 

// GET a single Appt
router.get("/:id", getAppt);

// POST a new Appt
router.post("/", createAppt);

// DELETE a Appt
router.delete("/:id", deleteAppt);

// UPDATE a Appt
router.patch("/:id", updateAppt);


module.exports = router;