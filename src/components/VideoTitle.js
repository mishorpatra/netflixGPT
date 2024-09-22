const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold text-white">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/2 text-white">{overview}</p>
            <div>
                <button className="text-black px-6 md:px-12 py-2 md:py-4 bg-white text-lg rounded-md hover:opacity-70">▶️ Play</button>
                <button className="hidden md:inline-block text-white px-12 py-4 mx-2 bg-gray-500 opacity-50 text-lg rounded-md">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle