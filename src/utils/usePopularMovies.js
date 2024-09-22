import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "./constants"
import { addPopularMovies } from "./moviesSlice"
import { useEffect } from "react"


const usePopularMovies = () => {
    const dispatch = useDispatch()

    const { popularMovies } = useSelector(store => store.movies)

    const fetchData = async () => {
        let data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        data = await data.json()
        dispatch(addPopularMovies(data?.results))
    } 

    useEffect(() => {
        !popularMovies && fetchData()

    }, [])
}

export default usePopularMovies