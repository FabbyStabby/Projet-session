const mongoose = require('mongoose')

const { Schema, model} = mongoose;

const rendezVousDispoSchema = new Schema({
    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    available: {
        type: Boolean,
        required: true
    }
})

const rendezVousDispoModel = model('rendezVousDispo', rendezVousDispoSchema);
module.exports = rendezVousDispoModel;
