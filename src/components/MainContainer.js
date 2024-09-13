import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {

    const movies = useSelector(store => store.movies.nowPlayingMovies)
    if(!movies) return

    let mainMovie = movies[(new Date().getSeconds())%movies.length]

    return (
        <div>
            <VideoTitle title={mainMovie.title} overview={mainMovie.overview}  />
            <VideoBackground movieId={mainMovie.id} />

        </div>
    )
}

export default MainContainer