const express = require('express');
const {
    getBankers,
    getBanker,
    createBanker,
    deleteBanker,
    updateBanker
} = require('../controllers/bankerController');

const router = express.Router();

// GET all clients at '/api/clients/'
router.get("/", getBankers); 

// GET a single client
router.get("/:id", getBanker);

// POST a new client 
router.post("/", createBanker);

// DELETE a client
router.delete("/:id", deleteBanker);

// UPDATE a client
router.patch("/:id", updateBanker);


module.exports = router;