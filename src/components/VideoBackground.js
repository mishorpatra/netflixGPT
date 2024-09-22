import { useSelector } from "react-redux"
import useMovieTrailer from "../utils/useMovieTrailer"

const VideoBackground = ({ movieId }) => {

    const trailer = useSelector(store => store.movies?.movieTrailer)
    useMovieTrailer(movieId)

    return (
        <div>
            <iframe 
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailer?.key}?si=roygqpSH4lKn-AhK&autoplay=1&mute=1`}
                title="YouTube video player" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" r
                 eferrerpolicy="strict-origin-when-cross-origin" 
            ></iframe>
        </div>
    )
}

export default VideoBackground