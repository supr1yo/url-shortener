const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = 8080 || process.env.PORT;

app.use(express.json());
app.use(cors());


// Create short url
app.use('/create', require('./routes/url/create'));

// Get base url with uid
app.use('/', require('./routes/url/get'));



app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
