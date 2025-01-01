const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json()); // For parsing application/json

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected: server.js'))
    .catch(err => console.error('MongoDB connection error:', err));


app.use('/', require('./routes/getlocations.js'));
app.use('/', require('./routes/register.js'));
app.use('/', require('./routes/login.js'));
app.use('/', require('./routes/favorites.js'));
app.use('/', require('./routes/getfavorites.js'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));