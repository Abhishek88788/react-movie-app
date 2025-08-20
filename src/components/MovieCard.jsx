
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import ColorThief from "color-thief-browser"

function MovieCard({ movie, onPosterHover, onPosterLeave }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    function handleMouseEnter(e) {
        const img = e.target;
        if (img.complete && img.naturalWidth !== 0) {
            try {
                const colorThief = new ColorThief();
                const dominantColor = colorThief.getColor(img);
                if (onPosterHover) onPosterHover(dominantColor);
            } catch (err) {
                // If color extraction fails, do nothing
            }
        } else {
            img.onload = () => {
                try {
                    const colorThief = new ColorThief();
                    const dominantColor = colorThief.getColor(img);
                    if (onPosterHover) onPosterHover(dominantColor);
                } catch (err) {
                    // If color extraction fails, do nothing
                }
            };
        }
    }

    function handleMouseLeave() {
        if (onPosterLeave) onPosterLeave()
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                crossOrigin="anonymous"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ display: 'block', width: '100%' }}
                onError={e => { e.target.crossOrigin = null; }}
            />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard