import express from 'express';
// import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.TMDB_API_KEY;

// Medium.jsx - Movie search
app.get('/api/search', async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res.status(400).json({ error: 'Query parameter is required' });

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
                query
            )}`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie data' });
    }
});

// MovieDetail.jsx - Get movie details by id
app.get('/api/movie/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movie details' });
    }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
