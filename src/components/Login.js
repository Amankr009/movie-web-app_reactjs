import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./Header";
import { formFieldsValidate } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [signInForm, setSingInFrom] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = () => {
        const message = formFieldsValidate(name?.current?.value, email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        //Sign In and Sing Up
        if(signInForm) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(() => {
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"->"+errorMessage);
            });
        }
        else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                }).then(() => {
                    const { uid, email, displayName} = auth.currentUser;
                    dispatch(
                        addUser({
                            uid: uid, email: email, displayName: displayName
                        })
                    );
                    navigate("/browse");
                }).catch((error) => {
                    setErrorMessage(error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"->"+errorMessage);
            });
        }
    };

    const toggleForm = () => {
        setSingInFrom(!signInForm);
    };
    return (
        <div>
            <Header />
            <img 
                className="absolute" 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                alt="login-bg-img"
            />
            <form 
                onSubmit={(e) => e.preventDefault()} 
                className="absolute right-0 left-0 w-4/12 my-36 mx-auto bg-black text-white bg-opacity-75 p-12 rounded"
            >
                <h1 className="text-3xl font-semibold mb-4">
                    {signInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!signInForm && <input 
                    ref={name}
                    className="w-full px-4 py-3 bg-gray-700 mt-4 rounded" 
                    type="text" placeholder="Full Name"
                />}
                <input 
                    ref={email}
                    className="w-full px-4 py-3 bg-gray-700 mt-4 rounded" 
                    type="text" placeholder="Email"
                />
                <input 
                    ref={password}
                    className="w-full px-4 py-3 bg-gray-700 mt-4 rounded" 
                    type="password" 
                    placeholder="Password"
                />
                <p className="mt-2 font-sans text-red-600">
                    {errorMessage}
                </p>
                <button 
                    className="w-full px-4 py-3 bg-red-700 mt-10 rounded-lg" 
                    onClick={handleSubmit}
                >
                    {signInForm ? "Sign In" : "Sign Up"}
                </button>
                <div className="flex text-sm mt-20">
                    <p className="text-gray-400">
                        {signInForm ? "New to Netflix?" : "Already registered?"}
                    </p>
                    <p className="ml-2 cursor-pointer hover:underline" 
                        onClick={toggleForm}>
                        {signInForm ? "Sign Up now" : "Sign In now"}
                    </p>
                    .
                </div>
            </form>
        </div>
    );
};

export default Login;