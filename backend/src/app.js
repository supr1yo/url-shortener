const express =require('express');
const dotenv = require('dotenv');
dotenv.config();
const database = require('./config/database');
const Url = require('./models/URL');
const generateShortUrl = require('./middleware/base62');

const app = express();
const PORT = 8080 || process.env.PORT;

app.use(express.json());

// create short url
app.post('/create', async (req, res) => {
    const { url } = req.body;

    try {
        await database();
        const shortenUrl = new Url({
            url,
            uid: generateShortUrl(url)
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
app.get('/:code', async(req, res) => {
    const { code } = req.params;

    try {
        await database();
        const data = await Url.findOne({
            uid: code
        });
        res.status(201).json({
            url: data.url
        });
    } catch (error) {
        console.log(error);
    }
    
});


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
});