import { Link } from "react-router-dom"

const GoHome = () => {
    return (
        <Link to="/" className="bg-blue-500 text-white flex items-center gap-2 px-2 py-1 rounded shadow-md font-bold hover:scale-105 hover:bg-blue-400 transition-all">
            <img src="/iron-key/assets/icons/house.png"
                alt="Home Icon"
                className="h-4" />Go Home
        </Link>
    )
}

export default GoHome