const express = require('express');
const router = express.Router();
const User = require('../models/user')

// GET http://localhost:3000/users
router.get('/', async (req, res) =>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET /users/id
router.get('/:username', getUser, (req,res) => {
    res.json(res.user)
})

// POST /users/login
router.post('/login', async (req, res) => {
    
    try {
        
        User.findOne({ 
            username: req.body.username,
            password: req.body.password
        }).exec((err, result) => {
            if (err) {
                res.status(500).json({ message: err.message })
                return;
            }
            if (!result) {
                res.status(403).json({ message: "Invalide credentials" })
                return;
            }
            console.log(result);
            res.json({ 
                username: result.username,
                prenom: result.prenom,
                nom: result.nom,
                phone: result.phone,
                email: result.email,
                
            })
            return
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// POST /users/new
router.post('/new', async (req, res) => {
    const user = new User ({
        username: req.body.username,
        password: req.body.password,
        prenom: req.body.prenom,
        nom: req.body.nom,
        phone: req.body.phone,
        email: req.body.email
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

// Delete user
router.delete('/:username', (req, res) =>{
    
})

async function getUser(req, res, next) {
    try {
        user = await User.findById(req.params.username)
        if (user == null){
            return res.status(404).json ({ message: 'Cannot find user'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

module.exports = router