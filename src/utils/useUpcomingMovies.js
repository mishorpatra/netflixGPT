import { useDispatch } from "react-redux"
import { API_OPTIONS } from "./constants"
import { addUpcomingMovies } from "./moviesSlice"


const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const fetchData = async () => {
        let data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        data = await data.json()
        dispatch(addUpcomingMovies(data?.results))
    } 

    fetchData()
}

export default useUpcomingMovies