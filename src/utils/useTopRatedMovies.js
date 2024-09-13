import { useDispatch } from "react-redux"
import { API_OPTIONS } from "./constants"
import { addTopRatedMovies } from "./moviesSlice"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const fetchData = async () => {
        let data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        data = await data.json()
        dispatch(addTopRatedMovies(data?.results))
    } 

    fetchData()
}

export default useTopRatedMovies