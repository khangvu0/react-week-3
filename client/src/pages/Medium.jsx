import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Medium.css';

export default function Medium() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const searchMovies = async (e) => {
        e.preventDefault();
        if (!query) return;

        setLoading(true);
        setError('');
        setSelectedMovie(null);

        try {
            const res = await fetch(
                `https://react-week-3.onrender.com/api/search?query=${encodeURIComponent(
                    query
                )}`
            );
            const data = await res.json();

            if (data.results?.length === 0) {
                setError('No movies found.');
                setMovies([]);
            } else {
                setMovies(data.results || []);
            }
        } catch {
            setError('Failed to fetch movies.');
        } finally {
            setLoading(false);
        }
    };

    const getMovieDetails = async (id) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://react-week-3.onrender.com/api/movie/${id}`
            );
            const data = await res.json();
            setSelectedMovie(data);
        } catch {
            setError('Failed to fetch movie details.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="medium-container">
            <h1 class="title">Movie Search</h1>
            <p class="directions">Enter in a movie title.</p>

            <form onSubmit={searchMovies} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {!selectedMovie ? (
                <div className="movie-grid">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="movie-card"
                            onClick={() => getMovieDetails(movie.id)}>
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                                        : 'https://via.placeholder.com/300x450?text=No+Image'
                                }
                                alt={movie.title}
                            />
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="movie-detail">
                    <button
                        onClick={() => setSelectedMovie(null)}
                        className="back-btn">
                        ← Back to Results
                    </button>
                    <img
                        src={
                            selectedMovie.poster_path
                                ? `https://image.tmdb.org/t/p/w400${selectedMovie.poster_path}`
                                : 'https://via.placeholder.com/400x600?text=No+Image'
                        }
                        alt={selectedMovie.title}
                    />
                    <div className="movie-info">
                        <h1>{selectedMovie.title}</h1>
                        <p>
                            <strong>Release Date:</strong>{' '}
                            {selectedMovie.release_date}
                        </p>
                        <p>
                            <strong>Overview:</strong> {selectedMovie.overview}
                        </p>
                        <p>
                            <strong>Rating:</strong>{' '}
                            {selectedMovie.vote_average}/10
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
