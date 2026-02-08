import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {

    const [worth, setWorth] = useState([])
    const [see, setSee] = useState([])
    const [wasted, setWasted] = useState([])


    useEffect(() => {

        const storedWorth = localStorage.getItem("worth")
        if (storedWorth) setWorth(JSON.parse(storedWorth))

        const storedSee = localStorage.getItem("see")
        if (storedSee) setSee(JSON.parse(storedSee))

        const storedWasted = localStorage.getItem("wasted")
        if (storedWasted) setWasted(JSON.parse(storedWasted))

    }, [])

    // Local Storage Sync

    useEffect(() => {
        localStorage.setItem('worth', JSON.stringify(worth))
    }, [worth])

    useEffect(() => {
        localStorage.setItem('see', JSON.stringify(see))
    }, [see])

    useEffect(() => {
        localStorage.setItem('wasted', JSON.stringify(wasted))
    }, [wasted])

    // Worth helper functions

    const addToWorth = movie => {
        setWorth(prev => [... prev, movie])
    }

    const removeFromWorth = (movieId) => {
        setWorth(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isWorth = (movieId) => {
        return worth.some(movie => movie.id === movieId)
    }

    // See helper functions

    const addToSee = movie => {
        setSee(prev => [... prev, movie])
    }

    const removeFromSee = (movieId) => {
        setSee(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isSee = (movieId) => {
        return see.some(movie => movie.id === movieId)
    }

    // Wasted helper functions

    const addToWasted = movie => {
        setWasted(prev => [... prev, movie])
    }

    const removeFromWasted = (movieId) => {
        setWasted(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isWasted = (movieId) => {
        return wasted.some(movie => movie.id === movieId)
    }

    // Context Value

    const value = {

        worth,
        addToWorth,
        removeFromWorth,
        isWorth,

        see,
        addToSee,
        removeFromSee,
        isSee,
    
        wasted,
        addToWasted,
        removeFromWasted,
        isWasted
        
    }
    

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}