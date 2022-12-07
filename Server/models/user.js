const mongoose = require('mongoose')

const { Schema, model} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

const userModel = model('user', userSchema);
module.exports = userModel;
