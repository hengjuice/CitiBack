const Appt = require('../models/apptModel');
const mongoose = require('mongoose');

// Get all appt
const getAppts = async (req, res) => {
    const appts = await Appt.find({}).sort({apptId: 1});

    res.status(200).json(appts);
}

// Get a single appt
const getAppt = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appt'});
    };

    const appt = await Appt.findById(id);

    if (!appt) {
        return res.status(404).json({error: 'No such appt'});
    }

    res.status(200).json(appt);
}


// Create a new appt
const createAppt = async (req, res) => {
    const {apptId, date, timeslot, clientId, bankerId, title} = req.body;

    // add doc to db
    try {
        const appt = await Appt.create({apptId, date, timeslot, clientId, bankerId, title});
        res.status(200).json(appt);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}


// Delete a appt
const deleteAppt = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appt'});
    };

    const appt = await Appt.findOneAndDelete({_id: id});

    if (!appt) {
        return res.status(404).json({error: 'No such appt'});
    }

    res.status(200).json({mssg: 'Appt deleted'});
}


// Update a appt
const updateAppt = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appt'});
    };

    const appt = await Appt.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!appt) {
        return res.status(404).json({error: 'No such appt'});
    }

    res.status(200).json({mssg: 'Appt updated'});
}


module.exports = {
    getAppts,
    getAppt,
    createAppt,
    deleteAppt,
    updateAppt
}