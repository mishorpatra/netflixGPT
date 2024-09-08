import { validateForm } from "../utils/validation"
import Header from "./Header"
import { useDebugValue, useRef, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"

const Login = () => {

    const [toggleSigninForm, setToggleSigninForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState()

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleToggleSignin  = () => {
        setToggleSigninForm(!toggleSigninForm)

    }

    const handleSubmit = () => {
        let verify = validateForm(email.current.value, password.current.value)

        setErrorMessage(verify)
        if(verify !== null) return

        if(!toggleSigninForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, 
                    photoURL: "https://lh3.googleusercontent.com/a/ACg8ocI2Clasms94Vpxz-azksUSdWit4S8CgFKLoNuQc_skfAFGiPAIJ=s96-c"
                  }).then(() => {
                    const { uid, displayName, email, photoURL } = auth.currentUser
                    dispatch(addUser({
                        uid,
                        displayName,
                        email,
                        photoURL
                    }))

                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(`(${errorCode}) ${errorMessage}`)
                // ..
            });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(`(${errorCode}) ${errorMessage}`)
            });
        }

       
        

    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg" 
                    alt="background"
                
                />
            </div>

            <form onSubmit={(e) => e.preventDefault() } className="w-3/12 bg-black absolute p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold py-4">{ toggleSigninForm ? "Sign In":"Sign Up"}</h1>
                <input 
                    type="text" 
                    ref={email}
                    placeholder="Email address" 
                    className="p-4 my-4 w-full bg-gray-800" 
                />
                {!toggleSigninForm && <input 
                    ref={name}
                    type="text" 
                    placeholder="Name" 
                    className="p-4 my-4 w-full bg-gray-800" 
                />}
                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-gray-800" 
                />

                {<p className="text-red-500 font-bold py-2 text-lg" >{errorMessage}</p>}

                <button 
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={() => handleSubmit()}
                >{toggleSigninForm ? "Sign In":"Sign Up"}</button>
                <p className="cursor-pointer" onClick={() => handleToggleSignin()}>{toggleSigninForm ? "New to Netflix? Sign Up now":"Already Have a account? Sign In"}</p>
            </form>
           
        </div>
    )
}

export default Login