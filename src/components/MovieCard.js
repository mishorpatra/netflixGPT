import { IMG_CDN } from "../utils/constants"

const MovieCard = ({ data }) => {

    const { poster_path, backdrop_path } = data
    if(!poster_path) return
    return (
        <div className="w-36 md:w-48">
            <img alt="movie poster" src={IMG_CDN + poster_path} />

        </div>
    )
}

export default MovieCard