require('dotenv').config();

const cors = require('cors')
const express = require('express');
const app = express(); 
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app
    .use(cors())
    .use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const rendezVousDispoRouter = require('./routes/rendezVousDispo');
app.use('/rendezVousDispo', rendezVousDispoRouter);

const rendezVousRouter = require('./routes/rendezVous');
app.use('/rendezVous', rendezVousRouter);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
