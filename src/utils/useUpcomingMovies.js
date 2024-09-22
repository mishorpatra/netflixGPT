import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "./constants"
import { addUpcomingMovies } from "./moviesSlice"
import { useEffect } from "react"


const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const { upcomingMovies } = useSelector(store => store.movies)

    const fetchData = async () => {
        let data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        data = await data.json()
        dispatch(addUpcomingMovies(data?.results))
    } 

    useEffect(() => {
        !upcomingMovies && fetchData()

    })
}

export default useUpcomingMovies