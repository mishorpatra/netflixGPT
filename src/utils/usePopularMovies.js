import { useDispatch } from "react-redux"
import { API_OPTIONS } from "./constants"
import { addPopularMovies } from "./moviesSlice"


const usePopularMovies = () => {
    const dispatch = useDispatch()

    const fetchData = async () => {
        let data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        data = await data.json()
        dispatch(addPopularMovies(data?.results))
    } 

    fetchData()
}

export default usePopularMovies