import { useSelector } from "react-redux"
import useNowPlayingMovie from "../utils/useNowPlayingMovie"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {

    useNowPlayingMovie()


    return (
        <div>
            <Header />

            <div>
                <MainContainer />
                <SecondaryContainer />
            </div>
        </div>
    )
}

export default Browse