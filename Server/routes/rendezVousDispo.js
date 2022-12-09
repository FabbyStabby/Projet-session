const express = require('express');
const router = express.Router();
const RendezVousDispo = require('../models/rendezVousDispo')



// GET all times by date

router.get('/', async (req, res) => {
    const date = req.query['date']
    try {
        RendezVousDispo.find({
            date: date,
            available: true
        }).sort({time: 1 }).exec((err, result) => {
            if (err){
                res.status(500).json({ message: err.message })
                return;
            }
            if (!result){
                res.status(403).json({ message: "No times found"})
                return;
            }
        
            res.send(result.map((e) => e.time))
            return;
        });
    } catch (err) {
        res.status(500).json ({ message: err.message })
    }
})

// POST new rendez-vous

router.post('/new', async (req, res) => {
    const rvd =  new RendezVousDispo ({
        date: req.body.date,
        time: req.body.time,
        available: req.body.available
    })

    try {
        const newRendezVousDispo = await rvd.save()
        res.status(201).json(newRendezVousDispo);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.put('/updateAvailable', (req, res) =>{
   
    try {
    RendezVousDispo.findOneAndUpdate({
        date: req.body.date,
        time: req.body.time
    },
    { available: req.body.available },{ new: true } , (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
        res.send(result)
    }) 
    } catch (err){
        res.status(500).json({message: err.message})
    }

})

module.exports = router