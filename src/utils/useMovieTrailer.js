import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "./constants"
import { addMovieTrailer } from "./moviesSlice"
import { useEffect } from "react"


const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()
    const { movieTrailer } = useSelector(store => store.movies)
    
    const fetchData = async () => {
        let data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        data = await data.json()
        let trailer = data.results.filter(elm => elm.type === "Trailer")[0] || data.results[0]
        dispatch(addMovieTrailer(trailer))
    }

    useEffect(() => {
        !movieTrailer && fetchData()
    }, [])

}

export default useMovieTrailer