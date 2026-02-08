import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/TimeWasted.css";

function TimeWasted() {

    const {wasted} = useMovieContext();

    if (wasted.length > 0) {
        return (
            <div className="wasted">
                <div className="movies-grid">
                {wasted.map((movie) => (
                    <MovieCard movie={movie} key ={movie.id} />
                ))}
                </div>
            </div>
        );
    }

    return (
        <div className="wasted-empty">
            <p>No movies where added to your this list</p>
        </div>
    );
};

export default TimeWasted;