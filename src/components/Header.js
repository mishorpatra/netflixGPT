import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { selectLanguage, toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGS } from "../utils/constants";

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    const handleSignout = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            alert("Cant Sign out!")
          });
    }

    const toggleGptButton = () => {
      dispatch(toggleGptSearch())
    }

    const handleChangeLang = (e) => {
      dispatch(selectLanguage(e.target.value))
    }

    useEffect(() => {
        const subscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName, photoURL } = user
              dispatch(addUser({uid, email, displayName, photoURL}))
              navigate('/browse')
            } else {
              dispatch(removeUser())
              navigate('/')

            }
          });

          return () => subscribed()
    }, [])
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                alt="logo"
            
            />

            {user && <div className="flex items-center">
                {showGptSearch && <select onChange={handleChangeLang} className="px-4 py-2 m-4 bg-black text-white">
                  {
                    SUPPORTED_LANGS?.map(elm => (
                      <option className="text-white"  key={elm.identifier} value={elm.identifier}>{elm.name}</option>
                    ))
                  }
                </select>}
                <button onClick={toggleGptButton} className="px-4 py-2 m-4 bg-purple-800 rounded-lg text-white">
                  { showGptSearch ? "Homepage" : "GPT Search"}
                </button>
                <img className="w-12 h-12" src={user.profileURL} />
                <p>{user.displayName}</p>
                <button className="p-2 underline cursor-pointer" onClick={() => handleSignout()}>Sign out</button>
            </div>}
            
        </div>
    )
}

export default Header