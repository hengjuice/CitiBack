const Banker = require('../models/bankerModel');
const mongoose = require('mongoose');

// Get all banker
const getBankers = async (req, res) => {
    const bankers = await Banker.find({}).sort({bankerId: 1});

    res.status(200).json(bankers);
}

// Get a single banker
const getBanker = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such banker'});
    };

    const banker = await Banker.findById(id);

    if (!banker) {
        return res.status(404).json({error: 'No such banker'});
    }

    res.status(200).json(banker);
}


// Create a new banker
const createBanker = async (req, res) => {
    const {bankerId, name, availability, appts} = req.body;

    // add doc to db
    try {
        const banker = await Banker.create({bankerId, name, availability, appts});
        res.status(200).json(banker);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}


// Delete a banker
const deleteBanker = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such banker'});
    };

    const banker = await Banker.findOneAndDelete({_id: id});

    if (!banker) {
        return res.status(404).json({error: 'No such banker'});
    }

    res.status(200).json({mssg: 'Banker deleted'});
}


// Update a banker
const updateBanker = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such banker'});
    };

    const banker = await Banker.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!banker) {
        return res.status(404).json({error: 'No such banker'});
    }

    res.status(200).json({mssg: 'Banker updated'});
}


module.exports = {
    getBankers,
    getBanker,
    createBanker,
    deleteBanker,
    updateBanker
}