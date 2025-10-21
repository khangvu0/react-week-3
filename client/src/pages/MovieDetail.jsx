import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Medium.css';

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
                );
                const data = await res.json();
                setMovie(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchMovieDetails();
    }, [id]);

    if (loading) return <p>Loading movie details...</p>;
    if (!movie) return <p>Movie not found.</p>;

    return (
        <div className="movie-detail">
            <Link to="/medium" className="back-btn">
                ← Back to Search
            </Link>
            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                        : 'https://via.placeholder.com/400x600?text=No+Image'
                }
                alt={movie.title}
            />
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>
                    <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>
                    <strong>Overview:</strong> {movie.overview}
                </p>
                <p>
                    <strong>Rating:</strong> {movie.vote_average}/10
                </p>
            </div>
        </div>
    );
}
