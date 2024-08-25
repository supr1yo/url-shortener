import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 8080 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.post('/create', (req, res) => {
    const { url } = req.body;
    res.status(200).json({
        'Received': url
    });
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(201).json({
        'ID': id
    });
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
});