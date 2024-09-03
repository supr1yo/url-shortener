const express =require('express');
const dotenv = require('dotenv');
dotenv.config();
const database = require('./config/database');
const Url = require('./models/URL');

const app = express();
const PORT = 8080 || process.env.PORT;

let shortUrl = 'test';
app.use(express.json());

// create short url
app.post('/create', async (req, res) => {
    const { baseUrl } = req.body;

    try {
        await database();
        const shortenUrl = new Url({
            baseUrl,
            shortUrl
        });
        await shortenUrl.save();

        return res.status(201).json({
            'message': 'Success.'
        });

    } catch (error) {
        console.log(error);
    }


    res.status(200).json({
        'Received': url
    });
});


// returns main url
app.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(201).json({
        'ID': id
    });
});



app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
});