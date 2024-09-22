import { useDispatch, useSelector } from "react-redux"
import { langs } from "../utils/languageConstants"
import { useRef } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addSearchResults } from "../utils/gptSlice"
import GptMovieSuggessions from "./GptMovieSuggesions"
import { useState } from "react"

const GptSearchBar = () => {

    const lang = useSelector(store => store.gpt.language)
    const search = useRef()
    const dispatch = useDispatch()

    const [query, setQuery] = useState("")

    const handleSearch = async (event) => {
        event.preventDefault()

        
        setQuery(search.current.value)
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.current.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        let data = await response.json()

        dispatch(addSearchResults(data.results))
  
    }

    return (
        <div className="pt-[50%] md:pt-[10%] px-4 flex items-center flex-col">
            <form onSubmit={handleSearch} className="bg-black w-full md:w-1/2 grid grid-cols-12">
                <input ref={search} className="col-span-7 p-4 m-4" placeholder={langs[lang].placeholderText} />
                <button type="submit" className="col-span-5 m-4 py-2 px-6 bg-red-700 rounded-lg text-white">{langs[lang].search}</button>

            </form>
            <GptMovieSuggessions query={query} />
        </div>
    )
}

export default GptSearchBar