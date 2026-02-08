import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/WorthIt.css";

function WorthIt() {

    const {worth} = useMovieContext();

    if (worth.length > 0) {
        return (
            <div className="worth">
                <div className="movies-grid">
                {worth.map((movie) => (
                    <MovieCard movie={movie} key ={movie.id} />
                ))}
                </div>
            </div>
        );
    }

    return (
        <div className="worth-empty">
            <p>No movies where added to your this list</p>
        </div>
    );
};

export default WorthIt;