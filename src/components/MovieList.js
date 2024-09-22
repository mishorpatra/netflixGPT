import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"


const MovieList = ({ title, movies }) => {

    return (
        <div className="px-6">
            <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
            <div className="overflow-x-scroll">
                <div className="flex gap-4 w-max">
                {
                    movies?.map(elm => (
                        <MovieCard key={elm.id} data={elm} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default MovieList