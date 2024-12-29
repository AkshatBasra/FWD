const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

app.use('/', require('./routes/getlocations.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));