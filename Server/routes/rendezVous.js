const express = require('express');
const router = express.Router();
const RendezVous = require('../models/rendezVous')

// POST un nouveau rendezVous pour un user

router.post('/new', async (req, res) =>{
    const rv = new RendezVous ({
        date: req.body.date,
        time: req.body.time,
        username: req.body.username,
    })

    try {
        const newRendezVous = await rv.save()
        res.status(201).json(newRendezVous)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})




module.exports = router