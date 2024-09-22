import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "./constants"
import { addTopRatedMovies } from "./moviesSlice"
import { useEffect } from "react"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const { topRatedMovies } = useSelector(store => store.movies)

    const fetchData = async () => {
        let data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        data = await data.json()
        dispatch(addTopRatedMovies(data?.results))
    } 

    useEffect(() => {
        !topRatedMovies && fetchData()

    }, [])
}

export default useTopRatedMovies