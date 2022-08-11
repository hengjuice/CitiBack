const Client = require('../models/clientModel');
const mongoose = require('mongoose');

// Get all clients
const getClients = async (req, res) => {
    const clients = await Client.find({}).sort({clientId: 1});

    res.status(200).json(clients);
}

// Get a single client
const getClient = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such client'});
    };

    const client = await Client.findById(id);

    if (!client) {
        return res.status(404).json({error: 'No such client'});
    }

    res.status(200).json(client);
}


// Create a new client
const createClient = async (req, res) => {
    const {clientId, name, appts, totalAssets, assetBreakdown} = req.body;

    // add doc to db
    try {
        const client = await Client.create({clientId, name, appts, totalAssets, assetBreakdown});
        res.status(200).json(client);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}


// Delete a client
const deleteClient = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such client'});
    };

    const client = await Client.findOneAndDelete({_id: id});

    if (!client) {
        return res.status(404).json({error: 'No such client'});
    }

    res.status(200).json({mssg: 'Client deleted'});
}


// Update a client
const updateClient = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such client'});
    };

    const client = await Client.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!client) {
        return res.status(404).json({error: 'No such client'});
    }

    res.status(200).json({mssg: 'Client updated'});
}


module.exports = {
    getClients,
    getClient,
    createClient,
    deleteClient,
    updateClient
}