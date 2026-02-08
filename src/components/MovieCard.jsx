import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard ({movie}){

    const {
        isSee, addToSee, removeFromSee,
        isWorth, addToWorth, removeFromWorth,
        isWasted, addToWasted, removeFromWasted
    } = useMovieContext()

    // Worth it

    const worth = isWorth(movie.id)

    function onWorthClick(e){
        e.preventDefault()
        if (worth) removeFromWorth(movie.id)
        else addToWorth(movie)
    }

    // To be seen

    const see = isSee(movie.id)

    function onSeeClick(e){
        e.preventDefault()
        if (see) removeFromSee(movie.id)
        else addToSee(movie)
    }

    // Wasted Time
    const wasted = isWasted(movie.id)

    function onWastedClick(e){
        e.preventDefault()
        if (wasted) removeFromWasted(movie.id)
        else addToWasted(movie)
    }

    return(
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-btns">
                    <button className={`worth-btn ${worth ? "active" : ""}`}
                    onClick={onWorthClick}>&#128077;</button>
                    <button className={`see-btn ${see ? "active" : ""}`}
                    onClick={onSeeClick}>&#128064;</button>
                    <button className={`wasted-btn ${wasted ? "active" : ""}`}
                    onClick={onWastedClick}>&#128169;</button>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard;