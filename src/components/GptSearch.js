import { BACKGROUND_IMAGE } from "../utils/constants"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img className="h-screen object-cover" src={BACKGROUND_IMAGE} 
                    alt="background"
                
                />
            </div>
            <GptSearchBar />
        </div>
    )
}

export default GptSearch