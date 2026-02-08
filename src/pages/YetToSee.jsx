import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/YetToSee.css";

function YetToSee() {

    const {see} = useMovieContext();

    if (see.length > 0) {
        return (
            <div className="see">
                <div className="movies-grid">
                {see.map((movie) => (
                    <MovieCard movie={movie} key ={movie.id} />
                ))}
                </div>
            </div>
        );
    }

    return (
        <div className="see-empty">
            <p>No movies where added to your this list</p>
        </div>
    );
};

export default YetToSee;