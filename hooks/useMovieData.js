import { useState } from "react"
import api_key from "../secret/api";
    
const useMovieData = () => {
    const [movies, setMovies] = useState([])

    const getMovieData = async (query) => {
        const url = "https://api.themoviedb.org/3/search/movie?query=" + query + "&include_adult=true&language=en-US&page=1"

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + api_key
            }
        }

        try {
            const response = await fetch(url, options)
            if (response.ok) {
                const json = await response.json()
                setMovies(json.results)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return { movies, getMovieData }
}

export default useMovieData