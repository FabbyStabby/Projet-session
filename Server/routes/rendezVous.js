const express = require('express');
const router = express.Router();
const RendezVous = require('../models/rendezVous')

// GET rendez vous du user

router.get('/', findRendezVousByUsername, (req, res) => {
    res.send(res.rv)
})

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

// DELETE rendez vous du user

router.delete('/delete', findRendezVousByUsername ,async (req, res) => {
    try {
    await res.rv.remove()
    res.send('Rendez-Vous annuler')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function findRendezVousByUsername (req, res, next) {
    const username = req.query['username']
    try {
        rv = await RendezVous.findOne({
            username: username
        })
        
        if (rv == null){
            return res.status(404).json({ message: 'Vous n\'avez pas de Rendez-Vous'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
    res.rv = rv
    next();
}


module.exports = router