import { useSelector } from "react-redux"
import MovieList from "./MovieList"



const GptMovieSuggessions = ({ query }) => {

    const { searchResults } = useSelector(store => store.gpt)
    if(query === "") return
    return (
        <div className="p-4 m-4 bg-black w-[100%] bg-opacity-80">
            <MovieList title={`Search results for (${query})`} movies={searchResults} />
        </div>
    )
}

export default GptMovieSuggessions