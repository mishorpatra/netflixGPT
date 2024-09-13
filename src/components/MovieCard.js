import { IMG_CDN } from "../utils/constants"

const MovieCard = ({ data }) => {

    const { poster_path, backdrop_path } = data
    return (
        <div>
            <img alt="movie poster" src={IMG_CDN + backdrop_path} />

        </div>
    )
}

export default MovieCard