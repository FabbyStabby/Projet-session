const mongoose = require('mongoose')

const { Schema, model} = mongoose;

const rendezVousSchema = new Schema({
    date: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required:  true,
    },

    username: {
        type: String,
        required: true,
        index: { unique: true},
    }
})

const rendezVousModel = model('rendezVous', rendezVousSchema);
module.exports = rendezVousModel;