import { useSelector } from "react-redux"
import useNowPlayingMovie from "../utils/useNowPlayingMovie"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../utils/usePopularMovies"
import useUpcomingMovies from "../utils/useUpcomingMovies"
import useTopRatedMovies from "../utils/useTopRatedMovies"
import GptSearch from "./GptSearch"

const Browse = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    useNowPlayingMovie()
    usePopularMovies()
    useUpcomingMovies()
    useTopRatedMovies()


    return (
        <div>
            <Header />
            
            {
                showGptSearch ?
                <GptSearch />:
                <>
                    {/* <MainContainer />
                    <SecondaryContainer /> */}
                    <div>hiii</div>
                </>
                
            }

            {/* <MainContainer />
            <SecondaryContainer /> */}
        </div>
    )
}

export default Browse