import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "./moviesSlice"
import { API_OPTIONS } from "./constants"


const useNowPlayingMovie = () => {

    const dispatch = useDispatch()
    const { nowPlayingMovies } = useSelector(store => store.movies)

    const fetchData = async () => {
        let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
       
        const data = await response.json()
        dispatch(addNowPlayingMovies(data.results))

    }
    useEffect(() => {
        !nowPlayingMovies && fetchData()
    }, [])
}

export default useNowPlayingMovie