import { useSelector } from "react-redux"
import useNowPlayingMovie from "../utils/useNowPlayingMovie"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../utils/usePopularMovies"
import useUpcomingMovies from "../utils/useUpcomingMovies"
import useTopRatedMovies from "../utils/useTopRatedMovies"

const Browse = () => {

    useNowPlayingMovie()
    usePopularMovies()
    useUpcomingMovies()
    useTopRatedMovies()


    return (
        <div>
            <Header />

            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse