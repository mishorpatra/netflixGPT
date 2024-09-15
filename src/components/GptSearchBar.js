import { useSelector } from "react-redux"
import { langs } from "../utils/languageConstants"

const GptSearchBar = () => {

    const lang = useSelector(store => store.gpt.language)
    console.log(lang)
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12">
                <input className="col-span-9 p-4 m-4" placeholder={langs[lang].placeholderText} />
                <button className="col-span-3 m-4 py-2 px-6 bg-red-700 rounded-lg text-white">{langs[lang].search}</button>

            </form>
        </div>
    )
}

export default GptSearchBar